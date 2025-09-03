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
  const from = input.from || process.env.MAIL_FROM || "support@bluesq.pro";

  // Graceful no-op when API key is not configured (dev or staging)
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — skipping email send");
    return { id: "skipped" };
  }

  const body = {
    from,
    to: Array.isArray(input.to) ? input.to : [input.to],
    subject: input.subject,
    html: input.html,
    text: input.text,
    reply_to: input.replyTo || process.env.MAIL_REPLY_TO || "support@bluesq.pro",
  } as any;

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
