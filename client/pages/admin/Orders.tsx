import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

interface OrderRow {
  id: number;
  order_number: string;
  emailed: boolean;
  payload: any;
  created_at: string;
}

export default function AdminOrders() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const t = localStorage.getItem("adminToken") || "";
    setToken(t);
  }, []);

  const fetchKey = useMemo(() => ["adminOrders", token], [token]);
  const { data, refetch, isFetching, error } = useQuery<{ orders: OrderRow[] }>({
    queryKey: fetchKey,
    queryFn: async () => {
      const res = await fetch(`/api/admin/orders`, {
        headers: token ? { "x-admin-token": token } : undefined,
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    enabled: Boolean(token),
  });

  const saveToken = () => {
    localStorage.setItem("adminToken", token);
    refetch();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Admin Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-end gap-3">
              <div className="flex-1">
                <Label htmlFor="adminToken">Admin Token</Label>
                <Input
                  id="adminToken"
                  placeholder="Enter admin token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={saveToken}>Save</Button>
                <Button variant="outline" onClick={() => refetch()} disabled={!token || isFetching}>
                  Refresh
                </Button>
              </div>
            </div>
            {error && (
              <div className="mt-3 text-sm text-red-600">Access denied or server error.</div>
            )}
          </CardContent>
        </Card>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Order #</th>
                <th className="py-2 pr-4">Customer</th>
                <th className="py-2 pr-4">Service</th>
                <th className="py-2 pr-4">Plan</th>
                <th className="py-2 pr-4">Payment</th>
                <th className="py-2 pr-4">Total</th>
                <th className="py-2 pr-4">Email</th>
              </tr>
            </thead>
            <tbody>
              {data?.orders?.map((o) => {
                const customer = o.payload?.customer || {};
                const service = o.payload?.service || {};
                const created = new Date(o.created_at).toLocaleString();
                return (
                  <tr key={o.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 pr-4 whitespace-nowrap">{created}</td>
                    <td className="py-2 pr-4 font-medium">{o.order_number}</td>
                    <td className="py-2 pr-4">
                      <div className="font-medium">
                        {customer.firstName} {customer.lastName}
                      </div>
                      <div className="text-gray-600">
                        {customer.email} · {customer.phone}
                      </div>
                    </td>
                    <td className="py-2 pr-4">
                      <div className="font-medium">{service.name}</div>
                      <div className="text-gray-600">{service.category}</div>
                    </td>
                    <td className="py-2 pr-4 whitespace-nowrap">{o.payload?.paymentPlan}</td>
                    <td className="py-2 pr-4 whitespace-nowrap">{customer.preferredPayment || "—"}</td>
                    <td className="py-2 pr-4 whitespace-nowrap">
                      ${o.payload?.total?.toLocaleString?.() || o.payload?.total}
                    </td>
                    <td className="py-2 pr-4">
                      {o.emailed ? (
                        <Badge className="bg-green-600">Sent</Badge>
                      ) : (
                        <Badge variant="outline" className="border-red-600 text-red-700">Failed</Badge>
                      )}
                    </td>
                  </tr>
                );
              })}
              {!data?.orders?.length && (
                <tr>
                  <td className="py-6 text-gray-600" colSpan={8}>
                    {token ? "No orders yet." : "Enter admin token to load orders."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
