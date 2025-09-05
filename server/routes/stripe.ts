// server/stripe-routes.ts
import Stripe from "stripe";
import { ok, error } from "../../netlify/functions/_utils/http.ts";

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// Allow addOns to be strings (keys) or objects (LineItem-like)
type AddOnInput =
  | string
  | {
  key: string;
  name: string;
  category: string;
  price: number;
  monthlyPrice?: number;
  originalPrice?: number;
  qty?: number;
};

export type StripeCheckoutRequest = {
  orderNumber: string;
  service?: {
    key: string;
    name: string;
    category: string;
    price: number;
    monthlyPrice?: number;
    originalPrice?: number;
  };
  paymentPlan: "full" | "monthly"; // default: "full"
  selectedService?: string; // kept for backward compatibility
  addOns?: AddOnInput[];
  total?: number; // optional if you want a server to compute
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    businessName?: string;
    currentCreditScore?: string;
    goals?: string;
    preferredPayment?: string;
  };
  billing?: {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
};

const SERVICE_PRICES: Record<
  string,
  { price: number; monthlyPrice?: number; category: string; name: string }
> = {
  "basic-credit": { name: "Basic Credit Plan", price: 297, category: "Credit Repair" },
  "essentials-credit": { name: "Essentials Credit Plan", price: 499, category: "Credit Repair" },
  "premium-credit": { name: "Premium Credit Sweep", price: 2500, monthlyPrice: 599, category: "Credit Repair" },
  "done-for-you-credit": { name: "Done For You Package", price: 3997, monthlyPrice: 999, category: "Credit Repair" },
  "business-starter": { name: "Business Starter", price: 499, category: "Business" },
  "credibility-booster": { name: "Credibility Booster", price: 997, monthlyPrice: 300, category: "Business" },
  "investor-ready": { name: "Investor Ready Pro", price: 1497, monthlyPrice: 399, category: "Business" },
  "complete-business": { name: "Complete Business CFO Package", price: 4997, monthlyPrice: 1249, category: "Business" },
};

const ADDONS: Record<string, { name: string; price: number }> = {
  rush: { name: "Rush Processing (48 hours)", price: 99 },
  extended: { name: "Extended Support (90 days)", price: 149 },
  monitoring: { name: "Credit Monitoring Setup", price: 49 },
  identity: { name: "Identity Theft Protection", price: 79 },
};

// Normalize add-ons to keys and filter to known ones
function normalizeAddOnKeys(addOns: AddOnInput[] | undefined) {
  const keys = (addOns ?? []).map((a) => (typeof a === "string" ? a : a.key)).filter(Boolean) as string[];
  return keys.filter((k) => !!ADDONS[k]);
}

export async function handleCheckoutWithStripe(req: StripeCheckoutRequest) {
  try {
    const {
      orderNumber,
      selectedService,
      service,
      paymentPlan,
      addOns,
      customer,
      // billing, // not used in PaymentIntent (no physical shipping); keep if you plan to store elsewhere
    } = req;

    // Accept either selectedService or service.key
    const serviceKey = selectedService ?? service?.key;
    if (!serviceKey) return error(400, "Missing service selection");

    const svc = SERVICE_PRICES[serviceKey];
    if (!svc) return error(400, "Invalid service");

    // Normalize add-ons
    const addOnKeys = normalizeAddOnKeys(addOns);
    const addOnsTotal = addOnKeys.reduce((sum, k) => sum + ADDONS[k].price, 0);

    // Pick base price by plan
    const base = paymentPlan === "monthly" && svc.monthlyPrice ? svc.monthlyPrice : svc.price;
    const computedTotal = base + addOnsTotal;

    if (!(computedTotal > 0)) return error(400, "Invalid total");

    const description =
      `${svc.name}${addOnKeys.length ? ` + ${addOnKeys.length} add-on(s)` : ""}` +
      (paymentPlan === "monthly" ? " (Monthly plan)" : "");

    const metadataAddOns = addOnKeys.map((k) => ({ name: ADDONS[k].name, price: ADDONS[k].price }));

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(computedTotal * 100), // cents
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      receipt_email: customer?.email,
      description,
      metadata: {
        orderNumber,
        serviceKey: serviceKey,
        serviceName: svc.name,
        category: svc.category,
        paymentPlan,
        addOns: JSON.stringify(metadataAddOns),
        customerName: `${customer?.firstName || ""} ${customer?.lastName || ""}`.trim(),
        customerEmail: customer?.email || "",
        customerPhone: customer?.phone || "",
      },
      // Do not include `shipping` if not needed
    });

    return ok({ clientSecret: paymentIntent.client_secret });
  } catch (e: any) {
    console.error(e);
    return error(500, e?.message || "Server error");
  }
}
