import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle, CheckCircle2, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "كاش تمارا | سيولة تمارا | سلفة تمارا - تحويل خلال ساعتين",
  description: "احصل على كاش تمارا وسيولة من رصيدك خلال ساعتين. سلفة تمارا بأفضل الأسعار. تحويل رصيد تمارا إلى نقد في حسابك البنكي مع مطر.",
  keywords: "كاش تمارا, سيولة تمارا, سلفة تمارا, تحويل رصيد تمارا, تسييل تمارا, tamara cash, كاش من تمارا",
  alternates: {
    canonical: "https://liilsol.com/cash-tamara",
  },
  openGraph: {
    title: "كاش تمارا | سيولة تمارا - مطر",
    description: "احصل على كاش من رصيد تمارا خلال ساعتين",
  },
}

export default function CashTamaraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
          <div className="absolute top-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tamara_logo.png"
                  alt="تمارا Tamara"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  خلال ساعتين
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-accent">كاش تمارا</span> وسيولة فورية
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                ندخل معك كشركاء في شراء الجهاز عبر تمارا، ونتكفل بالدفعة الأولى مقابل نسبة الشراكة، ثم نبيعه ونحول لك <strong className="text-foreground">مبلغ السيولة أو السلفة</strong> في حسابك البنكي خلال ساعتين.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039">
                    اطلب كاش تمارا الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب المبلغ</Link>
                </Button>
              </div>

              {/* Important Notice */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground mb-1">خطوات تمارا مختلفة عن تابي!</p>
                    <p className="text-sm text-muted-foreground">
                      تمارا يتطلب خطوات إضافية. اقرأ الخطوات بعناية قبل البدء.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works - Tamara Specific */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              خطوات <span className="text-accent">كاش تمارا</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              خطوات تمارا مختلفة عن تابي ومدفوع - اتبعها بدقة
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "احسب المبلغ في حاسبة السيولة",
                  desc: "ادخل موقع مطر (liilsol.com) واستخدم الحاسبة لتحديد مبلغ الشراء"
                },
                {
                  step: "2",
                  title: "ادخل متجر نون أو اكسترا",
                  desc: "تمارا متواجد في نون واكسترا. أضف منتجات في السلة بنفس مبلغ الشراء"
                },
                {
                  step: "3",
                  title: "اختر تمارا واستمر بالدفع",
                  desc: "اختر تمارا كوسيلة دفع، ثم اختر 'ادفع' واستمر في الخطوات",
                  important: true
                },
                {
                  step: "4",
                  title: "أضف بطاقة بدون رصيد",
                  desc: "أضف بطاقة بنكية بدون رصيد. لا تستخدم بطاقة فيها رصيد!",
                  warning: true
                },
                {
                  step: "5",
                  title: "اضغط 'ادفع' وصور الشاشة",
                  desc: "بعد الضغط على ادفع، صور صفحة البنك أو رسالة الخطأ وأرسلها لنا"
                },
                {
                  step: "6",
                  title: "استلم السيولة خلال ساعتين",
                  desc: "ندخل كشركاء معك ونتكفل بالدفعة الأولى، ثم نبيع الجهاز ونحول لك مبلغ السيولة في حسابك البنكي"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 p-6 rounded-2xl border ${
                    item.warning 
                      ? 'bg-red-500/5 border-red-500/30' 
                      : item.important 
                        ? 'bg-amber-500/5 border-amber-500/30'
                        : 'bg-background border-border'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 ${
                    item.warning 
                      ? 'bg-red-500 text-white' 
                      : item.important
                        ? 'bg-amber-500 text-white'
                        : 'bg-accent text-accent-foreground'
                  }`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warnings */}
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-red-500/5 border border-red-500/30 rounded-2xl">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                تنبيهات مهمة لكاش تمارا
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  لا تستخدم Apple Pay
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  لا تستخدم بطاقة فيها رصيد
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  لا تستخدم البطاقة المضافة مسبقاً في تمارا
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              رسوم <span className="text-accent">سيولة تمارا</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 bg-accent/5 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">الخصومات على كاش تمارا</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">الدفعة الأولى (نتكفل بها كشركاء)</span>
                    <span className="font-bold text-accent">25%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">الرسوم الإدارية</span>
                    <span className="font-bold text-accent">10%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground">فرق البيع</span>
                    <span className="font-bold text-primary">10-15% حسب المبلغ</span>
                  </div>
                </div>
                <div className="p-6 bg-primary/5">
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
              أسئلة شائعة عن <span className="text-accent">سلفة تمارا</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "لماذا خطوات تمارا مختلفة؟",
                  a: "تمارا يتطلب التأكد من صلاحية الحد بشكل مختلف، لذلك نحتاج الوصول لصفحة البنك أو رسالة الخطأ."
                },
                {
                  q: "لماذا أضيف بطاقة بدون رصيد؟",
                  a: "لأننا نحتاج فقط التأكد من الحد الائتماني. إذا كان فيها رصيد قد تتم عملية الشراء بالخطأ."
                },
                {
                  q: "ماذا لو ظهرت رسالة خطأ؟",
                  a: "صور رسالة الخطأ وأرسلها لنا. هذا يعني أن حدك متاح ويمكننا إتمام العملية."
                },
                {
                  q: "أين أجد تمارا؟",
                  a: "تمارا متواجد في متجر نون ومتجر اكسترا."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-bold text-foreground mb-2 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              جاهز تحصل على كاش تمارا؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              تواصل معنا الآن واحصل على سيولة تمارا في حسابك خلال ساعتين
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
            "name": "كاش تمارا - مطر",
            "description": "خدمة تحويل رصيد تمارا إلى كاش نقدي خلال ساعتين",
            "provider": {
              "@type": "Organization",
              "name": "مطر",
              "url": "https://liilsol.com"
            },
            "areaServed": "SA",
            "serviceType": "كاش تمارا"
          })
        }}
      />
    </div>
  )
}
