"use client"

import React from "react"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Package, Clock, CheckCircle2, Truck, XCircle, LogOut,
  Search, RefreshCw, Phone, DollarSign, Filter, Loader2,
  ChevronDown, MessageCircle, Trash2, Bot, Bell, MessagesSquare
} from "lucide-react"
import Link from "next/link"

const statusConfig: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  pending: { label: "قيد المراجعة", color: "text-yellow-600", bg: "bg-yellow-50 border-yellow-200", icon: Clock },
  processing: { label: "جاري التنفيذ", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", icon: Package },
  payment_sent: { label: "تم التحويل", color: "text-green-600", bg: "bg-green-50 border-green-200", icon: Truck },
  completed: { label: "مكتمل", color: "text-green-700", bg: "bg-green-100 border-green-300", icon: CheckCircle2 },
  cancelled: { label: "ملغي", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: XCircle },
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
  sale_amount: number
  admin_fee: number
  first_payment: number
  final_amount: number
  remaining_installment: number
  status: string
  notes: string | null
  created_at: string
  screenshot_url: string | null
  net_requested: number | null
  store_name: string | null
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const router = useRouter()

  const fetchOrders = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/orders")
      if (res.status === 401) {
        router.push("/admin/login")
        return
      }
      const data = await res.json()
      if (data.orders) setOrders(data.orders)
    } catch {
      console.error("Failed to fetch orders")
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id)
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      })
      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
        )
      }
    } catch {
      console.error("Failed to update")
    } finally {
      setUpdatingId(null)
    }
  }

  const deleteOrder = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الطلب؟")) return
    try {
      const res = await fetch("/api/admin/orders", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      if (res.ok) {
        setOrders((prev) => prev.filter((o) => o.id !== id))
      }
    } catch {
      console.error("Failed to delete")
    }
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const sendWhatsApp = (order: Order) => {
    const statusLabel = statusConfig[order.status]?.label || order.status
    const message = `مرحباً ${order.customer_name}%0A%0Aتحديث طلبك رقم: ${order.order_number}%0Aالحالة: ${statusLabel}%0A%0Aمبلغ الشراء: ${Number(order.purchase_amount).toLocaleString()} ريال%0Aالمبلغ المستلم: ${Number(order.final_amount).toLocaleString()} ريال%0A%0Aشكراً لتعاملك مع مطر`
    const phone = order.customer_phone.startsWith("0")
      ? `966${order.customer_phone.slice(1)}`
      : order.customer_phone
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.customer_name.includes(searchQuery) ||
      o.customer_phone.includes(searchQuery) ||
      o.order_number.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || o.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    completed: orders.filter((o) => ["completed", "payment_sent"].includes(o.status)).length,
    totalAmount: orders
      .filter((o) => o.status !== "cancelled")
      .reduce((sum, o) => sum + Number(o.final_amount), 0),
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
 <h1 className="text-xl font-bold text-foreground">لوحة التحكم - مطر</h1>
  <div className="flex items-center gap-2">
    <Button variant="outline" size="sm" asChild className="bg-transparent">
      <Link href="/admin/conversations">
        <MessagesSquare className="w-4 h-4 ml-1" />
        المحادثات
      </Link>
    </Button>
    <Button variant="outline" size="sm" asChild className="bg-transparent">
      <Link href="/admin/notifications">
        <Bell className="w-4 h-4 ml-1" />
        الإشعارات
      </Link>
    </Button>
    <Button variant="outline" size="sm" asChild className="bg-transparent">
      <Link href="/admin/whatsapp">
        <Bot className="w-4 h-4 ml-1" />
        واتساب
      </Link>
    </Button>
    <Button variant="outline" size="sm" onClick={handleLogout} className="bg-transparent">
      <LogOut className="w-4 h-4 ml-2" />
      خروج
    </Button>
  </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-2xl font-bold text-foreground">{stats.total}</p>
            <p className="text-sm text-muted-foreground">إجمالي الطلبات</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center">
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            <p className="text-sm text-yellow-600">قيد المراجعة</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
            <p className="text-2xl font-bold text-blue-600">{stats.processing}</p>
            <p className="text-sm text-blue-600">جاري التنفيذ</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            <p className="text-sm text-green-600">مكتمل</p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border text-center col-span-2 md:col-span-1">
            <p className="text-2xl font-bold text-primary">{stats.totalAmount.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">إجمالي المبالغ (ر.س)</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم، الجوال، أو رقم الطلب..."
              className="pr-11"
            />
          </div>
          <div className="flex gap-2 items-center">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground"
            >
              <option value="all">الكل</option>
              <option value="pending">قيد المراجعة</option>
              <option value="processing">جاري التنفيذ</option>
              <option value="payment_sent">تم التحويل</option>
              <option value="completed">مكتمل</option>
              <option value="cancelled">ملغي</option>
            </select>
            <Button variant="outline" size="sm" onClick={fetchOrders} className="bg-transparent">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-3">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-border">
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">لا توجد طلبات</h3>
              <p className="text-muted-foreground">
                {searchQuery || filterStatus !== "all" ? "جرب تغيير البحث أو الفلتر" : "لم تصل أي طلبات بعد"}
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const status = statusConfig[order.status] || statusConfig.pending
              const isExpanded = expandedOrder === order.id

              return (
                <div key={order.id} className={`rounded-xl border ${status.bg} overflow-hidden transition-all`}>
                  {/* Order Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                    className="w-full p-4 flex items-center justify-between text-right"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <status.icon className={`w-5 h-5 flex-shrink-0 ${status.color}`} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-foreground">{order.customer_name}</span>
                          <span className="text-xs font-mono text-muted-foreground">{order.order_number}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {order.customer_phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            {Number(order.final_amount).toLocaleString()} ر.س
                          </span>
                          <span>{appNames[order.app_type] || order.app_type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.color} ${status.bg}`}>
                        {status.label}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-border/50">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">مبلغ الشراء</p>
                          <p className="font-bold text-foreground">{Number(order.purchase_amount).toLocaleString()} ر.س</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">مبلغ البيع</p>
                          <p className="font-bold text-foreground">{Number(order.sale_amount).toLocaleString()} ر.س</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">الرسوم الإدارية</p>
                          <p className="font-bold text-red-500">{Number(order.admin_fee).toLocaleString()} ر.س</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">الدفعة الأولى</p>
                          <p className="font-bold text-red-500">{Number(order.first_payment).toLocaleString()} ر.س</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">المبلغ المستلم</p>
                          <p className="font-bold text-primary text-lg">{Number(order.final_amount).toLocaleString()} ر.س</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">المتبقي للتقسيط</p>
                          <p className="font-bold text-foreground">{Number(order.remaining_installment).toLocaleString()} ر.س</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">التاريخ</p>
                          <p className="font-bold text-foreground text-xs">
                            {new Date(order.created_at).toLocaleDateString("ar-SA", {
                              year: "numeric", month: "short", day: "numeric",
                              hour: "2-digit", minute: "2-digit"
                            })}
                          </p>
                        </div>
                        {order.store_name && (
                          <div>
                            <p className="text-muted-foreground">المتجر</p>
                            <p className="font-bold text-foreground">{order.store_name}</p>
                          </div>
                        )}
                        {order.screenshot_url && (
                          <div className="col-span-2 md:col-span-4">
                            <p className="text-muted-foreground mb-2">صورة التقسيط</p>
                            <a href={order.screenshot_url} target="_blank" rel="noopener noreferrer" className="inline-block">
                              <img src={order.screenshot_url || "/placeholder.svg"} alt="صورة التقسيط" className="max-h-48 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow" />
                            </a>
                          </div>
                        )}
                        {order.notes && (
                          <div className="col-span-2 md:col-span-4">
                            <p className="text-muted-foreground">ملاحظات</p>
                            <p className="font-medium text-foreground whitespace-pre-wrap">{order.notes}</p>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                        <span className="text-sm text-muted-foreground ml-2 self-center">تغيير الحالة:</span>
                        {Object.entries(statusConfig).map(([key, config]) => (
                          <Button
                            key={key}
                            variant="outline"
                            size="sm"
                            disabled={order.status === key || updatingId === order.id}
                            onClick={() => updateStatus(order.id, key)}
                            className={`bg-transparent text-xs ${order.status === key ? "opacity-50" : ""}`}
                          >
                            {updatingId === order.id ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <config.icon className={`w-3 h-3 ml-1 ${config.color}`} />
                            )}
                            {config.label}
                          </Button>
                        ))}
                        <div className="flex-1" />
                        <Button variant="outline" size="sm" onClick={() => sendWhatsApp(order)} className="bg-transparent text-green-600 border-green-300">
                          <MessageCircle className="w-4 h-4 ml-1" />
                          واتساب
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteOrder(order.id)} className="bg-transparent text-red-600 border-red-300">
                          <Trash2 className="w-4 h-4 ml-1" />
                          حذف
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </main>
  )
}
