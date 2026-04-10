"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, Clock, CheckCircle2, XCircle, AlertCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// حالات الطلب التجريبية
const orderStatuses = {
  pending: { label: "قيد المراجعة", color: "text-yellow-600", bg: "bg-yellow-500/10", icon: AlertCircle },
  processing: { label: "قيد التنفيذ", color: "text-blue-600", bg: "bg-blue-500/10", icon: Clock },
  completed: { label: "مكتمل", color: "text-green-600", bg: "bg-green-500/10", icon: CheckCircle2 },
  cancelled: { label: "ملغي", color: "text-red-600", bg: "bg-red-500/10", icon: XCircle },
}

export default function TrackOrderPage() {
  const [phone, setPhone] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searched, setSearched] = useState(false)
  const [orders, setOrders] = useState<any[]>([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    // بيانات تجريبية - في الواقع ستأتي من قاعدة البيانات
    if (phone === "0563457734") {
      setOrders([
        {
          id: "ORD-2026-001",
          date: "2026-02-01",
          app: "تابي",
          amount: 5000,
          finalAmount: 3125,
          status: "completed"
        },
        {
          id: "ORD-2026-002",
          date: "2026-02-03",
          app: "تمارا",
          amount: 3000,
          finalAmount: 1875,
          status: "processing"
        }
      ])
    } else {
      setOrders([])
    }

    setIsSearching(false)
    setSearched(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              تتبع طلبك
            </span>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              تتبع حالة طلبك
            </h1>
            <p className="text-muted-foreground text-lg">
              أدخل رقم جوالك لمتابعة حالة طلباتك
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch} className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الجوال المسجل
                </label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    className="pr-11 text-left"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSearching || !phone}>
                {isSearching ? (
                  <>جاري البحث...</>
                ) : (
                  <>
                    <Search className="w-5 h-5 ml-2" />
                    بحث عن طلباتي
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {orders.length > 0 ? (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    طلباتك ({orders.length})
                  </h2>
                  
                  {orders.map((order) => {
                    const status = orderStatuses[order.status as keyof typeof orderStatuses]
                    const StatusIcon = status.icon
                    
                    return (
                      <div key={order.id} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-foreground">{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.date).toLocaleDateString('ar-SA')}
                            </p>
                          </div>
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg}`}>
                            <StatusIcon className={`w-4 h-4 ${status.color}`} />
                            <span className={`text-sm font-medium ${status.color}`}>{status.label}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">التطبيق:</span>
                            <span className="text-foreground font-medium mr-2">{order.app}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">مبلغ الشراء:</span>
                            <span className="text-foreground font-medium mr-2">{order.amount.toLocaleString()} ريال</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-muted-foreground">المبلغ المستلم:</span>
                            <span className="text-primary font-bold mr-2">{order.finalAmount.toLocaleString()} ريال</span>
                          </div>
                        </div>

                        {order.status === "processing" && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-blue-600 text-sm">
                              <Clock className="w-4 h-4 animate-pulse" />
                              <span>جاري تنفيذ طلبك... سيتم التحويل خلال ساعة</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="bg-card rounded-2xl p-8 border border-border text-center">
                  <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">لا توجد طلبات</h3>
                  <p className="text-muted-foreground mb-6">
                    لم نجد أي طلبات مرتبطة بهذا الرقم. تأكد من إدخال الرقم الصحيح أو قدم طلباً جديداً.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <Link href="/order">طلب سيولة جديد</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                        تواصل معنا
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            تحتاج مساعدة؟
          </h2>
          <p className="text-muted-foreground mb-6">
            تواصل معنا مباشرة على واتساب للاستفسار عن طلبك
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5 ml-2" />
              0563457734
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
