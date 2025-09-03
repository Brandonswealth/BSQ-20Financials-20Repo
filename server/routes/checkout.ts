import { z } from "zod";
import type { Request, Response } from "express";
import { sendEmail } from "../email";

const LineItemSchema = z.object({ key: z.string(), name: z.string(), price: z.number() });

const CheckoutPayloadSchema = z.object({
  orderNumber: z.string(),
  service: z.object({ key: z.string(), name: z.string(), category: z.string(), price: z.number(), monthlyPrice: z.number().optional(), originalPrice: z.number().optional() }),
  paymentPlan: z.enum(["full", "monthly"]).optional().default("full"),
  addOns: z.array(LineItemSchema).optional().default([]),
  total: z.number(),
  customer: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    businessName: z.string().optional(),
    currentCreditScore: z.string().optional(),
    goals: z.string().optional(),
    preferredPayment: z.string().optional(),
  }),
});

export async function handleCheckoutConfirm(req: Request, res: Response) {
  const parse = CheckoutPayloadSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid payload", details: parse.error.flatten() });
  }
  const data = parse.data;

  // Build email contents
  const customerName = `${data.customer.firstName} ${data.customer.lastName}`.trim();
  const supportEmail = process.env.MAIL_SUPPORT || "support@bluesq.pro";
  const now = new Date();
  const orderDate = now.toLocaleString("en-US", { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  const currency = (v: number) => `$${v.toLocaleString()}`;
  const basePrice = data.paymentPlan === "monthly" && data.service.monthlyPrice ? data.service.monthlyPrice : data.service.price;
  const baseLabel = data.paymentPlan === "monthly" && data.service.monthlyPrice ? `${currency(data.service.monthlyPrice)} / mo` : currency(data.service.price);

  const subject = `🎉 BSQ Financials — Order Confirmed: ${data.orderNumber}`;

  const addOnsRows = (data.addOns || [])
    .map((a) => `<tr><td style="padding:8px 0;color:#555">${a.name}</td><td style="padding:8px 0;text-align:right;color:#111">${currency(a.price)}</td></tr>`)
    .join("");

  const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2Fe10a085771f24e478a2d38f0d8c608b0?format=webp&width=256";
  const ctaBtn = (href: string, label: string, bg = "#1e3a8a") => `<a href="${href}" style="display:inline-block;background:${bg};color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:600">${label}</a>`;

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;background:#f8fafc;padding:24px">
    <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
      <div style="padding:20px 24px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:12px">
        <img src="${logoUrl}" width="36" height="36" alt="BSQ Financials" style="display:block"/>
        <div style="font-size:16px;font-weight:700;color:#0f172a">BSQ Financials</div>
      </div>
      <div style="padding:24px">
        <h2 style="margin:0 0 8px;font-size:22px;color:#0f172a">🎉 Thank you, ${customerName}!</h2>
        <p style="margin:0 0 12px;color:#334155">We’ve received your order and we’re excited to get started.</p>
        <div style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px;margin:12px 0">
          <div style="display:flex;justify-content:space-between;color:#334155"><span><strong>Order #</strong></span><span>${data.orderNumber}</span></div>
          <div style="display:flex;justify-content:space-between;color:#334155"><span><strong>Date</strong></span><span>${orderDate}</span></div>
          <div style="display:flex;justify-content:space-between;color:#334155"><span><strong>Plan</strong></span><span>${data.paymentPlan === "monthly" ? "Monthly" : "Pay in Full"}</span></div>
          <div style="display:flex;justify-content:space-between;color:#334155"><span><strong>Payment Method</strong></span><span>${data.customer.preferredPayment || "—"}</span></div>
        </div>

        <h3 style="margin:16px 0 8px;color:#0f172a;font-size:18px">Receipt</h3>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;color:#111"><strong>${data.service.name}</strong> <span style="color:#64748b">(${data.service.category}${data.paymentPlan === "monthly" ? ", monthly plan" : ""})</span></td>
            <td style="padding:8px 0;text-align:right;color:#111">${baseLabel}</td>
          </tr>
          ${addOnsRows}
          <tr>
            <td style="padding:8px 0;border-top:1px solid #e2e8f0;color:#111"><strong>Total</strong></td>
            <td style="padding:8px 0;border-top:1px solid #e2e8f0;text-align:right;color:#111"><strong>${currency(data.total)}</strong></td>
          </tr>
        </table>

        <h3 style="margin:18px 0 8px;color:#0f172a;font-size:18px">Customer</h3>
        <p style="margin:0 0 16px;color:#334155">${customerName}<br/>${data.customer.email} · ${data.customer.phone}${data.customer.businessName ? `<br/>${data.customer.businessName}` : ""}</p>

        <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:12px 14px;margin:12px 0">
          <p style="margin:0 0 8px;color:#9a3412"><strong>Action required:</strong> please complete this short form so we can process your order before an agent reaches out.</p>
          ${ctaBtn("https://pci.jotform.com/form/252128027758056", "Complete Secure Intake Form", "#c2410c")}
        </div>

        <div style="margin:18px 0;display:flex;gap:12px;flex-wrap:wrap">
          ${ctaBtn("https://calendly.com/brandonswealth/15min", "Schedule Free Consultation", "#0369a1")}
          ${ctaBtn("https://www.bsqfinancials.pro/services", "Explore More Services")}
        </div>

        <p style="margin:16px 0 0;color:#334155">Have questions? Just reply to this email or contact <a href="mailto:${supportEmail}" style="color:#1e3a8a;text-decoration:none">${supportEmail}</a>.</p>
        <p style="margin:8px 0 0;color:#334155">— The BSQ Financials Team</p>
      </div>
    </div>
  </div>`;

  const text = [
    `Thank you, ${customerName}! Your order is confirmed.`,
    `Order #: ${data.orderNumber}`,
    `Date: ${orderDate}`,
    `Plan: ${data.paymentPlan === "monthly" ? "Monthly" : "Pay in Full"}`,
    `Payment Method: ${data.customer.preferredPayment || "—"}`,
    `Service: ${data.service.name} (${data.service.category}) — ${baseLabel}`,
    ...(data.addOns || []).map((a) => `Add-on: ${a.name} — ${currency(a.price)}`),
    `Total: ${currency(data.total)}`,
    `Customer: ${customerName} | ${data.customer.email} | ${data.customer.phone}`,
    `Action required: Complete intake form: https://pci.jotform.com/form/252128027758056`,
    `Next: We’ll contact you within 24 hours. Schedule: https://calendly.com/brandonswealth/15min`,
    `Support: ${supportEmail}`,
    `— BSQ Financials`,
  ].join("\n");

  let emailed = true;
  try {
    // Send to customer
    await sendEmail({ to: data.customer.email, subject, html, text });
    // Send copy to support
    await sendEmail({
      to: supportEmail,
      subject: `New Order Received — ${data.orderNumber}`,
      html: `<div><p>New order placed by ${customerName} (${data.customer.email}, ${data.customer.phone}).</p>${html}</div>`,
      text,
    });
  } catch (err: any) {
    emailed = false;
    console.error("[checkout] email error:", err?.message || err);
  }

  return res.json({ ok: true, emailed });
}
