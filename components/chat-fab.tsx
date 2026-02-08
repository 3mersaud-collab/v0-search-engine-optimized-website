"use client"

import { Bot } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ChatFab() {
  const pathname = usePathname()

  // Don't show on chat page itself
  if (pathname === "/chat") return null

  return (
    <Link
      href="/chat"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="المساعد الذكي"
    >
      <Bot className="w-6 h-6" />
    </Link>
  )
}
