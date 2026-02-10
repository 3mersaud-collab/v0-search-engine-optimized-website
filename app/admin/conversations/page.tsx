"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MessageCircle, Search, RefreshCw, Loader2, ArrowRight,
  Phone, Globe, Clock, User, ChevronDown, LogOut, Package, Bell
} from "lucide-react"
import Link from "next/link"

type Conversation = {
  id: string
  phone: string
  phone_number: string
  customer_name: string
  messages: { role: string; content: string; from_admin?: boolean }[]
  last_message: string
  source: string
  mode: "bot" | "manual"
  created_at: string
  updated_at: string
}

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null)
  const [filterSource, setFilterSource] = useState("all")
  const [replyText, setReplyText] = useState("")
  const [sending, setSending] = useState(false)
  const [toggling, setToggling] = useState(false)
  const router = useRouter()

  const fetchConversations = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/conversations")
      if (res.status === 401) { router.push("/admin/login"); return }
      const data = await res.json()
      if (data.conversations) setConversations(data.conversations)
    } catch { /* silent */ } finally { setLoading(false) }
  }, [router])

  useEffect(() => { fetchConversations() }, [fetchConversations])

  // Auto-refresh every 10 seconds
  useEffect(() => {
    const interval = setInterval(fetchConversations, 10000)
    return () => clearInterval(interval)
  }, [fetchConversations])

  const handleSendReply = async () => {
    if (!replyText.trim() || !selectedConv || sending) return
    setSending(true)
    try {
      const res = await fetch("/api/admin/conversations/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId: selectedConv.id, message: replyText }),
      })
      const data = await res.json()
      if (data.success) {
        setSelectedConv({
          ...selectedConv,
          mode: "manual",
          messages: [
            ...(selectedConv.messages || []),
            { role: "assistant", content: replyText, from_admin: true }
          ],
          last_message: replyText,
        })
        setReplyText("")
        fetchConversations()
      }
    } catch { /* silent */ } finally { setSending(false) }
  }

  const handleToggleMode = async () => {
    if (!selectedConv || toggling) return
    setToggling(true)
    const newMode = selectedConv.mode === "manual" ? "bot" : "manual"
    try {
      const res = await fetch("/api/admin/conversations/reply", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId: selectedConv.id, mode: newMode }),
      })
      const data = await res.json()
      if (data.success) {
        setSelectedConv({ ...selectedConv, mode: newMode })
        fetchConversations()
      }
    } catch { /* silent */ } finally { setToggling(false) }
  }

  const filtered = conversations.filter(c => {
    const matchSearch = c.customer_name.includes(searchQuery) ||
      c.phone_number.includes(searchQuery) ||
      c.last_message.includes(searchQuery)
    const matchSource = filterSource === "all" || c.source === filterSource
    return matchSearch && matchSource
  })

  const formatTime = (date: string) => {
    const d = new Date(date)
    const now = new Date()
    const diffMs = now.getTime() - d.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    if (diffMins < 1) return "الحين"
    if (diffMins < 60) return `${diffMins} د`
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours} س`
    return d.toLocaleDateString("ar-SA", { month: "short", day: "numeric" })
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
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin"><ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <h1 className="text-xl font-bold text-foreground">سجل المحادثات</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild className="bg-transparent">
              <Link href="/admin"><Package className="w-4 h-4 ml-1" />الطلبات</Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="bg-transparent">
              <Link href="/admin/notifications"><Bell className="w-4 h-4 ml-1" />الإشعارات</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-card rounded-xl p-4 border border-border text-center">
            <p className="text-2xl font-bold text-foreground">{conversations.length}</p>
            <p className="text-sm text-muted-foreground">إجمالي المحادثات</p>
          </div>
          <div className="bg-[#25D366]/10 rounded-xl p-4 border border-[#25D366]/30 text-center">
            <p className="text-2xl font-bold text-[#25D366]">{conversations.filter(c => c.source === "whatsapp").length}</p>
            <p className="text-sm text-[#25D366]">واتساب</p>
          </div>
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/30 text-center">
            <p className="text-2xl font-bold text-primary">{conversations.filter(c => c.source === "website").length}</p>
            <p className="text-sm text-primary">الموقع</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم أو الرقم..." className="pr-11" />
          </div>
          <div className="flex gap-2">
            <select value={filterSource} onChange={e => setFilterSource(e.target.value)}
              className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground">
              <option value="all">الكل</option>
              <option value="whatsapp">واتساب</option>
              <option value="website">الموقع</option>
            </select>
            <Button variant="outline" size="sm" onClick={fetchConversations} className="bg-transparent">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Conversation List */}
          <div className={`${selectedConv ? "hidden md:block md:w-1/3" : "w-full"} space-y-2`}>
            {filtered.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-2xl border border-border">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">لا توجد محادثات</h3>
              </div>
            ) : (
              filtered.map(conv => (
                <button key={conv.id} type="button"
                  onClick={() => setSelectedConv(conv)}
                  className={`w-full text-right p-4 rounded-xl border transition-all ${
                    selectedConv?.id === conv.id
                      ? "bg-primary/10 border-primary/30"
                      : "bg-card border-border hover:border-primary/30"
                  }`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        conv.source === "whatsapp" ? "bg-[#25D366]/15 text-[#25D366]" : "bg-primary/15 text-primary"
                      }`}>
                        {conv.source === "whatsapp" ? <Phone className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-foreground text-sm truncate">{conv.customer_name}</p>
                        <p className="text-xs text-muted-foreground truncate">{conv.phone_number}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[10px] text-muted-foreground">{formatTime(conv.updated_at)}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full mt-1 ${
                        conv.source === "whatsapp" ? "bg-[#25D366]/15 text-[#25D366]" : "bg-primary/15 text-primary"
                      }`}>{conv.source === "whatsapp" ? "واتساب" : "موقع"}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 truncate">{conv.last_message}</p>
                </button>
              ))
            )}
          </div>

          {/* Chat View */}
          {selectedConv && (
            <div className="flex-1 bg-card rounded-xl border border-border overflow-hidden flex flex-col" style={{ maxHeight: "calc(100vh - 250px)" }}>
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setSelectedConv(null)}>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedConv.source === "whatsapp" ? "bg-[#25D366]/15 text-[#25D366]" : "bg-primary/15 text-primary"
                  }`}>
                    {selectedConv.source === "whatsapp" ? <Phone className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{selectedConv.customer_name}</p>
                    <p className="text-xs text-muted-foreground">{selectedConv.phone_number}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {selectedConv.source === "whatsapp" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleToggleMode}
                      disabled={toggling}
                      className={`bg-transparent ${
                        selectedConv.mode === "manual"
                          ? "text-amber-600 border-amber-300"
                          : "text-[#25D366] border-[#25D366]/30"
                      }`}
                    >
                      {toggling ? (
                        <Loader2 className="w-4 h-4 animate-spin ml-1" />
                      ) : selectedConv.mode === "manual" ? (
                        <><User className="w-4 h-4 ml-1" />وضع يدوي</>
                      ) : (
                        <><MessageCircle className="w-4 h-4 ml-1" />مطر شغال</>
                      )}
                    </Button>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/20">
                {selectedConv.messages?.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : msg.from_admin
                          ? "bg-amber-50 border border-amber-200 rounded-bl-sm dark:bg-amber-950/30 dark:border-amber-800"
                          : "bg-card border border-border rounded-bl-sm"
                    }`}>
                      {msg.role === "assistant" && (
                        <p className={`text-[10px] font-bold mb-1 ${msg.from_admin ? "text-amber-600" : "text-[#25D366]"}`}>
                          {msg.from_admin ? "أنت (يدوي)" : "مطر (بوت)"}
                        </p>
                      )}
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Input */}
              {selectedConv.source === "whatsapp" && (
                <div className="p-3 border-t border-border bg-card">
                  <div className="flex gap-2">
                    <Input
                      value={replyText}
                      onChange={e => setReplyText(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendReply() } }}
                      placeholder="اكتب ردك هنا... (يتحول تلقائياً لوضع يدوي)"
                      className="flex-1"
                      disabled={sending}
                    />
                    <Button onClick={handleSendReply} disabled={!replyText.trim() || sending} size="sm">
                      {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : "ارسل"}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[10px] text-muted-foreground">
                      {selectedConv.mode === "manual"
                        ? "الوضع اليدوي -- مطر متوقف عن الرد على هذي المحادثة"
                        : "مطر يرد تلقائياً -- لما ترسل رد يتحول لوضع يدوي"}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      <Clock className="w-3 h-3 inline ml-1" />
                      {new Date(selectedConv.updated_at).toLocaleDateString("ar-SA", {
                        month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
                      })}
                    </p>
                  </div>
                </div>
              )}
              {selectedConv.source !== "whatsapp" && (
                <div className="p-3 border-t border-border bg-secondary/30 text-center">
                  <p className="text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 inline ml-1" />
                    آخر تحديث: {new Date(selectedConv.updated_at).toLocaleDateString("ar-SA", {
                      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
                    })}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
