"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Bot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.jpg" 
              alt="مطر - سيولة تابي وتمارا" 
              width={40} 
              height={40} 
              className="rounded-lg"
              style={{ width: "40px", height: "40px" }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight font-serif">
                مطر
              </span>
              <span className="text-[9px] md:text-[11px] text-muted-foreground/80 font-light leading-none tracking-wide">سحابة غيث ماحسبت حسابها</span>
              <span className="text-[7px] md:text-[8px] text-muted-foreground/40 font-light leading-none mt-0.5 tracking-widest">powered by liilsol</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/siyola" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              سيولة
            </Link>
            <Link href="/siyola-tabby" className="text-muted-foreground hover:text-primary transition-colors">
              سلفة تابي
            </Link>
            <Link href="/cash-tabby" className="text-muted-foreground hover:text-primary transition-colors">
              كاش تابي
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

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
              <a href="tel:+966590360039">
                <Phone className="w-4 h-4" />
                <span dir="ltr">0590360039</span>
              </a>
            </Button>
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
              <Link 
                href="/siyola" 
                className="text-primary font-medium hover:text-primary/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                سيولة
              </Link>
              <Link 
                href="/siyola-tabby" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                سلفة تابي
              </Link>
              <Link 
                href="/cash-tabby" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                كاش تابي
              </Link>
              <Link 
                href="/#calculator" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                الحاسبة
              </Link>
              <Link 
                href="/check-limit" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                افحص واطلب
              </Link>
              <Link 
                href="/reviews" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                آراء العملاء
              </Link>
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link 
                href="/chat" 
                className="text-primary font-medium hover:text-primary/80 transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Bot className="w-4 h-4" />
                مطر
              </Link>
              <Link 
                href="/track" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                تتبع الطلب
              </Link>
              <Link 
                href="/affiliate" 
                className="text-accent font-medium hover:text-accent/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                المسوقين بالعمولة
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-muted-foreground text-sm">الوضع الليلي</span>
                <ThemeToggle />
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="gap-2 w-full bg-transparent" asChild>
                  <a href="tel:+966590360039">
                    <Phone className="w-4 h-4" />
                    <span dir="ltr">0590360039</span>
                  </a>
                </Button>
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
