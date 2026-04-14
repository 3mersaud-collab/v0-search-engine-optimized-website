"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { CloudRain, Send, X, User, Loader2, MessageCircle, RotateCcw } from "lucide-react"
import { usePathname } from "next/navigation"
import { ChatMessageContent } from "@/components/chat-message"
import Link from "next/link"

function getVisitorId() {
  if (typeof window === "undefined") return "ssr"
  let id = localStorage.getItem("liilsol-visitor-id")
  if (!id) {
    id = `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
    localStorage.setItem("liilsol-visitor-id", id)
  }
  return id
}

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
}

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "هلا والله! معك **مطر** 🌧️\nنحول لك مشتريات التقسيط من **تابي وتمارا ومدفوع** لكاش في حسابك خلال أقل من ساعة.\n\n**كم تحتاج كاش (الصافي)؟**",
}

const quickQuestions = [
  "ابي 1000 كاش",
  "ابي 2000 كاش",
  "ابي 3000 كاش",
  "ابي 5000 كاش",
]

export function ChatFab() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  // Focus on open
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  // Don't show on admin pages
  if (pathname?.startsWith("/admin")) return null

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: "user", content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)
    setErrorMessage(null)

    try {
      const payload = newMessages.map((m) => ({ role: m.role, content: m.content }))
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-visitor-id": getVisitorId(),
        },
        body: JSON.stringify({ messages: payload }),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const data = await res.json() as { messages?: Array<{ role: string; content: string }>; error?: string }

      if (data.error) {
        setErrorMessage(data.error)
        setTimeout(() => setErrorMessage(null), 5000)
        return
      }

      const reply = data.messages?.[0]?.content || "هلا! كيف أقدر أساعدك؟"
      const assistantMsg: ChatMessage = { id: `a-${Date.now()}`, role: "assistant", content: reply }
      setMessages((prev) => [...prev, assistantMsg])
    } catch {
      setErrorMessage("حصل خطأ، حاول مرة ثانية")
      setTimeout(() => setErrorMessage(null), 5000)
    } finally {
      setIsLoading(false)
    }
  }, [messages, isLoading])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-4 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105 md:left-6"
        aria-label="مطر - خدمة السيولة"
      >
        {isOpen ? <X className="w-6 h-6" /> : <CloudRain className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping absolute" />
            <span className="w-2 h-2 bg-accent rounded-full" />
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 md:left-6 md:right-auto md:w-[390px] z-50 bg-card rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ maxHeight: "calc(100vh - 130px)" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <CloudRain className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-sm">مطر</p>
                <p className="text-[10px] opacity-80">سحابة غيث ماحسبت حسابها</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { setMessages([WELCOME]); setErrorMessage(null) }}
                className="p-1.5 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                title="محادثة جديدة"
              >
                <RotateCcw className="w-3.5 h-3.5 opacity-70" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="px-3 py-2 bg-destructive/10 border-b border-destructive/20 text-destructive text-xs text-center shrink-0">
              {errorMessage}
            </div>
          )}

          {/* Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent/10 text-accent"
                }`}>
                  {message.role === "user" ? <User className="w-3.5 h-3.5" /> : <CloudRain className="w-3.5 h-3.5" />}
                </div>
                <div className={`max-w-[82%] rounded-2xl px-3 py-2.5 text-sm ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-secondary text-foreground rounded-tl-sm"
                }`}>
                  <ChatMessageContent text={message.content} isUser={message.role === "user"} />
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-accent/10 text-accent">
                  <CloudRain className="w-3.5 h-3.5" />
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm px-3 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {quickQuestions.map((q) => (
                  <button key={q} type="button" onClick={() => sendMessage(q)}
                    className="px-3 py-2 bg-secondary/50 hover:bg-secondary rounded-lg text-xs text-foreground transition-colors text-right border border-border/50">
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-3 px-3 py-2 border-t border-border/50 bg-secondary/30 shrink-0">
            <a href="https://wa.me/966567130112" target="_blank" rel="noopener noreferrer"
              className="text-[10px] text-[#25D366] hover:underline flex items-center gap-1">
              <MessageCircle className="w-2.5 h-2.5" /> واتساب
            </a>
            <span className="text-border">|</span>
            <Link href="/#calculator" className="text-[10px] text-primary hover:underline">حاسبة السيولة</Link>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 shrink-0">
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
                className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
