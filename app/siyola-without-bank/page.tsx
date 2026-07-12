import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, Clock, Shield, FileText, ChevronDown, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة بدون بنك | بديل عملي عن تعقيدات البنوك — مطر",
  description:
"سيولة بدون بنك مع مطر لمن يبحث عن حل أسرع وأبسط من الإجراءات البنكية المعتادة، عبر الاستفادة من الرصيد المتاح في تابي أو تمارا وتحويله إلى نقد.",
  keywords:
    "سيولة بدون بنك, سيولة بدون تحويل راتب, سيولة بدون كفيل, تمويل بدون بنك, سيولة فورية",
  alternates: {
    canonical: "https://liilsol.com/siyola-without-bank",
  },
  openGraph: {
    title: "سيولة بدون بنك | حل أبسط وأسرع مع مطر",
    description: "صفحة مخصصة لكلمة سيولة بدون بنك وتوضح الفكرة والخطوات بشكل واضح.",
    url: "https://liilsol.com/siyola-without-bank",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/siyola-without-bank#service",
      name: "سيولة بدون بنك",
      description: "خدمة تشرح طريقة الحصول على سيولة بدون بنك عبر تحويل الرصيد المتاح في تابي أو تمارا إلى نقد.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["سيولة بدون بنك", "سيولة بدون تحويل راتب", "سيولة بدون كفيل"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "سيولة بدون بنك", item: "https://liilsol.com/siyola-without-bank" },
      ],
    },
  ],
}

const points = [
  {
    icon: Building2,
    title: "بديل عن الإجراءات البنكية الطويلة",
    desc: "بعض العملاء لا يريدون الدخول في مواعيد فروع أو معاملات طويلة للحصول على سيولة عاجلة.",
  },
  {
    icon: FileText,
    title: "متطلبات أبسط",
    desc: "الفكرة هنا تعتمد على الاستفادة من الرصيد الموجود لديك في تابي أو تمارا بدلاً من مسار التمويل البنكي التقليدي.",
  },
  {
    icon: Clock,
    title: "سرعة أوضح في التنفيذ",
    desc: "بعد معرفة الحالة المناسبة لك، تتم المتابعة مباشرة عبر واتساب دون تعقيد غير ضروري.",
  },
  {
    icon: Shield,
    title: "وضوح في التفاصيل",
    desc: "يتم شرح الخطوات وطريقة العمل ونسبة الشراكة من البداية قبل أي إجراء.",
  },
]

const faqs = [
  {
    q: "ما معنى سيولة بدون بنك؟",
    a: "المقصود بها الحصول على سيولة نقدية دون المرور بإجراءات البنوك التقليدية، وذلك عبر الاستفادة من الرصيد المتاح لك في تابي أو تمارا.",
  },
  {
q: "هل سيولة بدون بنك تعني عدم الحاجة لتحويل راتب؟",
    a: "في هذا النوع من الخدمة يكون التركيز على الرصيد المتاح في التطبيق، وليس على متطلبات التمويل البنكي التقليدية مثل تحويل الراتب.",
  },
  {
    q: "كيف أعرف إن كانت الخدمة مناسبة لي؟",
    a: "يمكنك التواصل معنا عبر واتساب، وسنوضح لك إذا كانت حالتك مناسبة، أو استخدام الحاسبة لمعرفة الصافي المتوقع بشكل أدق.",
  },
]

export default function SiyolaWithoutBankPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">سيولة بدون بنك</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سيولة بدون بنك
                <span className="block text-primary mt-2">وبطريقة أبسط</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                إذا كنت تبحث عن <strong className="text-foreground">سيولة بدون بنك</strong> لأنك لا تريد الإجراءات البنكية التقليدية،
                فمطر يوضح لك المسار المناسب للاستفادة من رصيدك في تابي أو تمارا وتحويله إلى نقد.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/966503367637?text=أبي سيولة بدون بنك" target="_blank" rel="noopener noreferrer">
                    اطلب سيولة الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الصافي</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {points.map((item, index) => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">اعرف المناسب لحالتك</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                حتى تتجنب أي أمثلة عامة غير دقيقة، استخدم حاسبة السيولة أو تواصل معنا مباشرة لنوضح لك المسار المناسب حسب الحد المتاح لديك.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href="https://wa.me/966503367637?text=أبي تفاصيل سيولة بدون بنك" target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                أسئلة شائعة عن <span className="text-primary">سيولة بدون بنك</span>
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
