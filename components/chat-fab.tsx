"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { CloudRain, Send, X, User, Loader2, Calculator, ShoppingCart, ExternalLink, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { ChatMessageContent } from "@/components/chat-message"
import Link from "next/link"

const widgetTransport = new DefaultChatTransport({ api: "/api/chat" })

const quickQuestions = [
  { text: "ابي 1000 كاش" },
  { text: "ابي 2000 كاش" },
  { text: "ابي 3000 كاش" },
  { text: "ابي 5000 كاش" },
]

export function ChatFab() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: widgetTransport,
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "هلا والله! أنا **مطر**، مساعدك في **ليل سول**\n\nنحول لك مشتريات التقسيط من **تابي وتمارا ومدفوع** لكاش بحسابك خلال ساعتين.\n\nتحدد المبلغ اللي تحتاجه ونحن نتكفل بالباقي - بدون فوائد.\n\n**كم تحتاج كاش؟**"
          }
        ],
        createdAt: new Date(),
      }
    ],
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (pathname === "/chat") return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  const handleQuickQuestion = (text: string) => {
    if (isLoading) return
    sendMessage({ text })
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 md:left-6 md:right-auto md:w-[400px] z-50 bg-card rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ maxHeight: "calc(100vh - 140px)" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <CloudRain className="w-5 h-5" />
              <div>
                <p className="font-bold text-sm">مطر</p>
                <p className="text-[10px] opacity-80">مساعدك الذكي - ليل سول</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 space-y-3" style={{ maxHeight: "400px", minHeight: "300px" }}>
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent/10 text-accent"
                }`}>
                  {message.role === "user" ? <User className="w-3.5 h-3.5" /> : <CloudRain className="w-3.5 h-3.5" />}
                </div>
                <div className={`max-w-[82%] rounded-2xl px-3 py-2.5 ${
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
                          <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            {part.toolName === "searchExtra" ? "جاري البحث..." : "جاري الحساب..."}
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
                          <div key={index} className="mt-2 bg-background/60 rounded-lg p-3 border border-border/50 space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-2">
                              <Calculator className="w-3 h-3" />
                              تفاصيل الحساب
                            </div>
                            <div className="space-y-1 text-[11px]">
                              <div className="flex justify-between py-1 border-b border-border/30">
                                <span className="text-muted-foreground">قيمة الشراء</span>
                                <span className="font-semibold">{r.purchaseAmount.toLocaleString()} ر.س</span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-border/30">
                                <span className="text-muted-foreground">مبلغ البيع</span>
                                <span className="font-medium">{r.saleAmount.toLocaleString()} ر.س</span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-border/30">
                                <span className="text-muted-foreground">الرسوم</span>
                                <span className="text-destructive font-medium">{r.adminFee.toLocaleString()} ر.س</span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-border/30">
                                <span className="text-muted-foreground">الدفعة الأولى (مستردة)</span>
                                <span className="font-medium">{r.downPayment.toLocaleString()} ر.س</span>
                              </div>
                              <div className="flex justify-between py-1.5 bg-accent/10 rounded-md px-2 mt-1">
                                <span className="font-bold">الصافي كاش</span>
                                <span className="font-bold text-accent">{r.netAmount.toLocaleString()} ر.س</span>
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
                                className="inline-flex items-center gap-1.5 bg-background/60 rounded-lg px-2.5 py-1.5 hover:bg-background transition-colors border border-border/50 text-[11px]">
                                <ShoppingCart className="w-3 h-3 text-primary" />
                                <span>ابحث في اكسترا</span>
                                <ExternalLink className="w-2.5 h-2.5 text-muted-foreground" />
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
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent">
                  <CloudRain className="w-3.5 h-3.5" />
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm px-3 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />

            {messages.length <= 1 && (
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {quickQuestions.map((q) => (
                  <button key={q.text} type="button" onClick={() => handleQuickQuestion(q.text)}
                    className="px-3 py-2 bg-secondary/50 hover:bg-secondary rounded-lg text-xs text-foreground transition-colors text-right">
                    {q.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div className="flex items-center justify-center gap-3 px-3 py-2 border-t border-border/50 bg-secondary/30">
            <Link href="/order" className="text-[10px] text-primary hover:underline">صفحة الطلب</Link>
            <span className="text-border">|</span>
            <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#25D366] hover:underline flex items-center gap-1">
              <MessageCircle className="w-2.5 h-2.5" /> واتساب
            </a>
            <span className="text-border">|</span>
            <Link href="/#calculator" className="text-[10px] text-primary hover:underline">حاسبة السيولة</Link>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب المبلغ أو سؤالك..."
                disabled={isLoading}
                className="flex-1 bg-secondary/50 border border-border rounded-xl px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                dir="rtl"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 transition-colors"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 group"
        aria-label="مطر - المساعد الذكي"
      >
        <span className="whitespace-nowrap bg-card text-foreground text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {isOpen ? "اغلق المحادثة" : "صامل؟ اسألني وازهل"}
        </span>
        <div className={`w-14 h-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center group-hover:scale-110 transition-all relative ${
          isOpen ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"
        }`}>
          {isOpen ? <X className="w-6 h-6" /> : <CloudRain className="w-6 h-6" />}
          {!isOpen && <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-card animate-pulse" />}
        </div>
      </button>
    </>
  )
}
