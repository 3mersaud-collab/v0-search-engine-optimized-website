"use client"

import { CloudRain } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ChatFab() {
  const pathname = usePathname()

  if (pathname === "/chat") return null

  return (
    <Link
      href="/chat"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 group"
      aria-label="مطر - المساعد الذكي"
    >
      <span className="whitespace-nowrap bg-card text-foreground text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        صامل؟ اسألني وازهل
      </span>
      <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform relative">
        <CloudRain className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-card animate-pulse" />
      </div>
    </Link>
  )
}
