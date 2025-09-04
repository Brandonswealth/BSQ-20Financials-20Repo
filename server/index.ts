import "dotenv/config";
import express from "express";
import cors from "cors";
//import { handleDemo } from "./routes/demo";
import { handleCheckoutConfirm } from "./routes/checkout";
import { initDB } from "./db";
import { handleAdminListOrders } from "./routes/admin";
import { handleCheckoutWithStripe } from "./routes/stripe";

export function createServer() {
  const app = express();

  // Initialize database (no-op if DATABASE_URL not set)
  initDB().catch((e) => console.error("[db] init error", e));

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  //app.get("/api/demo", handleDemo);
  app.post("/api/checkout/stripe", handleCheckoutWithStripe);
  app.post("/api/checkout/confirm", handleCheckoutConfirm);

  // Admin
  app.get("/api/admin/orders", handleAdminListOrders);

  return app;
}
