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

          {/* ===== لوقو مطر — مطابق تماماً للصورة ===== */}
          <Link href="/" aria-label="مطر - سيولة تابي وتمارا" className="flex-shrink-0">
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"2px", lineHeight:1 }}>

              {/* SVG السحابة — نفس شكل اللوقو الأصلي */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 90"
                fill="none"
                style={{ width:"54px", height:"48px" }}
                aria-hidden="true"
              >
                {/* السحابة: قوس كبير يساري + بمبة يمينية، مفتوح من الأسفل */}
                <path
                  d="M 18 68 C 8 68, 4 60, 4 52 C 4 36, 14 24, 26 22 C 28 14, 36 8, 48 8 C 62 8, 72 18, 72 30 C 78 28, 86 32, 86 40 C 86 50, 80 58, 70 58 C 70 62, 74 70, 74 76"
                  stroke="#10b981"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* أمطار: 4 أعمدة بارتفاعات مختلفة */}
                <line x1="26" y1="56" x2="26" y2="70" stroke="#10b981" strokeWidth="6" strokeLinecap="round"/>
                <line x1="38" y1="54" x2="38" y2="75" stroke="#10b981" strokeWidth="6" strokeLinecap="round"/>
                <line x1="50" y1="53" x2="50" y2="78" stroke="#10b981" strokeWidth="6" strokeLinecap="round"/>
                <line x1="62" y1="55" x2="62" y2="70" stroke="#10b981" strokeWidth="6" strokeLinecap="round"/>
              </svg>

              {/* اسم مطر */}
              <span style={{
                color: "#10b981",
                fontWeight: 900,
                fontSize: "1.5rem",
                lineHeight: 1,
                letterSpacing: "0.05em",
                marginTop: "1px",
              }}>
                مطر
              </span>

              {/* التاقلاين */}
              <span style={{
                color: "#10b981",
                fontSize: "0.48rem",
                lineHeight: 1,
                opacity: 0.8,
                marginTop: "2px",
                whiteSpace: "nowrap",
              }}>
                سحابة غيث ماحسبت حسابها
              </span>

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
