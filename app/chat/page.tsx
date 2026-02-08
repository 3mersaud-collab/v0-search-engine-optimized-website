"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, Bot, User, Loader2, MessageCircle, Calculator, FileText, ArrowLeft, Sparkles, Search, ExternalLink, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { ChatMessageContent } from "@/components/chat-message"

const quickQuestions = [
  { icon: Calculator, text: "كم أستلم كاش لو اشتريت بـ 5000؟" },
  { icon: Search, text: "ابحث لي عن سعر ايفون 16 في اكسترا" },
  { icon: FileText, text: "كيف أقدم طلب سيولة؟" },
  { icon: Sparkles, text: "وش الفرق بين تابي وتمارا؟" },
]

export default function ChatPage() {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">كيف أقدر أساعدك؟</h1>
            <p className="text-muted-foreground text-sm">اسألني عن السيولة والحسابات وطريقة التقديم</p>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-card rounded-2xl border border-border shadow-lg flex flex-col overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 min-h-[400px] max-h-[500px]">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-center text-sm">
                    أهلا فيك! أنا مساعد liilsol الذكي. اسألني أي سؤال عن خدمة السيولة.
                  </p>
                  {/* Quick Questions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
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
              ) : (
                <>
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent/10 text-accent"
                      }`}>
                        {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
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
                          if (part.type === "tool-invocation" && part.state === "output-available") {
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
                          if (part.type === "tool-invocation" && part.state !== "output-available") {
                            return (
                              <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                <Loader2 className="w-3 h-3 animate-spin" />
                                جاري البحث في اكسترا...
                              </div>
                            )
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
                </>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="اكتب سؤالك هنا..."
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
