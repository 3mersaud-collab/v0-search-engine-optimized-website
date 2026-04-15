"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin, Instagram, ArrowLeft } from "lucide-react"

export function ContactSection() {
  const whatsappMsg = encodeURIComponent("السلام عليكم، أبي أستفسر عن السيولة 🙏")
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=966548613381&text=${whatsappMsg}&type=phone_number&app_absent=0`

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-primary/5" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              تواصل معنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              مستعدون لمساعدتك في الحصول على السيولة
            </h2>
            <p className="text-muted-foreground text-lg">
              تواصل معنا للحصول على كاش تابي أو سيولة تمارا أو للإجابة على أي استفسار
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل - مطر</h3>

              <div className="space-y-5 mb-8">
                <a
                  href="tel:+966548613381"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">اتصل بنا</p>
                    <p className="font-medium text-foreground" dir="ltr">+966 56 345 7734</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">واتساب - للسيولة الفورية</p>
                    <p className="font-medium text-foreground">تواصل عبر واتساب الآن</p>
                  </div>
                </a>

                <a
                  href="mailto:matar@liilsa.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                    <p className="font-medium text-foreground text-sm">matar@liilsa.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/liilsa.sol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-pink-500/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <Instagram className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">انستقرام</p>
                    <p className="font-medium text-foreground">@liilsa.sol</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                    <MapPin className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">الموقع على قوقل ماب</p>
                    <p className="font-medium text-foreground">الرياض - حي المرسلات</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp CTA */}
              <Button
                size="lg"
                className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  اطلب سيولة عبر واتساب الآن
                </a>
              </Button>
            </div>

            {/* WhatsApp Card — بديل النموذج */}
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-lg flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">كيف تطلب السيولة؟</h3>
                <p className="text-muted-foreground text-sm">أسرع طريقة هي الواتساب — ردّنا فوري وتحويلك خلال ساعة</p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {[
                  { step: "١", title: "راسلنا على الواتساب", desc: "أخبرنا بالمبلغ اللي تبيه وعبر أي تطبيق (تابي / تمارا / مدفوع)" },
                  { step: "٢", title: "نحسب لك فوراً", desc: "نرسل لك الحسبة الكاملة: قيمة الجهاز، رسوم الشراكة، والصافي لك" },
                  { step: "٣", title: "تحويل خلال ساعة", desc: "بعد الموافقة نكمّل مع بعض وتستلم السيولة في حسابك" },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 text-lg">
                      {step}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Big WhatsApp Button */}
              <Button
                size="lg"
                className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg text-lg py-6"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  ابدأ الطلب الآن — واتساب
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                ردّنا فوري • تحويل خلال ساعة • خدمة موثوقة في الرياض
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
