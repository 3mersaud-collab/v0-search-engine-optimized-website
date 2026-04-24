import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Banknote, Clock, Shield, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "سيولة فورية | سلفة وكاش من تابي وتمارا ومدفوع | مطر",
  description:
    "صفحة السيولة الرئيسية في مطر تجمع أهم مسارات البحث: سيولة فورية، سلفة، كاش تابي، كاش تمارا، وتحويل الرصيد إلى نقد بخطوات واضحة وروابط تفصيلية لكل خدمة.",
  keywords:
    "سيولة, سيولة فورية, سلفة, كاش, تحويل الرصيد إلى نقد, تسييل الرصيد, كاش تابي, كاش تمارا, سلفة تابي, سلفة تمارا, سيولة بدون تحويل راتب, سيولة بدون بنك, سيولة الرياض, سيولة جدة, سيولة الدمام",
  alternates: {
    canonical: "https://liilsol.com/siyola",
  },
  openGraph: {
    title: "سيولة فورية | سلفة وكاش من تابي وتمارا ومدفوع | مطر",
    description: "تعرف على جميع مسارات السيولة من تابي وتمارا ومدفوع، واختر الصفحة الأنسب لعبارة البحث التي تريدها.",
    url: "https://liilsol.com/siyola",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/siyola#service",
      name: "سيولة فورية من تابي وتمارا ومدفوع",
      description: "صفحة رئيسية تجمع خدمات السيولة والسلفة والكاش وتحويل الرصيد إلى نقد مع توجيه واضح لكل مسار بحث.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["سيولة", "سلفة", "كاش تابي", "كاش تمارا", "تحويل الرصيد إلى نقد"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "السيولة", item: "https://liilsol.com/siyola" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما الصفحة المناسبة إذا كنت أبحث عن سيولة تابي أو كاش تابي؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "إذا كان بحثك متعلقاً بتابي فستجد في هذه الصفحة روابط مباشرة إلى سيولة تابي وكاش تابي وتسييل تابي وتحويل تابي إلى كاش حتى تصل إلى المسار الأنسب لعبارة البحث التي تستخدمها."
          }
        },
        {
          "@type": "Question",
          name: "هل توجد صفحات منفصلة لتمارا والسلفة والسيولة بدون بنك؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، هذه الصفحة الرئيسية تربطك بصفحات متخصصة مثل كاش تمارا وسلفة تمارا والسيولة بدون بنك والسيولة بدون تحويل راتب حتى يحصل كل زائر على المحتوى الأقرب لنيته البحثية."
          }
        }
      ]
    }
  ]
}

export default function SiyolaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                هل تحتاج <strong className="text-foreground">سيولة فورية</strong> أو تبحث عن <strong className="text-foreground">سلفة</strong> أو <strong className="text-foreground">كاش من تابي وتمارا</strong>؟ هذه الصفحة الرئيسية تجمع لك كل المسارات، ثم توجهك إلى الصفحة الأدق بحسب عبارة البحث التي تريدها وبحسب التطبيق المناسب لك.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039">
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
                  <p className="text-sm text-muted-foreground mb-3">تغطي نيات بحث مثل: سيولة تابي، كاش تابي، سلفة تابي، وتحويل رصيد تابي إلى نقد.</p>
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
                  <p className="text-sm text-muted-foreground mb-3">تغطي نيات بحث مثل: كاش تمارا، سيولة تمارا، سلفة تمارا، وتحويل رصيد تمارا إلى نقد.</p>
                  <span className="text-accent text-sm font-medium flex items-center gap-1">
                    اعرف المزيد <ArrowLeft className="w-4 h-4" />
                  </span>
                </Link>

                <div className="p-6 bg-background rounded-2xl border border-border">
                  <div className="h-8 mb-4 flex items-center">
                    <span className="text-xl font-bold text-foreground">مدفوع</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">سيولة مدفوع</h3>
                  <p className="text-sm text-muted-foreground mb-3">مسار إضافي لمن يبحث عن السيولة عبر مدفوع مع شرح منفصل عند التواصل.</p>
                  <span className="text-muted-foreground text-sm">تواصل معنا للتفاصيل</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-10">
                كيف نوزّع <span className="text-primary">الكلمات المفتاحية</span> بدون حشو؟
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/siyola-tabby" className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">سيولة تابي</h3>
                  <p className="text-sm text-muted-foreground">للزائر الذي يبحث عن السيولة المباشرة من تابي وخطوات التنفيذ العامة.</p>
                </Link>
                <Link href="/cash-tabby" className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">كاش تابي</h3>
                  <p className="text-sm text-muted-foreground">للزائر الذي يستخدم كلمة كاش تابي ويريد معرفة طريقة الحصول على نقد من الرصيد.</p>
                </Link>
                <Link href="/tasyeel-tabby" className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">تسييل تابي</h3>
                  <p className="text-sm text-muted-foreground">للباحث عن لفظ التسييل وتحويل الرصيد إلى كاش بصيغة مباشرة.</p>
                </Link>
                <Link href="/takyeesh-tabby" className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">تكييش تابي</h3>
                  <p className="text-sm text-muted-foreground">للعبارات العامية الشائعة عند البحث عن تحويل حد تابي إلى نقد.</p>
                </Link>
                <Link href="/salfa-tabby" className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">سلفة تابي</h3>
                  <p className="text-sm text-muted-foreground">لمن يبحث عن مفهوم السلفة على رصيد تابي بصيغة أبسط وأقرب للاستخدام اليومي.</p>
                </Link>
                <Link href="/cash-tamara" className="p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors">
                  <h3 className="font-bold text-foreground mb-2">كاش وتمويل تمارا</h3>
                  <p className="text-sm text-muted-foreground">لجميع صيغ تمارا مثل كاش تمارا وسيولة تمارا وسلفة تمارا وتحويل الرصيد.</p>
                </Link>
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
