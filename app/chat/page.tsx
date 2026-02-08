"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, Bot, User, Loader2, MessageCircle, Calculator, FileText, ArrowLeft, Search, ExternalLink, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { ChatMessageContent } from "@/components/chat-message"

const quickQuestions = [
  { icon: Calculator, text: "ابي 2000 كاش، كم لازم اشتري؟" },
  { icon: Search, text: "كم سعر ايفون 16 في اكسترا؟" },
  { icon: FileText, text: "كيف أقدم طلب سيولة؟" },
  { icon: MessageCircle, text: "وش الفرق بين تابي وتمارا؟" },
]

const chatTransport = new DefaultChatTransport({ api: "/api/chat" })

export default function ChatPage() {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
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
            text: "اهلا فيك! انا مساعد **liilsol** الذكي.\n\nنحول لك مشترياتك بالتقسيط من **تابي وتمارا ومدفوع** الى كاش في حسابك البنكي خلال ساعتين.\n\nالطريقة بسيطة: تشتري جهاز بالتقسيط، ونشتريه منك ونحول لك المبلغ. الدفعة الاولى نقوم بدفعها واستردادها بعد البيع **بدون اي فوائد عليك**.\n\n**كم المبلغ اللي تحتاجه كاش (الصافي)؟**"
          }
        ],
        createdAt: new Date(),
      }
    ],
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              مساعد liilsol الذكي
            </div>
            <p className="text-muted-foreground text-sm">يحسب لك السيولة ويساعدك خطوة بخطوة</p>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-card rounded-2xl border border-border shadow-lg flex flex-col overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 min-h-[400px] max-h-[500px]">
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
                      if (part.type === "text") {
                        return (
                          <ChatMessageContent key={index} text={part.text} isUser={message.role === "user"} />
                        )
                      }
                      if (part.type === "tool-invocation") {
                        const toolName = part.toolName
                        
                        if (part.state !== "output-available") {
                          return (
                            <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                              <Loader2 className="w-3 h-3 animate-spin" />
                              {toolName === "searchExtra" ? "جاري البحث في اكسترا..." : "جاري الحساب..."}
                            </div>
                          )
                        }

                        // نتائج الحساب
                        if (toolName === "calculateCash") {
                          const r = part.output as {
                            purchaseAmount: number; saleAmount: number; adminFee: number
                            downPayment: number; netAmount: number; remainingInstallment: number
                            sellingLossPercent: number; note: string
                          }
                          return (
                            <div key={index} className="mt-3 bg-background/60 rounded-xl p-4 border border-border/50 space-y-2">
                              <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-2">
                                <Calculator className="w-3.5 h-3.5" />
                                تفاصيل الحساب
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex justify-between col-span-2 py-1 border-b border-border/30">
                                  <span className="text-muted-foreground">قيمة الشراء (الجهاز)</span>
                                  <span className="font-semibold">{r.purchaseAmount.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between col-span-2 py-1 border-b border-border/30">
                                  <span className="text-muted-foreground">مبلغ البيع (-{r.sellingLossPercent}%)</span>
                                  <span className="font-medium">{r.saleAmount.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between col-span-2 py-1 border-b border-border/30">
                                  <span className="text-muted-foreground">الرسوم الادارية</span>
                                  <span className="text-destructive font-medium">{r.adminFee.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between col-span-2 py-1 border-b border-border/30">
                                  <span className="text-muted-foreground">الدفعة الاولى (25%)</span>
                                  <span className="text-destructive font-medium">{r.downPayment.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between col-span-2 py-2 bg-accent/5 rounded-lg px-2 -mx-2">
                                  <span className="font-bold text-foreground">الصافي المستلم (كاش)</span>
                                  <span className="font-bold text-accent text-sm">{r.netAmount.toLocaleString()} ر.س</span>
                                </div>
                                <div className="flex justify-between col-span-2 py-1 text-muted-foreground">
                                  <span>المتبقي للتقسيط</span>
                                  <span>{r.remainingInstallment.toLocaleString()} ر.س</span>
                                </div>
                              </div>
                            </div>
                          )
                        }

                        // نتائج البحث في اكسترا
                        if (toolName === "searchExtra") {
                          const result = part.output as { products?: { name: string; price: string; url: string }[]; searchUrl?: string }
                          if (result?.products && result.products.length > 0) {
                            return (
                              <div key={index} className="mt-2 space-y-2">
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <Search className="w-3 h-3" />
                                  نتائج البحث في اكسترا
                                </div>
                                {result.products.map((product, pIdx) => (
                                  <a
                                    key={pIdx}
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between gap-2 bg-background/60 rounded-lg px-3 py-2 hover:bg-background transition-colors border border-border/50"
                                  >
                                    <div className="flex items-center gap-2 min-w-0">
                                      <ShoppingCart className="w-3.5 h-3.5 text-primary shrink-0" />
                                      <span className="text-xs text-foreground truncate">{product.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 shrink-0">
                                      <span className="text-xs font-bold text-accent">{Number(product.price).toLocaleString()} ر.س</span>
                                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                    </div>
                                  </a>
                                ))}
                                {result.searchUrl && (
                                  <a href={result.searchUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-xs text-primary hover:underline pt-1">
                                    عرض كل النتائج في اكسترا
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
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
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />

              {/* Quick Questions - show if only welcome message */}
              {messages.length <= 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
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
                  placeholder="اكتب مبلغ أو سؤالك..."
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
                اطلب سيولة
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
