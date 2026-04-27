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
          <Link href="/" aria-label="مطر - سيولة تابي وتمارا" className="flex-shrink-0">
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0px", lineHeight:1 }}>

              {/* SVG اللوقو — سحابة مملوءة + 3 أمطار مستطيلة */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 60"
                style={{ width:"56px", height:"34px" }}
                aria-hidden="true"
              >
                {/* السحابة المملوءة */}
                <path
                  d="M 22 42 C 10 42, 4 34, 4 26 C 4 17, 10 10, 19 8 C 22 3, 29 0, 37 0 C 49 0, 58 8, 59 18 C 63 16, 67 16, 71 18 C 78 20, 82 26, 80 33 C 78 39, 72 43, 65 43 Z"
                  fill="#10b981"
                />
                {/* الأمطار — 3 مستطيلات مدورة، الوسطى أطول */}
                <rect x="32" y="44" width="5" height="13" rx="2.5" fill="#10b981"/>
                <rect x="44" y="44" width="5" height="16" rx="2.5" fill="#10b981"/>
                <rect x="56" y="44" width="5" height="13" rx="2.5" fill="#10b981"/>
              </svg>

              {/* نص مطر */}
              <span style={{
                color: "#10b981",
                fontWeight: 900,
                fontSize: "1.4rem",
                lineHeight: 1,
                letterSpacing: "0.04em",
                marginTop: "3px",
                fontFamily: "Cairo, Tajawal, sans-serif",
              }}>مطر</span>

              {/* التاقلاين */}
              <span style={{
                color: "#10b981",
                fontSize: "0.45rem",
                lineHeight: 1,
                opacity: 0.75,
                marginTop: "2px",
                whiteSpace: "nowrap",
                fontFamily: "Cairo, Tajawal, sans-serif",
              }}>سحابة غيث ماحسبت حسابها</span>

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
          <button className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="القائمة">
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