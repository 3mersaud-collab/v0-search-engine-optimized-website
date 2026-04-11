"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, CloudRain, User, Loader2, MessageCircle, Calculator, FileText, ExternalLink, ShoppingCart, ImagePlus, X, Phone, RotateCcw } from "lucide-react"
import Link from "next/link"
import { ChatMessageContent } from "@/components/chat-message"

function getVisitorId() {
  if (typeof window === "undefined") return "ssr"
  let id = localStorage.getItem("liilsol-visitor-id")
  if (!id) {
    id = `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
    localStorage.setItem("liilsol-visitor-id", id)
  }
  return id
}

const quickQuestions = [
  { icon: Calculator, text: "ابي 1000 كاش" },
  { icon: Calculator, text: "ابي 2000 كاش" },
  { icon: Calculator, text: "ابي 3000 كاش" },
  { icon: Calculator, text: "ابي 5000 كاش" },
]

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [uploading, setUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [pendingImageUrl, setPendingImageUrl] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Phone linking
  const [showPhonePrompt, setShowPhonePrompt] = useState(false)
  const [phoneInput, setPhoneInput] = useState("")
  const [phoneLinked, setPhoneLinked] = useState(false)

  // History
  const [hasHistory, setHasHistory] = useState(false)
  const [loadingHistory, setLoadingHistory] = useState(false)

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      headers: () => ({ "x-visitor-id": getVisitorId() }),
    }),
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "هلا والله! معك **مطر** سحابة غيث ماحسبت حسابها\n\nنحول لك مشتريات التقسيط من **تابي وتمارا ومدفوع** لكاش بحسابك خلال ساعة.\n\nالطريقة سهلة:\n- تحدد المبلغ اللي تحتاجه كاش\n- نحدد لك جهاز تشتريه بالتقسيط من متجر مثل اكسترا\n- نستلم الجهاز منك أو نبيعه\n- نخصم الرسوم والدفعة الاولى من قيمة البيع ونحول لك الباقي\n- الدفعة الاولى **ندفعها عنك** ونستردها من البيع - **ما تدفع شي من جيبك وبدون فوائد**\n\nخدمة موثوقة وعمليات تتعدى 100 الف بكل شفافية. راح امشي معك خطوة بخطوة ان شاء الله.\n\n**كم تحتاج كاش (الصافي)؟**"
          }
        ],
        createdAt: new Date(),
      }
    ],
    onError: (error) => {
      const msg = error?.message || ""
      if (msg.includes("402") || msg.includes("funds")) {
        setErrorMessage("الخدمة متوقفة مؤقتا، تواصل معنا على الواتساب")
      } else if (msg.includes("429") || msg.includes("rate")) {
        setErrorMessage("كثرت الرسائل، انتظر شوي وحاول مرة ثانية")
      } else {
        setErrorMessage("حصل خطأ، حاول مرة ثانية")
      }
      setTimeout(() => setErrorMessage(null), 5000)
    },
  })

  const isLoading = status === "streaming" || status === "submitted"

  // Check history + phone linked on mount
  useEffect(() => {
    const checkHistory = async () => {
      try {
        const visitorId = getVisitorId()
        const res = await fetch(`/api/chat/history?visitorId=${visitorId}`)
        if (res.ok) {
          const data = await res.json()
          if (data.messages && data.messages.length > 0) setHasHistory(true)
        }
      } catch { /* silent */ }
    }
    checkHistory()
    const linked = localStorage.getItem("liilsol-phone-linked")
    if (linked) setPhoneLinked(true)
  }, [])

  // Load previous chat
  const loadPreviousChat = useCallback(async () => {
    setLoadingHistory(true)
    try {
      const visitorId = getVisitorId()
      const res = await fetch(`/api/chat/history?visitorId=${visitorId}`)
      if (res.ok) {
        const data = await res.json()
        if (data.messages && data.messages.length > 0) {
          const historyMessages = data.messages.map((m: { role: string; content: string; timestamp?: string }, i: number) => ({
            id: `history-${i}`,
            role: m.role as "user" | "assistant",
            parts: [{ type: "text" as const, text: m.content }],
            createdAt: m.timestamp ? new Date(m.timestamp) : new Date(),
          }))
          historyMessages.push({
            id: "history-separator",
            role: "assistant" as const,
            parts: [{ type: "text" as const, text: "--- المحادثة السابقة ---\n\nهلا! شفت محادثتنا السابقة. كيف اقدر اساعدك الحين؟" }],
            createdAt: new Date(),
          })
          setMessages(historyMessages)
          setHasHistory(false)
        }
      }
    } catch {
      setErrorMessage("ما قدرت اجلب المحادثة السابقة")
      setTimeout(() => setErrorMessage(null), 3000)
    } finally {
      setLoadingHistory(false)
    }
  }, [setMessages])

  // Auto-scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  // Typing status
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const sendTypingStatus = useCallback((isTyping: boolean) => {
    const visitorId = getVisitorId()
    fetch("/api/chat/typing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visitorId, isTyping }),
    }).catch(() => {})
  }, [])

  const handleInputChange = (value: string) => {
    setInput(value)
    sendTypingStatus(true)
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    typingTimeoutRef.current = setTimeout(() => sendTypingStatus(false), 3000)
  }

  // Phone prompt after 3 messages
  useEffect(() => {
    if (phoneLinked) return
    const userMsgCount = messages.filter(m => m.role === "user").length
    if (userMsgCount >= 3 && !showPhonePrompt) {
      const linked = localStorage.getItem("liilsol-phone-linked")
      if (!linked) setShowPhonePrompt(true)
    }
  }, [messages, phoneLinked, showPhonePrompt])

  const handlePhoneSubmit = async () => {
    const phone = phoneInput.trim()
    if (!phone) return
    if (!/^05\d{8}$/.test(phone)) {
      setErrorMessage("ادخل رقم جوال سعودي صحيح يبدأ بـ 05")
      setTimeout(() => setErrorMessage(null), 3000)
      return
    }
    try {
      const res = await fetch("/api/chat/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId: getVisitorId(), phone, name: "" }),
      })
      const data = await res.json()
      if (data.success) {
        setPhoneLinked(true)
        setShowPhonePrompt(false)
        localStorage.setItem("liilsol-phone-linked", phone)
      }
    } catch { /* silent */ }
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) { setErrorMessage("يرجى اختيار صورة فقط"); setTimeout(() => setErrorMessage(null), 3000); return }
    if (file.size > 10 * 1024 * 1024) { setErrorMessage("حجم الصورة كبير (الحد 10MB)"); setTimeout(() => setErrorMessage(null), 3000); return }

    const reader = new FileReader()
    reader.onload = (ev) => setImagePreview(ev.target?.result as string)
    reader.readAsDataURL(file)

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch("/api/chat/upload", { method: "POST", body: formData })
      const data = await res.json()
      if (data.url) {
        setPendingImageUrl(data.url)
      } else {
        setErrorMessage(data.error || "فشل رفع الصورة")
        setTimeout(() => setErrorMessage(null), 3000)
        setImagePreview(null)
      }
    } catch {
      setErrorMessage("فشل رفع الصورة")
      setTimeout(() => setErrorMessage(null), 3000)
      setImagePreview(null)
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  const cancelImage = () => { setImagePreview(null); setPendingImageUrl(null) }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return
    sendTypingStatus(false)
    setErrorMessage(null)

    if (pendingImageUrl) {
      const text = input.trim() ? `${input.trim()}\n[صورة مرفقة](${pendingImageUrl})` : `[صورة مرفقة](${pendingImageUrl})`
      sendMessage({ text })
      setInput("")
      setImagePreview(null)
      setPendingImageUrl(null)
      return
    }

    if (!input.trim()) return
    sendMessage({ text: input })
    setInput("")
  }

  const handleQuickQuestion = (text: string) => {
    if (isLoading) return
    setErrorMessage(null)
    sendMessage({ text })
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 flex flex-col pt-24 pb-4">
        <div className="container mx-auto px-4 flex-1 flex flex-col max-w-3xl">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              <CloudRain className="w-4 h-4" />
              مطر
              {isLoading && <Loader2 className="w-3 h-3 animate-spin" />}
            </div>
            <p className="text-muted-foreground text-sm">سحابة غيث ماحسبت حسابها</p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 px-4 py-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm text-center">
              {errorMessage}
              {errorMessage.includes("واتساب") && (
                <a href="https://wa.me/966567130112" target="_blank" rel="noopener noreferrer" className="underline font-medium mr-1">
                  اضغط هنا
                </a>
              )}
            </div>
          )}

          {/* Chat Area */}
          <div className="flex-1 bg-card rounded-2xl border border-border shadow-lg flex flex-col overflow-hidden">
            {/* Messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 min-h-[420px] max-h-[520px]">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent/10 text-accent"
                  }`}>
                    {message.role === "user" ? <User className="w-4 h-4" /> : <CloudRain className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-secondary text-foreground rounded-tl-sm"
                  }`}>
                    {message.parts.map((part, index) => {
                      if (part.type === "text" && part.text.trim()) {
                        return <ChatMessageContent key={index} text={part.text} isUser={message.role === "user"} />
                      }
                      if (part.type === "tool-invocation") {
                        if (part.state !== "output-available") {
                          return (
                            <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                              <Loader2 className="w-3 h-3 animate-spin" />
                              {part.toolName === "searchExtra" ? "جاري البحث في اكسترا..." : "جاري الحساب..."}
                            </div>
                          )
                        }

                        if (part.toolName === "calculateCash") {
                          const r = part.output as {
                            purchaseAmount: number; saleAmount: number; adminFee: number
                            downPayment: number; netAmount: number; remainingInstallment: number
                          }
                          if (!r || !r.purchaseAmount) return null
                          return (
                            <div key={index} className="mt-3 bg-background/60 rounded-xl p-4 border border-border/50 space-y-1">
                              <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-3">
                                <Calculator className="w-3.5 h-3.5" />
                                تفاصيل الحساب
                              </div>
                              <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between py-1.5 border-b border-border/30">
                                  <span className="text-muted-foreground">قيمة الشراء (الجهاز)</span>
                                  <span className="font-semibold text-foreground">{r.purchaseAmount.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-border/30">
                                  <span className="text-muted-foreground">مبلغ البيع</span>
                                  <span className="font-medium text-foreground">{r.saleAmount.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-border/30">
                                  <span className="text-muted-foreground">الرسوم الادارية</span>
                                  <span className="text-destructive font-medium">{r.adminFee.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between py-1.5 border-b border-border/30">
                                  <span className="text-muted-foreground">الدفعة الاولى (نحن ندفعها)</span>
                                  <span className="text-foreground font-medium">{r.downPayment.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between py-2 bg-accent/10 rounded-lg px-3 mt-2">
                                  <span className="font-bold text-foreground">الصافي المستلم كاش</span>
                                  <span className="font-bold text-accent text-sm">{r.netAmount.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between py-1.5 text-muted-foreground">
                                  <span>المتبقي عليك بالتقسيط</span>
                                  <span>{r.remainingInstallment.toLocaleString()} ر.س</span>
                                </div>
                              </div>
                            </div>
                          )
                        }

                        if (part.toolName === "searchExtra") {
                          const result = part.output as { searchUrl?: string }
                          if (result?.searchUrl) {
                            return (
                              <div key={index} className="mt-2">
                                <a href={result.searchUrl} target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2 hover:bg-background transition-colors border border-border/50 text-xs">
                                  <ShoppingCart className="w-3.5 h-3.5 text-primary" />
                                  <span className="text-foreground">ابحث في اكسترا</span>
                                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                </a>
                              </div>
                            )
                          }
                        }
                      }
                      return null
                    })}
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent">
                    <CloudRain className="w-4 h-4" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />

              {/* Quick actions at start */}
              {messages.length <= 1 && (
                <div className="space-y-3 pt-2">
                  {hasHistory && (
                    <button
                      type="button"
                      onClick={loadPreviousChat}
                      disabled={loadingHistory}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 rounded-xl text-sm text-primary transition-colors font-medium border border-primary/20"
                    >
                      {loadingHistory ? <Loader2 className="w-4 h-4 animate-spin" /> : <RotateCcw className="w-4 h-4" />}
                      استكمال المحادثة السابقة
                    </button>
                  )}
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((q) => (
                      <button
                        key={q.text}
                        type="button"
                        onClick={() => handleQuickQuestion(q.text)}
                        className="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary rounded-xl text-sm text-foreground transition-colors text-right"
                      >
                        <q.icon className="w-4 h-4 text-primary shrink-0" />
                        <span>{q.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>



            {/* Image Preview */}
            {imagePreview && (
              <div className="px-4 py-2 border-t border-border/50 bg-secondary/30">
                <div className="relative inline-block">
                  <img src={imagePreview} alt="معاينة الصورة" className="h-20 w-auto rounded-lg border border-border" />
                  {uploading && (
                    <div className="absolute inset-0 bg-background/60 rounded-lg flex items-center justify-center">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    </div>
                  )}
                  <button type="button" onClick={cancelImage}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading || uploading}
                  className="w-11 h-11 bg-secondary/50 border border-border rounded-xl flex items-center justify-center hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed shrink-0 transition-colors text-muted-foreground hover:text-foreground"
                  title="ارفق صورة"
                >
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
                </button>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={pendingImageUrl ? "اكتب تعليق على الصورة (اختياري)..." : "اكتب المبلغ او رد على المساعد..."}
                  disabled={isLoading}
                  className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                  dir="rtl"
                />
                <Button type="submit" size="icon" disabled={isLoading || (!input.trim() && !pendingImageUrl)} className="rounded-xl h-11 w-11 shrink-0">
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4">
            <Button variant="outline" size="sm" asChild className="gap-2 bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:text-[#25D366]">
              <a href="https://wa.me/966567130112" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                تواصل واتساب
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
              <Link href="/#calculator">
                <Calculator className="w-4 h-4" />
                حاسبة السيولة
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
