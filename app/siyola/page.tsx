import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Banknote, Clock, Shield, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "سيولة | سلفة | كاش فوري من تابي وتمارا ومدفوع",
  description: "احصل على سيولة فورية وسلفة من رصيدك في تابي وتمارا ومدفوع. تحويل لحسابك البنكي خلال ساعة. أفضل أسعار السيولة في السعودية مع مطر.",
  keywords: "سيولة, سلفة, كاش, سيولة فورية, سلفة سريعة, تحويل رصيد, كاش تابي, كاش تمارا, سيولة الرياض, مطر, سحابة غيث",
  alternates: {
    canonical: "https://liilsol.com/siyola",
  },
  openGraph: {
    title: "سيولة وسلفة فورية - مطر",
    description: "سيولة من تابي وتمارا ومدفوع خلال ساعة",
  },
}

export default function SiyolaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Banknote className="w-4 h-4" />
                <span className="text-sm font-medium">سيولة وسلفة فورية</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">سيولة</span> و<span className="text-accent">سلفة</span> من رصيدك
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                هل تحتاج <strong className="text-foreground">سيولة فورية</strong>؟ ندخل معك كشركاء في شراء الجهاز عبر تابي أو تمارا أو مدفوع، ونتكفل بالدفعة الأولى مقابل نسبة الشراكة، ثم نبيعه ونحول لك مبلغ السيولة لحسابك البنكي خلال <strong className="text-foreground">ساعة فقط</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966548613381">
                    اطلب سيولة الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب المبلغ</Link>
                </Button>
              </div>

              {/* Apps */}
              <div className="flex justify-center items-center gap-8 mb-8">
                <Image
                  src="https://cdn.tabby.ai/assets/tabby-logo-black.svg"
                  alt="تابي"
                  width={80}
                  height={32}
                  className="opacity-80"
                  style={{ width: 'auto', height: '32px' }}
                />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tamara_logo.png"
                  alt="تمارا"
                  width={100}
                  height={32}
                  className="opacity-80"
                  style={{ width: 'auto', height: '32px' }}
                />
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl text-foreground">ساعة</p>
                  <p className="text-sm text-muted-foreground">وقت التحويل</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-bold text-2xl text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">آمن وموثوق</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-2xl text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">تطبيقات مدعومة</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Siyola */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                ما هي <span className="text-primary">السيولة</span>؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4 mb-12">
                <p>
                  <strong className="text-foreground">السيولة</strong> (أو السلفة) هي خدمة نقوم فيها بالدخول كشركاء معكم في شراء الجهاز عبر تطبيقات الدفع الآجل مثل تابي وتمارا ومدفوع، ونتكفل بقيمة الدفعة الأولى مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لكم مبلغ <strong className="text-foreground">السيولة أو السلفة المطلوب</strong> مباشرة لحسابكم البنكي.
                </p>
                <p>
                  لمزيد من التفاصيل عن الاساس الذي نعمل عليه، يرجى زيارة صفحة{" "}
                  <a href="/shariah" className="text-primary underline">الامتثال الشرعي</a>.
                </p>
              </div>

              {/* Apps Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/siyola-tabby" className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                  <Image
                    src="https://cdn.tabby.ai/assets/tabby-logo-black.svg"
                    alt="تابي"
                    width={80}
                    height={32}
                    className="mb-4"
                    style={{ width: 'auto', height: '32px' }}
                  />
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">سيولة تابي</h3>
                  <p className="text-sm text-muted-foreground mb-3">متاح في نون واكسترا. خطوات بسيطة وسريعة.</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    اعرف المزيد <ArrowLeft className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/cash-tamara" className="p-6 bg-background rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all group">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tamara_logo.png"
                    alt="تمارا"
                    width={100}
                    height={32}
                    className="mb-4"
                    style={{ width: 'auto', height: '32px' }}
                  />
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">كاش تمارا</h3>
                  <p className="text-sm text-muted-foreground mb-3">متاح في نون واكسترا. خطوات مختلفة عن تابي.</p>
                  <span className="text-accent text-sm font-medium flex items-center gap-1">
                    اعرف المزيد <ArrowLeft className="w-4 h-4" />
                  </span>
                </Link>

                <div className="p-6 bg-background rounded-2xl border border-border">
                  <div className="h-8 mb-4 flex items-center">
                    <span className="text-xl font-bold text-foreground">مدفوع</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">سيولة مدفوع</h3>
                  <p className="text-sm text-muted-foreground mb-3">متاح في المنيع فقط. نفس خطوات تابي.</p>
                  <span className="text-muted-foreground text-sm">تواصل معنا للتفاصيل</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Siyola */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              متى تحتاج <span className="text-primary">سلفة</span>؟
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { title: "طوارئ مالية", desc: "موقف مفاجئ يحتاج كاش سريع" },
                { title: "فواتير مستعجلة", desc: "فاتورة لازم تدفعها اليوم" },
                { title: "فرصة ذهبية", desc: "عرض أو فرصة ما تقدر تفوتها" },
                { title: "مصاريف غير متوقعة", desc: "احتياج مالي ما كان بالحسبان" }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border text-center">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              رسوم <span className="text-primary">السيولة</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              نفس الرسوم لجميع التطبيقات - استخدم الحاسبة لمعرفة المبلغ الدقيق
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">الدفعة الأولى (نتكفل بها كشركاء)</span>
                  <span className="font-bold text-primary text-xl">25%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">الرسوم الإدارية</span>
                  <span className="font-bold text-primary text-xl">10%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground">فرق البيع</span>
                  <span className="font-bold text-accent text-xl">10-15%</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/#calculator">
                    احسب المبلغ النهائي
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              جاهز تحصل على سيولة؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              تواصل معنا الآن واحصل على كاش في حسابك خلال ساعة فقط
            </p>
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
              <a href="https://wa.me/966548613381">
                واتساب: 0548613381
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
            "name": "سيولة وسلفة - مطر",
            "description": "خدمة سيولة وسلفة من تابي وتمارا ومدفوع",
            "provider": {
              "@type": "Organization",
              "name": "مطر",
              "url": "https://liilsol.com"
            },
            "areaServed": "SA",
            "serviceType": "سيولة"
          })
        }}
      />
    </div>
  )
}
