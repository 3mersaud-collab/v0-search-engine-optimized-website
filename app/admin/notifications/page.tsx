"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Bell, BellOff, CheckCheck, Loader2, ArrowRight, Package,
  MessageCircle, Phone, Clock, AlertCircle
} from "lucide-react"
import Link from "next/link"

type Notification = {
  id: string
  title: string
  body: string
  type: string
  phone_number: string | null
  is_read: boolean
  created_at: string
}

const typeConfig: Record<string, { icon: typeof Bell; color: string; bg: string }> = {
  new_order: { icon: Package, color: "text-primary", bg: "bg-primary/10" },
  new_message: { icon: MessageCircle, color: "text-[#25D366]", bg: "bg-[#25D366]/10" },
  alert: { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchNotifications = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/notifications")
      if (res.status === 401) { router.push("/admin/login"); return }
      const data = await res.json()
      if (data.notifications) setNotifications(data.notifications)
    } catch { /* silent */ } finally { setLoading(false) }
  }, [router])

  useEffect(() => { fetchNotifications() }, [fetchNotifications])

  const markAllRead = async () => {
    await fetch("/api/admin/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: "all" }),
    })
    setNotifications(prev => prev.map(n => ({ ...n, is_read: true })))
  }

  const markRead = async (id: string) => {
    await fetch("/api/admin/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, is_read: true } : n))
  }

  const unreadCount = notifications.filter(n => !n.is_read).length

  const formatTime = (date: string) => {
    const d = new Date(date)
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    if (diffMins < 1) return "الحين"
    if (diffMins < 60) return `منذ ${diffMins} دقيقة`
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `منذ ${diffHours} ساعة`
    return d.toLocaleDateString("ar-SA", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
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
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin"><ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <h1 className="text-xl font-bold text-foreground">الإشعارات</h1>
            {unreadCount > 0 && (
              <span className="bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">{unreadCount}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <Button variant="outline" size="sm" onClick={markAllRead} className="bg-transparent">
                <CheckCheck className="w-4 h-4 ml-1" />قراءة الكل
              </Button>
            )}
            <Button variant="outline" size="sm" asChild className="bg-transparent">
              <Link href="/admin"><Package className="w-4 h-4 ml-1" />الطلبات</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {notifications.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-border">
            <BellOff className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">لا توجد إشعارات</h3>
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map(notif => {
              const config = typeConfig[notif.type] || typeConfig.alert
              const Icon = config.icon
              return (
                <button key={notif.id} type="button"
                  onClick={() => !notif.is_read && markRead(notif.id)}
                  className={`w-full text-right p-4 rounded-xl border transition-all ${
                    notif.is_read ? "bg-card border-border opacity-60" : "bg-card border-primary/30 shadow-sm"
                  }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${config.bg}`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-bold text-foreground text-sm">{notif.title}</p>
                        {!notif.is_read && <span className="w-2 h-2 bg-primary rounded-full shrink-0" />}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notif.body}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{formatTime(notif.created_at)}</span>
                        {notif.phone_number && (
                          <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{notif.phone_number}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
