"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MessageCircle, Search, RefreshCw, Loader2, ArrowRight,
  Phone, Globe, Clock, User, Package, Bell, Volume2, VolumeX, Image as ImageIcon
} from "lucide-react"
import Link from "next/link"

type ConvMessage = { role: string; content: string; from_admin?: boolean; timestamp?: string }

type Conversation = {
  id: string
  phone: string
  customer_name: string
  messages: ConvMessage[]
  last_message: string
  source: string
  mode: "bot" | "manual" | null
  created_at: string
  updated_at: string
  status: string
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
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [newMessageCount, setNewMessageCount] = useState(0)
  const prevConversationsRef = useRef<Conversation[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const router = useRouter()

  // Initialize notification sound
  useEffect(() => {
    audioRef.current = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbsGczHjqCqNjVpXxMPE13ncu+kVo4NVuLsMy3gFA0MlqLrsi0fE4zMlyNscizfE8zMl2Prsmzf1AzM12QsMezf1IzNF+SsMazgVMzNWGUsqezglUyNmOVs6azg1YxN2SWtKWzg1cxOGWXtaSyg1gxOWWYtqSxglkxOmaZt6OxgloxOmiauaKwgVsxO2ibu6GvgFwxPGicvJ+uf10xPWqevZ2tf14wPmqfvpysfl8wP2ugwJqrfmAwQGyhwZipfWExQW2iwpeofGIxQm6jw5WneWMxQ2+kxJOmd2QxRHClxZKkdmUxRXGmxpCjdGYwRnKnx46icmcwR3OoyIyhcGgwSHSpyoufa2kwSXWqy4mdaWowSnaryoibZ2sxS3eryYaZZWwxTHityoSXY20xTXmvyoKVYW4xTnqwy4CTX28xT3uxzH6RXXAxUHyyzXyPW3ExUX2zzXqNWHIxUn60znmLVnMxU3+1z3eJVHQxVIC20HSHUnUxVYG30HKFUHYxVoK40XCDTncxV4O50W6BTXgyWIS70WuATHk="
    )
    audioRef.current.volume = 0.5
  }, [])

  const fetchConversations = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/conversations")
      if (res.status === 401) { router.push("/admin/login"); return }
      const data = await res.json()
      if (data.conversations) {
        // Detect new messages
        const prev = prevConversationsRef.current
        if (prev.length > 0) {
          let newMsgs = 0
          for (const conv of data.conversations) {
            const prevConv = prev.find((p: Conversation) => p.id === conv.id)
            if (!prevConv) {
              newMsgs++ // New conversation
            } else if (conv.messages?.length > (prevConv.messages?.length || 0)) {
              const lastMsg = conv.messages[conv.messages.length - 1]
              if (lastMsg?.role === "user") {
                newMsgs++ // New user message
              }
            }
          }
          if (newMsgs > 0) {
            setNewMessageCount(prev => prev + newMsgs)
            if (soundEnabled && audioRef.current) {
              audioRef.current.play().catch(() => {})
            }
            // Update page title
            document.title = `(${newMsgs}) رسائل جديدة - سجل المحادثات`
          }
        }
        prevConversationsRef.current = data.conversations
        setConversations(data.conversations)

        // Also update selected conversation if it's open
        if (selectedConv) {
          const updated = data.conversations.find((c: Conversation) => c.id === selectedConv.id)
          if (updated && JSON.stringify(updated.messages) !== JSON.stringify(selectedConv.messages)) {
            setSelectedConv(updated)
          }
        }
      }
    } catch { /* silent */ } finally { setLoading(false) }
  }, [router, soundEnabled, selectedConv])

  useEffect(() => { fetchConversations() }, [fetchConversations])

  // Typing status
  const [typingVisitors, setTypingVisitors] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll messages when selectedConv changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedConv?.messages])

  // Auto-refresh every 5 seconds
  useEffect(() => {
    const interval = setInterval(fetchConversations, 5000)
    return () => clearInterval(interval)
  }, [fetchConversations])

  // Check typing status every 3 seconds
  useEffect(() => {
    const checkTyping = async () => {
      try {
        const res = await fetch("/api/chat/typing")
        if (res.ok) {
          const data = await res.json()
          setTypingVisitors(data.typing || [])
        }
      } catch { /* silent */ }
    }
    const interval = setInterval(checkTyping, 3000)
    return () => clearInterval(interval)
  }, [])

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
    const newMode = (selectedConv.mode === "manual") ? "bot" : "manual"
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
    const matchSearch = (c.customer_name || "").includes(searchQuery) ||
      (c.phone || "").includes(searchQuery) ||
      (c.last_message || "").includes(searchQuery)
    const matchSource = filterSource === "all" || c.source === filterSource
    return matchSearch && matchSource
  })

  // Stats
  const totalMessages = conversations.reduce((sum, c) => sum + (c.messages?.length || 0), 0)
  const botMessages = conversations.reduce((sum, c) => sum + (c.messages?.filter(m => m.role === "assistant" && !m.from_admin).length || 0), 0)

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
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSoundEnabled(!soundEnabled)
                setNewMessageCount(0)
                document.title = "سجل المحادثات"
              }}
              className={`bg-transparent ${soundEnabled ? "text-primary border-primary/30" : "text-muted-foreground"}`}
              title={soundEnabled ? "ايقاف الصوت" : "تفعيل الصوت"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              {newMessageCount > 0 && (
                <span className="mr-1 bg-destructive text-destructive-foreground text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                  {newMessageCount}
                </span>
              )}
            </Button>
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-card rounded-xl p-3 border border-border text-center">
            <p className="text-xl font-bold text-foreground">{conversations.length}</p>
            <p className="text-xs text-muted-foreground">المحادثات</p>
          </div>
          <div className="bg-[#25D366]/10 rounded-xl p-3 border border-[#25D366]/30 text-center">
            <p className="text-xl font-bold text-[#25D366]">{conversations.filter(c => c.source === "whatsapp").length}</p>
            <p className="text-xs text-[#25D366]">واتساب</p>
          </div>
          <div className="bg-primary/10 rounded-xl p-3 border border-primary/30 text-center">
            <p className="text-xl font-bold text-primary">{conversations.filter(c => c.source === "website").length}</p>
            <p className="text-xs text-primary">الموقع</p>
          </div>
          <div className="bg-card rounded-xl p-3 border border-border text-center">
            <p className="text-xl font-bold text-foreground">{totalMessages}</p>
            <p className="text-xs text-muted-foreground">اجمالي الرسائل</p>
          </div>
          <div className="bg-accent/10 rounded-xl p-3 border border-accent/30 text-center">
            <p className="text-xl font-bold text-accent">{botMessages}</p>
            <p className="text-xs text-accent">ردود مطر ليل</p>
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
                  onClick={() => {
                    setSelectedConv(conv)
                    setNewMessageCount(0)
                    document.title = "سجل المحادثات"
                  }}
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
                        <p className="text-xs text-muted-foreground truncate">{conv.phone}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <span className="text-[10px] text-muted-foreground">{formatTime(conv.updated_at)}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-muted-foreground">{conv.messages?.length || 0} رسالة</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          conv.source === "whatsapp" ? "bg-[#25D366]/15 text-[#25D366]" : "bg-primary/15 text-primary"
                        }`}>{conv.source === "whatsapp" ? "واتساب" : "موقع"}</span>
                      </div>
                    </div>
                  </div>
                  {conv.source === "website" && typingVisitors.some(v => conv.phone?.includes(v)) ? (
                    <p className="text-xs text-primary mt-2 flex items-center gap-1 animate-pulse">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      العميل يكتب...
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-2 truncate">{conv.last_message}</p>
                  )}
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
                    <p className="text-xs text-muted-foreground">{selectedConv.phone}</p>
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
                      ) : (selectedConv.mode === "manual") ? (
                        <><User className="w-4 h-4 ml-1" />{'وضع يدوي'}</>
                      ) : (
                        <><MessageCircle className="w-4 h-4 ml-1" />{'مطر ليل شغال'}</>
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
                          {msg.from_admin ? "انت (يدوي)" : "مطر ليل (بوت)"}
                        </p>
                      )}
                      {/* Render images */}
                      {msg.content && /\[صورة مرفقة\]\((https?:\/\/[^)]+)\)/.test(msg.content) && (
                        <a href={msg.content.match(/\[صورة مرفقة\]\((https?:\/\/[^)]+)\)/)?.[1]} target="_blank" rel="noopener noreferrer" className="block mb-2">
                          <img src={msg.content.match(/\[صورة مرفقة\]\((https?:\/\/[^)]+)\)/)?.[1]} alt="صورة مرفقة" className="max-w-full rounded-lg border border-border/50 max-h-48 object-cover" loading="lazy" />
                        </a>
                      )}
                      {/* Render markdown links */}
                      <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                        __html: (msg.content || "")
                          .replace(/\[صورة مرفقة\]\(https?:\/\/[^)]+\)/g, "")
                          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                          .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline text-primary">$1</a>')
                          .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '<a href="$2" class="underline text-primary">$1</a>')
                          .trim()
                      }} />
                      {/* Message timestamp */}
                      {msg.timestamp && (
                        <p className={`text-[9px] mt-1 ${msg.role === "user" ? "text-primary-foreground/60" : "text-muted-foreground/60"}`}>
                          {new Date(msg.timestamp).toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
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
                        ? "الوضع اليدوي -- مطر ليل متوقف عن الرد على هذي المحادثة"
                        : "مطر ليل يرد تلقائيا -- لما ترسل رد يتحول لوضع يدوي"}
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
              {/* Typing indicator */}
              {selectedConv.source === "website" && typingVisitors.some(v => selectedConv.phone?.includes(v)) && (
                <div className="px-4 py-2 bg-primary/5 border-t border-primary/10">
                  <p className="text-xs text-primary flex items-center gap-2 animate-pulse">
                    <span className="flex gap-0.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                    العميل يكتب الحين...
                  </p>
                </div>
              )}

              {/* Website reply - can also reply to website chats */}
              {selectedConv.source === "website" && (
                <div className="p-3 border-t border-border bg-card">
                  <div className="flex gap-2">
                    <Input
                      value={replyText}
                      onChange={e => setReplyText(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendReply() } }}
                      placeholder="اكتب ردك هنا للعميل..."
                      className="flex-1"
                      disabled={sending}
                    />
                    <Button onClick={handleSendReply} disabled={!replyText.trim() || sending} size="sm">
                      {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : "ارسل"}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[10px] text-muted-foreground">
                      محادثة موقع - ردك بيظهر للعميل لما يفتح الشات
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
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
