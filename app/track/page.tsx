"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, Clock, CheckCircle2, Truck, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const statusMap: Record<string, { label: string; color: string; icon: React.ElementType; step: number }> = {
  pending: { label: "قيد المراجعة", color: "text-yellow-500", icon: Clock, step: 1 },
  processing: { label: "جاري التنفيذ", color: "text-blue-500", icon: Package, step: 2 },
  payment_sent: { label: "تم التحويل", color: "text-green-500", icon: Truck, step: 3 },
  completed: { label: "مكتمل", color: "text-green-600", icon: CheckCircle2, step: 4 },
  cancelled: { label: "ملغي", color: "text-red-500", icon: XCircle, step: 0 },
}

const appNames: Record<string, string> = {
  tabby: "تابي",
  tamara: "تمارا",
  madfu: "مدفوع",
}

type Order = {
  id: string
  order_number: string
  customer_name: string
  customer_phone: string
  app_type: string
  purchase_amount: number
  final_amount: number
  status: string
  created_at: string
}

export default function TrackPage() {
  const [query, setQuery] = useState("")
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setSearched(true)

    try {
      const isPhone = /^0\d{9}$/.test(query.trim())
      const param = isPhone ? `phone=${query.trim()}` : `order_number=${query.trim()}`
      const res = await fetch(`/api/orders?${param}`)
      const data = await res.json()

      if (data.orders && data.orders.length > 0) {
        setOrder(data.orders[0])
      } else {
        setOrder(null)
      }
    } catch {
      setOrder(null)
    } finally {
      setLoading(false)
    }
  }

  const status = order ? statusMap[order.status] || statusMap.pending : null

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              تتبع الطلب
            </span>
            <h1 className="text-4xl font-bold text-foreground mb-4">تتبع طلبك</h1>
            <p className="text-muted-foreground text-lg">
              أدخل رقم الطلب أو رقم جوالك لمعرفة حالة طلبك
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="flex gap-3 mb-8">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="رقم الطلب (LS-XXXXXX) أو رقم الجوال"
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button onClick={handleSearch} disabled={loading}>
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              </Button>
            </div>

            {searched && !loading && !order && (
              <div className="text-center py-12 bg-card rounded-2xl border border-border">
                <XCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">لم يتم العثور على طلب</h3>
                <p className="text-muted-foreground">تأكد من رقم الطلب أو رقم الجوال</p>
              </div>
            )}

            {order && status && (
              <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <span className={`flex items-center gap-2 font-bold ${status.color}`}>
                    <status.icon className="w-5 h-5" />
                    {status.label}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">{order.order_number}</span>
                </div>

                {order.status !== "cancelled" && (
                  <div className="flex items-center justify-between mb-8 px-2">
                    {[1, 2, 3, 4].map((s) => (
                      <div key={s} className="flex items-center gap-0 flex-1 last:flex-none">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          status.step >= s
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}>
                          {s}
                        </div>
                        {s < 4 && (
                          <div className={`flex-1 h-1 mx-1 rounded ${
                            status.step > s ? "bg-primary" : "bg-secondary"
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{order.customer_name}</span>
                    <span className="text-muted-foreground">الاسم:</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{appNames[order.app_type] || order.app_type}</span>
                    <span className="text-muted-foreground">التطبيق:</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{Number(order.purchase_amount).toLocaleString()} ريال</span>
                    <span className="text-muted-foreground">مبلغ الشراء:</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="text-primary font-bold text-lg">{Number(order.final_amount).toLocaleString()} ريال</span>
                    <span className="text-muted-foreground">المبلغ المستلم:</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{new Date(order.created_at).toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                    <span className="text-muted-foreground">تاريخ الطلب:</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
