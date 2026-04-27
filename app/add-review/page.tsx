"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AddReviewPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              شاركنا رأيك
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              قيّم تجربتك معنا
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              رأيك يهمنا ويساعد الآخرين في اتخاذ قرارهم. شاركنا تجربتك على Google Maps
            </p>

            {/* Google Review Card */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-10 object-contain"
                />
              </div>
              
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8">
                اضغط على الزر أدناه لإضافة تقييمك على Google Maps
              </p>

              <Button size="lg" className="gap-2 w-full max-w-md" asChild>
                <a 
                  href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  أضف تقييمك على Google Maps
                </a>
              </Button>
            </div>

            {/* WhatsApp Alternative */}
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center gap-3 justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-foreground">أو شاركنا رأيك عبر واتساب</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                يمكنك أيضاً إرسال رأيك وتجربتك مباشرة عبر واتساب
              </p>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <a 
                  href="https://wa.me/966590360039?text=أريد%20مشاركة%20تجربتي%20مع%20خدمة%20السيولة"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  شارك رأيك عبر واتساب
                </a>
              </Button>
            </div>

            <div className="mt-12">
              <Button variant="ghost" asChild>
                <Link href="/reviews">العودة لصفحة التقييمات</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
