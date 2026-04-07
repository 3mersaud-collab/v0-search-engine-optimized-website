import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "كاش تابي | سلفة تابي | تحويل تابي الى كاش - خلال ساعتين",
  description: "احصل على كاش تابي وسلفة تابي خلال ساعتين. تحويل تابي الى كاش بأفضل الأسعار. خدمة أفضل وأسرع من تمارا في السعودية مع مطر.",
  keywords: "كاش تابي, سلفة تابي, تحويل تابي الى كاش, تسييل تابي, tabby cash, كاش من تابي, افضل من تمارا",
  alternates: {
    canonical: "https://liilsol.com/cash-tabby",
  },
  openGraph: {
    title: "كاش تابي | سلفة تابي - مطر",
    description: "احصل على كاش من رصيد تابي خلال ساعتين - أفضل من تمارا",
  },
}

export default function CashTabbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://cdn.tabby.ai/assets/tabby-logo-black.svg"
                  alt="تابي Tabby"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  خلال ساعتين
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">كاش تابي</span> وسلفة فورية
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                ندخل معك كشركاء في شراء الجهاز عبر تابي، ونتكفل بالدفعة الأولى مقابل نسبة الشراكة، ثم نبيعه ونحول لك <strong className="text-foreground">كاش تابي أو سلفة تابي</strong> في حسابك البنكي خلال ساعتين. خدمتنا أسهل وأسرع من تمارا.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039">
                    اطلب كاش تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب المبلغ</Link>
                </Button>
              </div>

              {/* Comparison Note */}
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground mb-1">لماذا تابي أفضل من تمارا؟</p>
                    <p className="text-sm text-muted-foreground">
                      تابي أسهل في الاستخدام - لا تحتاج إضافة بطاقة بنكية أو الضغط على ادفع. فقط صور الشاشة وأرسلها لنا.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works - Tabby Specific */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              خطوات <span className="text-primary">كاش تابي</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              خطوات تابي بسيطة وسريعة - أسهل من تمارا
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "احسب المبلغ في حاسبة سلفة تابي",
                  desc: "ادخل موقع مطر (liilsol.com) واستخدم الحاسبة لتحديد مبلغ الشراء"
                },
                {
                  step: "2",
                  title: "ادخل متجر نون أو اكسترا",
                  desc: "تابي متواجد في نون واكسترا. أضف منتجات في السلة بنفس مبلغ الشراء"
                },
                {
                  step: "3",
                  title: "اختر تابي وصور الشاشة",
                  desc: "اختر تابي كوسيلة دفع. بعد ظهور تقسيم الدفعات، فقط صور الشاشة وأرسلها لنا"
                },
                {
                  step: "4",
                  title: "استلم كاش تابي خلال ساعتين",
                  desc: "ندخل كشركاء معك ونتكفل بالدفعة الأولى، ثم نبيع الجهاز ونحول لك كاش تابي في حسابك البنكي"
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

            {/* Comparison with Tamara */}
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-primary/5 border border-primary/30 rounded-2xl">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                مقارنة تابي مع تمارا
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-xl">
                  <h4 className="font-bold text-primary mb-2">تابي (الأفضل)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      فقط صور الشاشة وأرسلها
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      لا تحتاج إضافة بطاقة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      لا تحتاج الضغط على ادفع
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-card rounded-xl">
                  <h4 className="font-bold text-muted-foreground mb-2">تمارا</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 text-destructive">X</span>
                      تحتاج إضافة بطاقة بدون رصيد
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 text-destructive">X</span>
                      لا تستخدم Apple Pay
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 text-destructive">X</span>
                      خطوات أكثر تعقيداً
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              رسوم <span className="text-primary">سلفة تابي</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 bg-primary/5 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">الخصومات على كاش تابي</h3>
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
              أسئلة شائعة عن <span className="text-primary">كاش تابي</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "لماذا تابي أفضل من تمارا؟",
                  a: "تابي أسهل في الاستخدام - فقط صور الشاشة وأرسلها. بينما تمارا يتطلب إضافة بطاقة بدون رصيد والضغط على ادفع."
                },
                {
                  q: "كم يستغرق الحصول على كاش تابي؟",
                  a: "ساعتين فقط من وقت إرسال صورة الشاشة حتى التحويل لحسابك البنكي."
                },
                {
                  q: "هل كاش تابي آمن؟",
                  a: "نعم، نحن لا نطلب كلمات مرور أو رموز OTP. أنت تتحكم في كل خطوة من هاتفك."
                },
                {
                  q: "أين أجد تابي؟",
                  a: "تابي متواجد في متجر نون ومتجر اكسترا."
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
              جاهز تحصل على كاش تابي؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              تواصل معنا الآن واحصل على سلفة تابي في حسابك خلال ساعتين
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
            "name": "كاش تابي - مطر",
            "description": "خدمة تحويل تابي الى كاش نقدي خلال ساعتين - أفضل من تمارا",
            "provider": {
              "@type": "Organization",
              "name": "مطر",
              "url": "https://liilsol.com"
            },
            "areaServed": "SA",
            "serviceType": "كاش تابي"
          })
        }}
      />
    </div>
  )
}
