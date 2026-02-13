"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react"

export function ContactSection() {
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل - مطر</h3>
              
              <div className="space-y-5 mb-8">
                <a 
                  href="tel:+966590360039"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">اتصل بنا</p>
                    <p className="font-medium text-foreground" dir="ltr">+966 59 036 0039</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/966590360039"
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
                  href="https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2efd0019dca76d:0x1ef93aea000775cb!8m2!3d24.7480288!4d46.6850197!16s%2Fg%2F11yxpt_4y_"
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
                <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  اطلب سيولة عبر واتساب الآن
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">أرسل طلب سيولة</h3>
              
              <form className="space-y-5" action="https://wa.me/966590360039" method="get">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      الاسم
                    </label>
                    <Input 
                      id="name"
                      placeholder="أدخل اسمك"
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      رقم الجوال
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="05xxxxxxxx"
                      className="bg-card"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="app" className="block text-sm font-medium text-foreground mb-2">
                    التطبيق (كاش تابي / سيولة تمارا / مدفوع)
                  </label>
                  <select 
                    id="app"
                    className="w-full h-10 px-3 rounded-md border border-input bg-card text-foreground"
                  >
                    <option value="">اختر التطبيق</option>
                    <option value="tabby">تابي - سيولة تابي</option>
                    <option value="tamara">تمارا - كاش تمارا</option>
                    <option value="madfu">مدفوع</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-foreground mb-2">
                    المبلغ المطلوب (السيولة / السلفة)
                  </label>
                  <Input 
                    id="amount"
                    type="number"
                    placeholder="مثال: 5000"
                    className="bg-card"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    ملاحظات إضافية
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="اكتب أي ملاحظات إضافية..."
                    rows={4}
                    className="bg-card resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/20">
                  إرسال طلب السيولة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
