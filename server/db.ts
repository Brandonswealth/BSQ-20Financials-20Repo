import { Pool } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool | null {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!pool) {
    pool = new Pool({ connectionString: url, ssl: getSSL() });
  }
  return pool;
}

function getSSL() {
  // Neon and many hosted Postgres require SSL in prod; allow disabling via env
  const ssl = process.env.PGSSL?.toLowerCase();
  if (ssl === "disable" || ssl === "false" || ssl === "0") return undefined;
  return { rejectUnauthorized: false } as any;
}

export async function initDB() {
  const p = getPool();
  if (!p) {
    console.warn("[db] DATABASE_URL not set — skipping DB init");
    return;
  }
  await p.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id BIGSERIAL PRIMARY KEY,
      order_number TEXT NOT NULL UNIQUE,
      emailed BOOLEAN DEFAULT false,
      payload JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders (created_at DESC);
  `);
}

export async function insertOrder(orderNumber: string, payload: any, emailed: boolean) {
  const p = getPool();
  if (!p) throw new Error("DATABASE_URL not configured");
  await p.query(
    `INSERT INTO orders (order_number, payload, emailed) VALUES ($1, $2, $3)
     ON CONFLICT (order_number) DO UPDATE SET payload = EXCLUDED.payload, emailed = EXCLUDED.emailed`,
    [orderNumber, JSON.stringify(payload), emailed],
  );
}

export type OrderRow = {
  id: number;
  order_number: string;
  emailed: boolean;
  payload: any;
  created_at: string;
};

export async function listOrders(limit = 200): Promise<OrderRow[]> {
  const p = getPool();
  if (!p) throw new Error("DATABASE_URL not configured");
  const { rows } = await p.query(
    `SELECT id, order_number, emailed, payload, created_at
     FROM orders ORDER BY created_at DESC LIMIT $1`,
    [limit],
  );
  return rows as OrderRow[];
}
