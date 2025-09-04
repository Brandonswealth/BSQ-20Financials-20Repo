// server/index.ts

// Load dotenv only for local dev. On Netlify, env vars come from dashboard.
if (!process.env.NETLIFY) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

import { initDB } from "./db";

// Optionally, initialize once (safe to call many times).
export async function bootstrap() {
  try {
    await initDB();
  } catch (e) {
    console.error("[bootstrap] DB init error", e);
  }
}

// Re-export your route/business logic so functions can import from here.
export * from "./routes/demo";
