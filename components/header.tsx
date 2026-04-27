"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ===== لوقو مطر ===== */}
          <Link href="/" className="flex items-center gap-2" aria-label="مطر - سيولة تابي وتمارا">
            <div className="flex items-center gap-2.5 bg-[#0c1a2e] rounded-2xl px-3 py-2 shadow-lg border border-cyan-800/50">
              {/* أيقونة السحابة والمطر */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 54"
                className="h-10 w-10 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M13 27 C13 17 20 9 30 9 C36 9 42 12 45.5 17.5 C47 17 48.5 16.5 50.5 16.5 C57.5 16.5 63 22 63 29 C63 36 57.5 41 50.5 41 L12 41 C6 41 1 36 1 29.5 C1 23 6 19 13 27 Z"
                  fill="#22d3ee"
                />
                <line x1="20" y1="45" x2="18" y2="52" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="31" y1="45" x2="29" y2="53" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="42" y1="45" x2="40" y2="52" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round"/>
              </svg>
              {/* النصوص */}
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-2xl md:text-3xl tracking-tight leading-none">مطر</span>
                <span className="text-cyan-300 text-[9px] md:text-[10px] font-medium leading-tight opacity-85 mt-0.5">سحابة غيث ما حسبت حسابها</span>
                <span className="text-cyan-500/50 text-[7px] leading-none mt-0.5 tracking-widest">powered by liilsol</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/siyola" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              سيولة
            </Link>
            <Link href="/siyola-tabby" className="text-muted-foreground hover:text-primary transition-colors">
              سيولة تابي
            </Link>
            <Link href="/cash-tamara" className="text-muted-foreground hover:text-accent transition-colors">
              كاش تمارا
            </Link>
            <Link href="/#calculator" className="text-muted-foreground hover:text-foreground transition-colors">
              الحاسبة
            </Link>
            <Link href="/check-limit" className="text-muted-foreground hover:text-foreground transition-colors">
              افحص واطلب
            </Link>
            <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">
              آراء العملاء
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              من نحن
            </Link>
            <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Bot className="w-4 h-4" />
              مطر
            </Link>
            <Link href="/track" className="text-muted-foreground hover:text-foreground transition-colors">
              تتبع الطلب
            </Link>
            <Link href="/affiliate" className="text-muted-foreground hover:text-accent transition-colors font-medium">
              المسوقين
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" asChild>
              <a href="https://wa.me/966590360039">ابدأ الآن</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/siyola" className="text-primary font-medium hover:text-primary/80 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>سيولة</Link>
              <Link href="/siyola-tabby" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>سيولة تابي</Link>
              <Link href="/cash-tamara" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>كاش تمارا</Link>
              <Link href="/#calculator" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>الحاسبة</Link>
              <Link href="/check-limit" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>افحص واطلب</Link>
              <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>آراء العملاء</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>من نحن</Link>
              <Link href="/chat" className="text-primary font-medium hover:text-primary/80 transition-colors py-2 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Bot className="w-4 h-4" />مطر
              </Link>
              <Link href="/track" className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMenuOpen(false)}>تتبع الطلب</Link>
              <Link href="/affiliate" className="text-accent font-medium hover:text-accent/80 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>المسوقين بالعمولة</Link>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-muted-foreground text-sm">الوضع الليلي</span>
                <ThemeToggle />
              </div>
              <div className="pt-2">
                <Button className="w-full" asChild>
                  <a href="https://wa.me/966590360039">ابدأ الآن</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
