"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, Bot, User, Loader2, MessageCircle, Calculator, FileText, Search, ExternalLink, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { ChatMessageContent } from "@/components/chat-message"

const quickQuestions = [
  { icon: Calculator, text: "ابي 1000 كاش" },
  { icon: Calculator, text: "ابي 2000 كاش" },
  { icon: Calculator, text: "ابي 3000 كاش" },
  { icon: Calculator, text: "ابي 5000 كاش" },
]

const chatTransport = new DefaultChatTransport({ api: "/api/chat" })

export default function ChatPage() {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: chatTransport,
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "هلا والله! حياك في **ليل سول**\n\nنحول لك مشتريات التقسيط من **تابي وتمارا ومدفوع** لكاش بحسابك خلال ساعتين.\n\nالطريقة سهلة:\n- تحدد المبلغ اللي تحتاجه كاش\n- نحدد لك جهاز تشتريه بالتقسيط من متجر مثل اكسترا\n- نستلم الجهاز منك ونبيعه\n- نخصم الرسوم والدفعة الأولى من قيمة البيع ونحول لك الباقي\n- الدفعة الأولى **ندفعها عنك** ونستردها من البيع - **ما تدفع شي من جيبك وبدون فوائد**\n\nخدمة مرخصة بسجل تجاري وعمليات تتعدى 100 ألف بكل شفافية. راح أمشي معك خطوة بخطوة ان شاء الله.\n\n**كم تحتاج كاش (الصافي)؟**"
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
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 flex flex-col pt-24 pb-4">
        <div className="container mx-auto px-4 flex-1 flex flex-col max-w-3xl">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              <Bot className="w-4 h-4" />
              سولي - مساعدك الذكي
            </div>
            <p className="text-muted-foreground text-sm">يحسب لك السيولة ويمشي معك خطوة بخطوة</p>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-card rounded-2xl border border-border shadow-lg flex flex-col overflow-hidden">
            {/* Messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 min-h-[420px] max-h-[520px]">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent/10 text-accent"
                  }`}>
                    {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-secondary text-foreground rounded-tl-sm"
                  }`}>
                    {message.parts.map((part, index) => {
                      if (part.type === "text" && part.text.trim()) {
                        return (
                          <ChatMessageContent key={index} text={part.text} isUser={message.role === "user"} />
                        )
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
                                  <span className="text-muted-foreground">الد��عة الاولى (نحن ندفعها)</span>
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
                                <a
                                  href={result.searchUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2 hover:bg-background transition-colors border border-border/50 text-xs"
                                >
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
                    <Bot className="w-4 h-4" />
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

              {messages.length <= 1 && (
                <div className="grid grid-cols-2 gap-2 pt-2">
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
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="اكتب المبلغ أو رد على المساعد..."
                  disabled={isLoading}
                  className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                  dir="rtl"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="rounded-xl h-11 w-11 shrink-0">
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-4">
            <Button variant="outline" size="sm" asChild className="gap-2 bg-transparent">
              <Link href="/order">
                <FileText className="w-4 h-4" />
                صفحة الطلب
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="gap-2 bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:text-[#25D366]">
              <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
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
