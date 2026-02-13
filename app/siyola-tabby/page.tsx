import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "سيولة تابي | كاش تابي | سلفة تابي - تحويل خلال ساعتين",
  description: "احصل على سيولة تابي وكاش من رصيدك خلال ساعتين فقط. سلفة تابي بأفضل الأسعار. تحويل رصيد تابي إلى نقد في حسابك البنكي مع مطر.",
  keywords: "سيولة تابي, كاش تابي, سلفة تابي, تحويل رصيد تابي, تسييل تابي, tabby cash, سيولة من تابي",
  alternates: {
    canonical: "https://liilsol.com/siyola-tabby",
  },
  openGraph: {
    title: "سيولة تابي | كاش تابي - مطر",
    description: "احصل على كاش من رصيد تابي خلال ساعتين",
  },
}

export default function SiyolaTabbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://cdn.tabby.ai/assets/tabby-logo-black.svg"
                  alt="تابي Tabby"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  خلال ساعتين
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">سيولة تابي</span> وكاش من رصيدك
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                ندخل معك كشركاء في شراء الجهاز عبر تابي، ونتكفل بالدفعة الأولى مقابل نسبة الشراكة، ثم نبيعه ونحول لك <strong className="text-foreground">مبلغ السيولة أو السلفة</strong> في حسابك البنكي خلال ساعتين فقط.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039">
                    اطلب سيولة تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب المبلغ</Link>
                </Button>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">ساعتين فقط</p>
                    <p className="text-sm text-muted-foreground">تحويل سريع</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-bold text-foreground">آمن 100%</p>
                    <p className="text-sm text-muted-foreground">بدون كلمات مرور</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-foreground">نون واكسترا</p>
                    <p className="text-sm text-muted-foreground">متاجر متاحة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              خطوات الحصول على <span className="text-primary">سيولة تابي</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "احسب المبلغ في حاسبة السيولة",
                  desc: "ادخل موقع مطر واستخدم الحاسبة لتحديد مبلغ الشراء ومعرفة المبلغ النهائي"
                },
                {
                  step: "2",
                  title: "ادخل متجر نون أو اكسترا",
                  desc: "تابي متواجد في نون واكسترا. أضف منتجات في السلة بنفس مبلغ الشراء من الحاسبة"
                },
                {
                  step: "3",
                  title: "اختر تابي وصور الشاشة",
                  desc: "اختر تابي كوسيلة دفع. بعد ظهور تقسيم الدفعات، صور الشاشة فقط وأرسلها لنا على واتساب"
                },
                {
                  step: "4",
                  title: "استلم السيولة خلال ساعتين",
                  desc: "ندخل كشركاء معك ونتكفل بالدفعة الأولى، ثم نبيع الجهاز ونحول لك مبلغ السيولة في حسابك البنكي خلال ساعتين"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              رسوم <span className="text-primary">كاش تابي</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 bg-primary/5 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">الخصومات على سيولة تابي</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">الدفعة الأولى (نتكفل بها كشركاء)</span>
                    <span className="font-bold text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">الرسوم الإدارية</span>
                    <span className="font-bold text-primary">10%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground">فرق البيع</span>
                    <span className="font-bold text-accent">10-15% حسب المبلغ</span>
                  </div>
                </div>
                <div className="p-6 bg-accent/5">
                  <p className="text-sm text-muted-foreground mb-4">
                    كلما زاد المبلغ، قل فرق البيع. المبالغ فوق 12,000 ريال تحصل على 10% فقط.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/#calculator">احسب المبلغ النهائي</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              أسئلة شائعة عن <span className="text-primary">سلفة تابي</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "كم يستغرق الحصول على كاش تابي؟",
                  a: "ساعتين فقط من وقت إرسال صورة الشاشة حتى التحويل لحسابك البنكي."
                },
                {
                  q: "هل سيولة تابي آمنة؟",
                  a: "نعم، نحن لا نطلب كلمات مرور أو رموز OTP. أنت تتحكم في كل خطوة من هاتفك."
                },
                {
                  q: "أين أجد تابي؟",
                  a: "تابي متواجد في متجر نون ومتجر اكسترا. يمكنك استخدام أي منهما."
                },
                {
                  q: "كم الحد الأدنى لسيولة تابي؟",
                  a: "لا يوجد حد أدنى، لكن ننصح بمبالغ أكبر للحصول على نسبة أفضل."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-foreground mb-2 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground mr-7">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              جاهز تحصل على سيولة تابي؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              تواصل معنا الآن واحصل على كاش تابي في حسابك خلال ساعتين
            </p>
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
              <a href="https://wa.me/966590360039">
                واتساب: 0590360039
                <ArrowLeft className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "سيولة تابي - مطر",
            "description": "خدمة تحويل رصيد تابي إلى كاش نقدي خلال ساعتين",
            "provider": {
              "@type": "Organization",
              "name": "مطر",
              "url": "https://liilsol.com"
            },
            "areaServed": "SA",
            "serviceType": "سيولة تابي"
          })
        }}
      />
    </div>
  )
}
