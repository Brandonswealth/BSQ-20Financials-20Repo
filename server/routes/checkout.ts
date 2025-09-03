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
  const subject = `Order Confirmation — ${data.orderNumber}`;

  const itemsHtml = [
    `<li><strong>${data.service.name}</strong> (${data.service.category}) — $${data.paymentPlan === "monthly" && data.service.monthlyPrice ? `${data.service.monthlyPrice}/mo` : data.service.price}</li>`,
    ...data.addOns.map((a) => `<li>${a.name} — $${a.price}</li>`),
  ].join("");

  const html = `
  <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
    <h2>Thank you, ${customerName}!</h2>
    <p>Your order has been received and is being processed.</p>
    <p><strong>Order Number:</strong> ${data.orderNumber}</p>
    <p><strong>Summary:</strong></p>
    <ul>${itemsHtml}</ul>
    <p style="font-size:16px"><strong>Total:</strong> $${data.total.toLocaleString()}</p>
    <p>We’ll contact you within 24 hours with next steps. If you have questions, reply to this email.</p>
    <p>— BSQ Financials</p>
  </div>`;

  const text = `Thank you, ${customerName}!
Order Number: ${data.orderNumber}
Service: ${data.service.name} (${data.service.category})
Total: $${data.total}
We’ll contact you within 24 hours. — BSQ Financials`;

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
