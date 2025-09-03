import type { RequestInit } from "node-fetch";

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string;
};

export async function sendEmail(input: SendEmailInput): Promise<{ id?: string }>{
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }
  const from = input.from || process.env.MAIL_FROM || "support@bluesq.pro";
  const body = {
    from,
    to: Array.isArray(input.to) ? input.to : [input.to],
    subject: input.subject,
    html: input.html,
    text: input.text,
    reply_to: input.replyTo || process.env.MAIL_REPLY_TO || "support@bluesq.pro",
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  } as RequestInit);

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Resend API error ${res.status}: ${errText}`);
  }

  const json = (await res.json()) as { id?: string };
  return json;
}
