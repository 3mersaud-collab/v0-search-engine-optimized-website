"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Calendar, User, ExternalLink, MapPin, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// تقييمات حقيقية من Google Maps - يمكن تحديثها يدوياً من صفحة Google
const googleReviews = [
  {
    id: 1,
    name: "عميل Google",
    rating: 5,
    date: "2026-01",
    comment: "تجربة ممتازة وسرعة في التنفيذ",
    source: "Google Maps",
    verified: true
  },
]

export default function ReviewsPage() {
  const [filter, setFilter] = useState<string>("all")
  
  const filteredReviews = googleReviews

  const averageRating = 5.0
  const totalReviews = googleReviews.length

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              آراء العملاء
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              تقييمات عملائنا على Google Maps
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              شاهد تقييمات حقيقية من عملاء جربوا خدمة السيولة معنا
            </p>

            {/* Google Rating Card */}
            <div className="max-w-md mx-auto bg-card rounded-2xl p-8 border border-border shadow-lg mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google" 
                  className="h-8 object-contain"
                />
              </div>
              <div className="flex items-center gap-2 justify-center mb-3">
                <span className="text-5xl font-bold text-foreground">{averageRating}</span>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">تقييم Google</span>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                شاهد جميع التقييمات على Google
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a 
                  href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  قيّمنا على Google
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/966590360039?text=أريد%20رؤية%20تعاملاتكم%20السابقة" target="_blank" rel="noopener noreferrer">
                  اطلب التعاملات السابقة
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Request Previous Transactions */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              اطلب مشاهدة تعاملاتنا السابقة
            </h2>
            <p className="text-muted-foreground mb-6">
              نرسل لك صور من تعاملاتنا السابقة مع العملاء وآرائهم الحقيقية عبر واتساب
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://wa.me/966590360039?text=أريد%20رؤية%20تعاملاتكم%20السابقة%20وآراء%20العملاء" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5" />
                اطلب التعاملات السابقة عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Google Reviews Embed Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              تقييماتنا على Google Maps
            </h2>
            <p className="text-muted-foreground">
              اضغط على الرابط لمشاهدة جميع التقييمات الحقيقية
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <a 
              href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!4m8!3m7!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!9m1!1b1!16s%2Fg%2F11yxpt_4y_"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">liilSOL</h3>
                  <p className="text-muted-foreground">الرياض - حي المرسلات</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-foreground">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-primary group-hover:underline">
                <span className="font-medium">اضغط لمشاهدة جميع التقييمات</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              لماذا نحن موثوقون؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">موقع حقيقي</h3>
              <p className="text-sm text-muted-foreground">لدينا موقع على Google Maps يمكنك زيارته</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">تقييمات حقيقية</h3>
              <p className="text-sm text-muted-foreground">تقييمات من عملاء حقيقيين على Google</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Quote className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">تعاملات موثقة</h3>
              <p className="text-sm text-muted-foreground">نرسل لك صور التعاملات السابقة عند الطلب</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            هل جربت خدمتنا؟
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            شاركنا تجربتك على Google Maps وساعد الآخرين في اتخاذ قرارهم
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a 
                href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                قيّمنا على Google
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#calculator">احسب سيولتك</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
