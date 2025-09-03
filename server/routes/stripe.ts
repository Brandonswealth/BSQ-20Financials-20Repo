// server/stripe-routes.ts
import type { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const SERVICE_PRICES: Record<string, { price: number; monthlyPrice?: number; category: string; name: string }> = {
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

export async function handleCheckoutWithStripe(req: Request, res: Response) {
    try {
      const {
        orderNumber,
        selectedService,
        paymentPlan,
        addOns = [],
        customer,
        billing,
      } = req.body as {
        orderNumber: string;
        selectedService: string;
        paymentPlan: "full" | "monthly";
        addOns: string[];
        customer?: { firstName?: string; lastName?: string; email?: string; phone?: string; businessName?: string; currentCreditScore?: string; goals?: string; };
        billing?: { address1?: string; city?: string; state?: string; postalCode?: string; country?: string; };
      };

      const svc = SERVICE_PRICES[selectedService];
      if (!svc) return res.status(400).send("Invalid service");

      const validAddOns = addOns.filter((k) => ADDONS[k]);
      const addOnsTotal = validAddOns.reduce((sum, k) => sum + ADDONS[k].price, 0);
      const base =
        paymentPlan === "monthly" && svc.monthlyPrice ? svc.monthlyPrice : svc.price;
      const total = base + addOnsTotal;

      if (total <= 0) return res.status(400).send("Invalid total");

      const description = `${svc.name}${validAddOns.length ? ` + ${validAddOns.length} add-on(s)` : ""}`;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total * 100), // cents
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        receipt_email: customer?.email,
        description,
        metadata: {
          orderNumber,
          serviceKey: selectedService,
          serviceName: svc.name,
          category: svc.category,
          paymentPlan,
          addOns: JSON.stringify(validAddOns),
          customerName: `${customer?.firstName || ""} ${customer?.lastName || ""}`.trim(),
          customerEmail: customer?.email || "",
          customerPhone: customer?.phone || "",
        },
        shipping: undefined, // not shipping physical goods
      });

      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (e: any) {
      console.error(e);
      res.status(500).send(e?.message || "Server error");
    }
}
