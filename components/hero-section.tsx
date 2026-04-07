"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Zap, Clock, Star, MessageCircle } from "lucide-react"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Beautiful Background with Psychology-based colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
      </div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        color: 'var(--primary)',
        opacity: 0.03
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">مطر | سحابة غيث ماحسبت حسابها</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              سيولة تابي وسلفة تمارا |{" "}
              <span className="text-primary">كاش فوري عبر تقسيط جوالات الى كاش</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              نقوم بالدخول معك كشركاء في شراء الجهاز عبر <strong>تابي</strong> و<strong>تمارا</strong> و<strong>مدفوع</strong>، 
              ونتكفل بقيمة الدفعة الاولى مقابل نسبة الشراكة، ثم نقوم ببيعه وتحويل مبلغ السيولة او السلفة المطلوب مباشرة لحسابك البنكي خلال ساعة. 
              خدمة موثوقة في الرياض والسعودية.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 shadow-xl bg-[#25D366] hover:bg-[#1fb855] text-white" asChild>
                <a href="https://wa.me/966590360039">
                  <MessageCircle className="w-5 h-5" />
                  اطلب سيولة عبر الواتساب
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6" asChild>
                <a href="#calculator">
                  احسب سيولتك الآن
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center lg:text-right">تواصل معنا عبر الواتساب مباشرة وتحصل على ردّ فوري</p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>معاملات آمنة 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span>سيولة فورية</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>تحويل خلال ساعة</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 w-full max-w-lg overflow-hidden">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 md:p-8 border border-border overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Image 
                      src="/logo.jpg" 
                      alt="مطر" 
                      width={32} 
                      height={32} 
                      className="rounded-lg"
                      style={{ width: "32px", height: "32px" }}
                    />
                    <span className="text-sm text-muted-foreground">السيولة المتاحة</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-accent/15 text-accent rounded-full font-medium">جاهز للتحويل</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">5,000</div>
                <div className="text-muted-foreground mb-8">ريال سعودي</div>
                
                {/* Payment Apps */}
                <div className="grid grid-cols-3 gap-2 mb-6 w-full min-w-0">
                  <div className="bg-[#3BFFC1]/10 rounded-xl p-2 md:p-3 text-center border border-[#3BFFC1]/30 min-w-0">
                    <div className="text-sm md:text-lg font-bold text-[#292929] mb-1 truncate">tabby</div>
                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground">كاش تابي</span>
                  </div>
                  <div className="bg-[#FFD700]/10 rounded-xl p-2 md:p-3 text-center border border-[#FFD700]/30 min-w-0">
                    <div className="text-sm md:text-lg font-bold text-[#1A1A1A] mb-1 truncate">tamara</div>
                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground">كاش تمارا</span>
                  </div>
                  <div className="bg-[#4361EE]/10 rounded-xl p-2 md:p-3 text-center border border-[#4361EE]/30 min-w-0">
                    <div className="text-sm md:text-lg font-bold text-[#4361EE] mb-1 truncate">مدفوع</div>
                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground">مدفوع</span>
                  </div>
                </div>

                <Button className="w-full shadow-lg" size="lg" asChild>
                  <a href="#calculator">احسب السيولة المستلمة</a>
                </Button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 right-2 md:-right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                تحويل خلال ساعة
              </div>
              <div className="absolute -bottom-3 left-2 md:-left-3 bg-card border border-border text-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg flex items-center gap-1 md:gap-2">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                5.0 تقييم Google
              </div>
            </div>

            {/* Reviews CTA */}
            <div className="mt-6 bg-accent/10 rounded-xl p-4 border border-accent/20">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">اطلب تعاملاتنا السابقة وآراء العملاء</p>
                  <p className="text-xs text-muted-foreground">تواصل معنا لرؤية تقييمات عملائنا</p>
                </div>
                <Button size="sm" variant="ghost" className="text-accent hover:text-accent" asChild>
                  <a href="https://wa.me/966590360039">واتساب</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "مطر - سحابة غيث ماحسبت حسابها",
            "description": "مطر - سحابة غيث ماحسبت حسابها. ندخل كشركاء معكم في شراء الجهاز ونتكفل بالدفعة الاولى مقابل نسبة الشراكة ثم نبيعه ونحول لكم السيولة. كاش تابي، كاش تمارا، سلفة فورية.",
            "url": "https://liilsol.com",
            "telephone": "+966590360039",
            "email": "matar@liilsa.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "الرياض",
              "addressRegion": "حي المرسلات",
              "addressCountry": "SA"
            },
            "areaServed": "SA",
            "serviceType": ["سيولة تابي", "سيولة تمارا", "كاش تابي", "كاش تمارا", "سلفة"]
          })
        }}
      />
    </section>
  )
}
