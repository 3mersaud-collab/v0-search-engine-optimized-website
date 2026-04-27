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
            <div className="flex items-center gap-2">
              {/* لوقو مطر — outline سحابة مطر بدون خلفية — متناسق مع ألوان liilsol */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                className="h-10 w-10 flex-shrink-0"
                aria-hidden="true"
                fill="none"
              >
                {/* Cloud outline — open arc top, same style as brand logo */}
                <path
                  d="M20 52
                     C20 52 10 51 10 40
                     C10 30 18 24 28 26
                     C30 20 36 16 44 16
                     C54 16 62 24 62 34
                     C66 34 72 38 72 44
                     C72 51 66 56 60 56
                     L20 56
                     C15 56 10 52 10 47
                     C10 44 12 41 15 40"
                  stroke="#10b981"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Rain drops — three vertical bars with rounded ends */}
                <line x1="30" y1="60" x2="28" y2="70" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
                <line x1="40" y1="60" x2="38" y2="72" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
                <line x1="50" y1="60" x2="48" y2="70" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              {/* النصوص */}
              <div className="flex flex-col leading-tight">
                <span className="text-foreground font-extrabold text-xl tracking-wide leading-none">مطر</span>
                <span className="text-emerald-500 text-[9px] font-medium leading-tight opacity-90">سحابة غيث ما حسبت حسابها</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/siyola" className="text-muted-foreground hover:text-primary transition-colors font-medium">سيولة</Link>
            <Link href="/siyola-tabby" className="text-muted-foreground hover:text-primary transition-colors">سيولة تابي</Link>
            <Link href="/cash-tamara" className="text-muted-foreground hover:text-accent transition-colors">كاش تمارا</Link>
            <Link href="/#calculator" className="text-muted-foreground hover:text-foreground transition-colors">الحاسبة</Link>
            <Link href="/check-limit" className="text-muted-foreground hover:text-foreground transition-colors">افحص واطلب</Link>
            <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">آراء العملاء</Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">من نحن</Link>
            <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Bot className="w-4 h-4" />مطر
            </Link>
            <Link href="/track" className="text-muted-foreground hover:text-foreground transition-colors">تتبع الطلب</Link>
            <Link href="/affiliate" className="text-muted-foreground hover:text-accent transition-colors font-medium">المسوقين</Link>
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
