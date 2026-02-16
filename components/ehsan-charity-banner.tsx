"use client"

import { Heart, Handshake, Sparkles } from "lucide-react"

export function EhsanCharityBanner() {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/3 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main Card */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-accent/20 shadow-xl overflow-hidden">
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-5">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">شراكة في الخير</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                  اذا تنوي تقدم الطلب من عندنا، لازم تنوي الصدقة بـ 5% من قيمة الرسوم الادارية
                </p>
              </div>

              {/* Two pillars */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-base">شراكة في الشراء</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      ندخل معكم كشركاء في كل عملية شراء
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-accent/5 border border-accent/10">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-base">شراكة في الاجر</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      معا نساهم في عمل الخير من كل عملية
                    </p>
                  </div>
                </div>
              </div>

              {/* Ehsan Pledge */}
              <div className="text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-accent/8 to-primary/8 border border-accent/15">
                <p className="text-foreground font-bold text-base md:text-lg mb-2">
                  نتعهد بدفع 5% من الارباح لمنصة احسان
                </p>
                <p className="text-sm text-muted-foreground">
                  لاننا نؤمن ان البركة في العطاء
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
