"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-border transition-all duration-200 ${scrolled ? 'bg-card/98 backdrop-blur-xl shadow-sm' : 'bg-card/95 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* لوقو مطر */}
          <Link href="/" aria-label="مطر - سيولة تابي وتمارا" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/matar-icon.png"
              alt="مطر"
              width={50}
              height={32}
              priority
              className="h-7 md:h-8 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-primary font-black text-xl md:text-2xl leading-none tracking-wide">
                مطر
              </span>
              <span className="text-primary/75 text-[9px] md:text-[10px] font-medium mt-1 whitespace-nowrap">
                سحابة غيث ماحسبت حسابها
              </span>
            </div>
          </Link>

          {/* Desktop Navigation — 6 عناصر أساسية فقط */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/siyola-tabby" className="text-muted-foreground hover:text-primary transition-colors font-medium">سيولة تابي</Link>
            <Link href="/cash-tamara" className="text-muted-foreground hover:text-accent transition-colors font-medium">كاش تمارا</Link>
            <Link href="/#calculator" className="text-muted-foreground hover:text-foreground transition-colors">الحاسبة</Link>
            <Link href="/check-limit" className="text-muted-foreground hover:text-foreground transition-colors">افحص واطلب</Link>
            <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors">التقييمات</Link>
            <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors">المقالات</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" asChild>
              <a href="https://wa.me/966557002147">ابدأ الآن</a>
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
            <div className="flex flex-col gap-1">
              <Link href="/siyola-tabby" className="text-primary font-medium hover:text-primary/80 transition-colors py-3 px-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>سيولة تابي</Link>
              <Link href="/cash-tamara" className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>كاش تمارا</Link>
              <Link href="/#calculator" className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>الحاسبة</Link>
              <Link href="/check-limit" className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>افحص واطلب</Link>
              <Link href="/reviews" className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>التقييمات</Link>
              <Link href="/articles" className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>المقالات</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>من نحن</Link>
              <Link href="/affiliate" className="text-accent font-medium hover:text-accent/80 transition-colors py-3 px-2 rounded-lg hover:bg-accent/5" onClick={() => setIsMenuOpen(false)}>المسوقين بالعمولة</Link>
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border px-2">
                <span className="text-muted-foreground text-sm">الوضع الليلي</span>
                <ThemeToggle />
              </div>
              <div className="pt-2">
                <Button className="w-full" asChild>
                  <a href="https://wa.me/966557002147">ابدأ الآن عبر واتساب</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
