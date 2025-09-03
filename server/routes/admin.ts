import type { Request, Response } from "express";
import { listOrders } from "../db";

function ensureAdmin(req: Request): boolean {
  const token = req.get("x-admin-token") || req.query.token || "";
  const adminToken = process.env.ADMIN_TOKEN || "";
  return Boolean(adminToken) && String(token) === adminToken;
}

export async function handleAdminListOrders(req: Request, res: Response) {
  if (!ensureAdmin(req)) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const limit = Math.min(1000, Number(req.query.limit) || 200);
    const orders = await listOrders(limit);
    return res.json({ orders });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || "Failed to list orders" });
  }
}
