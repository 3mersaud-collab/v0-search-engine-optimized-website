import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-4">
          الصفحة غير موجودة
        </h1>
        
        <p className="text-muted-foreground mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-5 h-5" />
              الرئيسية
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <Link href="/order">
              اطلب سيولة الآن
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            أو تواصل معنا مباشرة:
          </p>
          <Button asChild variant="secondary" className="gap-2">
            <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
              واتساب: 0590360039
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
