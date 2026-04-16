import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Wallet, Clock, Shield, ArrowRightLeft, ChevronDown, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "كاش تابي | طريقة الحصول على كاش من رصيد تابي — مطر",
  description:
    "كاش تابي مع مطر يشرح لك طريقة تحويل الرصيد المتاح في تابي إلى نقد بشكل واضح وسريع، مع توجيه مباشر إلى الحاسبة وواتساب.",
  keywords:
    "كاش تابي, تكييش تابي, تسييل تابي, تحويل رصيد تابي كاش, tabby cash",
  alternates: {
    canonical: "https://liilsol.com/cash-tabby",
  },
  openGraph: {
    title: "كاش تابي | تحويل الرصيد إلى نقد مع مطر",
    description: "صفحة مخصصة لكلمة كاش تابي وتشرح آلية تحويل الرصيد إلى نقد بشكل واضح.",
    url: "https://liilsol.com/cash-tabby",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/cash-tabby#service",
      name: "كاش تابي",
      description: "خدمة مخصصة لشرح وتحويل رصيد تابي إلى كاش عبر آلية واضحة وسريعة.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["كاش تابي", "تكييش تابي", "تسييل تابي"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "كاش تابي", item: "https://liilsol.com/cash-tabby" },
      ],
    },
  ],
}

const highlights = [
  {
    icon: Wallet,
    title: "كاش من الرصيد المتاح",
desc: "إذا كان لديك حد شراء في تابي، يمكن الاستفادة منه للحصول على سيولة نقدية بدلاً من بقائه كرصيد شرائي فقط.",
  },
  {
    icon: ArrowRightLeft,
    title: "شرح واضح للخطوات",
    desc: "نوضح لك آلية التنفيذ من البداية وحتى وصول الصافي إلى حسابك البنكي دون تعقيد.",
  },
  {
    icon: Clock,
    title: "سرعة في الإجراء",
    desc: "المعالجة تتم بسرعة بعد إرسال التفاصيل المطلوبة والتأكيد من طرفك.",
  },
  {
    icon: Shield,
    title: "وضوح في الاتفاق",
    desc: "تتم معرفة الطريقة ونسبة الشراكة قبل البدء حتى تكون كل التفاصيل واضحة لديك.",
  },
]

const faqs = [
  {
    q: "ما المقصود بكاش تابي؟",
    a: "المقصود به الحصول على نقد مقابل الاستفادة من الحد الشرائي المتاح لك في تابي من خلال آلية منظمة وواضحة.",
  },
  {
q: "هل كاش تابي هو نفسه تسييل تابي؟",
    a: "نعم، في الغالب يستخدم العملاء المصطلحين للفكرة نفسها مع اختلاف التسمية فقط.",
  },
  {
    q: "هل توجد أرقام ثابتة للصافي؟",
    a: "لا، ولتفادي عرض أمثلة غير دقيقة يمكنك استخدام الحاسبة أو التواصل معنا مباشرة للحصول على الرقم المناسب لحالتك.",
  },
]

export default function CashTabbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Wallet className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">كاش تابي</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                كاش تابي
                <span className="block text-primary mt-2">حوّل رصيدك إلى نقد</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                هذه الصفحة مخصصة لمن يبحث عن <strong className="text-foreground">كاش تابي</strong> ويريد طريقة واضحة لمعرفة كيف يمكن تحويل الرصيد المتاح إلى نقد فعلي.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/966590360039?text=أبي كاش تابي" target="_blank" rel="noopener noreferrer">
                    اطلب كاش تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">استخدم الحاسبة</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="p-6 bg-background rounded-2xl border border-border">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="font-bold text-xl text-foreground mb-2">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto p-8 bg-card rounded-3xl border border-border text-center">
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">اعرف الصافي بدقة</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                لأن الصافي يختلف حسب المبلغ وعدد الدفعات والمتجر، الأفضل هو استخدام حاسبة السيولة أو التواصل المباشر معنا عبر واتساب بدلاً من الاعتماد على أمثلة عامة.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/#calculator">
                  افتح الحاسبة الآن
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                أسئلة شائعة عن <span className="text-primary">كاش تابي</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-background border border-border rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-foreground list-none">
                      <span>{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180 shrink-0" />
                    </summary>
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
