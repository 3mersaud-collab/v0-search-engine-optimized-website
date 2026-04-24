import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة تابي أم سلفة تابي — ما الفرق؟ | مطر 2026",
  description:
    "شرح واضح للفرق بين سيولة تابي وسلفة تابي: هل هما نفس الشيء؟ ما الذي يبحث عنه كل مصطلح؟ وكيف تحصل على الكاش بأفضل طريقة.",
  keywords:
    "سيولة تابي أم سلفة تابي, الفرق بين سيولة وسلفة, سلفة تابي مقابل سيولة تابي, سيولة بدون بنك أم سيولة بدون راتب, مقارنة خدمات السيولة",
  alternates: {
    canonical: "https://liilsol.com/compare-siyola-salfa",
  },
  openGraph: {
    title: "سيولة تابي أم سلفة تابي — الفرق الحقيقي | مطر",
    description:
      "مقارنة بين مصطلحات السيولة والسلفة في تابي وتمارا. تعرف على الفرق وأيهما يناسبك.",
    url: "https://liilsol.com/compare-siyola-salfa",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://liilsol.com/compare-siyola-salfa",
      name: "سيولة تابي أم سلفة تابي — ما الفرق؟",
      description:
        "مقارنة مباشرة بين مفهوم السيولة والسلفة في تابي وتمارا مع توضيح الفرق العملي.",
      url: "https://liilsol.com/compare-siyola-salfa",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما الفرق بين سيولة تابي وسلفة تابي؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "كلاهما يؤدي نفس الغرض: تحويل رصيد تابي إلى كاش نقدي. الفرق في المصطلح فقط — 'سيولة' مصطلح مالي عام، و'سلفة' مصطلح عامي يعني نفس الشيء.",
          },
        },
        {
          "@type": "Question",
          name: "هل سيولة بدون بنك تختلف عن سيولة بدون تحويل راتب؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم. سيولة بدون بنك تعني الحصول على كاش دون الحاجة لحساب بنكي. سيولة بدون تحويل راتب تعني عدم اشتراط تحويل الراتب — وكلاهما متاح مع تابي وتمارا.",
          },
        },
      ],
    },
  ],
}

export default function CompareSiyolaSalfaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
              <ArrowLeft className="h-3 w-3" />
              <span className="text-foreground">سيولة أم سلفة</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                توضيح المصطلحات
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                سيولة تابي أم سلفة تابي — ما الفرق الحقيقي؟
              </h1>
              <p className="text-lg text-muted-foreground">
                مصطلحات كثيرة لنفس الخدمة — هنا نوضح الفروق الفعلية والمصطلحات التي تختلف في المعنى.
              </p>
            </div>
          </div>
        </section>

        {/* خريطة المصطلحات */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">خريطة المصطلحات</h2>

            {/* المصطلحات المتطابقة */}
            <div className="rounded-xl border bg-green-50 dark:bg-green-950/20 p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-green-700 dark:text-green-400">
                ✅ مصطلحات تعني نفس الشيء تماماً
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right p-3 font-semibold">المصطلح</th>
                      <th className="text-right p-3 font-semibold">ما يعنيه عملياً</th>
                      <th className="text-right p-3 font-semibold">من يستخدمه</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { term: "سيولة تابي", meaning: "تحويل رصيد تابي لكاش في حسابك البنكي", who: "مصطلح مالي عام" },
                      { term: "سلفة تابي", meaning: "نفس العملية بمصطلح عامي", who: "خليجي شائع" },
                      { term: "كاش تابي", meaning: "نفس العملية — التركيز على النقد", who: "من يريد النقود مباشرة" },
                      { term: "تسييل تابي", meaning: "نفس العملية بمصطلح مالي تقني", who: "من يعرف مصطلح التسييل" },
                      { term: "تكييش تابي", meaning: "نفس العملية بمصطلح عامي آخر", who: "خليجي شائع أيضاً" },
                    ].map((row) => (
                      <tr key={row.term}>
                        <td className="p-3 font-medium">{row.term}</td>
                        <td className="p-3 text-muted-foreground">{row.meaning}</td>
                        <td className="p-3 text-muted-foreground">{row.who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* المصطلحات المختلفة */}
            <div className="rounded-xl border bg-amber-50 dark:bg-amber-950/20 p-6">
              <h3 className="font-bold text-lg mb-4 text-amber-700 dark:text-amber-400">
                ⚠️ مصطلحات تختلف في المعنى الفعلي
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right p-3 font-semibold">المصطلح</th>
                      <th className="text-right p-3 font-semibold">ما يعنيه فعلاً</th>
                      <th className="text-right p-3 font-semibold">الفرق عن السيولة العادية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      {
                        term: "سيولة بدون بنك",
                        meaning: "كاش بدون الحاجة لحساب بنكي",
                        diff: "يختلف — بعض الحالات لا تحتاج إيداع في بنك",
                      },
                      {
                        term: "سيولة بدون تحويل راتب",
                        meaning: "لا يشترط ربط الراتب",
                        diff: "يختلف — يخص من لا يريد شرط تحويل الراتب",
                      },
                    ].map((row) => (
                      <tr key={row.term}>
                        <td className="p-3 font-medium">{row.term}</td>
                        <td className="p-3 text-muted-foreground">{row.meaning}</td>
                        <td className="p-3 text-muted-foreground">{row.diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* شرح تفصيلي */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">

            <div className="rounded-xl border bg-background p-6">
              <h2 className="text-xl font-bold mb-3">سيولة بدون بنك — ما المقصود؟</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                يقصد بها الحصول على كاش دون اشتراط وجود حساب بنكي نشط. مع تابي وتمارا، عادةً تحتاج حساباً لإيداع المبلغ، لكن في بعض الحالات يمكن ترتيب طريقة استلام بديلة. تواصل معنا لتوضيح خيارك.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-6">
              <h2 className="text-xl font-bold mb-3">سيولة بدون تحويل راتب — من يستفيد؟</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                تابي وتمارا لا يشترطان تحويل الراتب للحصول على السيولة. الشرط الوحيد هو وجود حد ائتماني متاح في التطبيق. هذا يجعل السيولة متاحة للعاطلين والطلاب وأصحاب الأعمال الحرة.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-6">
              <h2 className="text-xl font-bold mb-3">خلاصة: متى تفرق المصطلحات؟</h2>
              <div className="space-y-2 text-sm">
                {[
                  { case: "تريد كاش من رصيد تابي", answer: "سيولة / سلفة / كاش / تسييل — كلها نفس الخدمة" },
                  { case: "لا تريد شرط تحويل الراتب", answer: "ابحث عن 'سيولة بدون تحويل راتب'" },
                  { case: "ليس عندك حساب بنكي", answer: "ابحث عن 'سيولة بدون بنك' وتواصل معنا" },
                ].map((item) => (
                  <div key={item.case} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">{item.case}: </span>
                      <span className="text-muted-foreground">{item.answer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* روابط مرتبطة */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-lg font-semibold mb-4">روابط مرتبطة</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/siyola-tabby", label: "سيولة تابي" },
                { href: "/salfa-tabby", label: "سلفة تابي" },
                { href: "/siyola-without-salary", label: "سيولة بدون تحويل راتب" },
                { href: "/siyola-without-bank", label: "سيولة بدون بنك" },
                { href: "/articles/cash-tabby-vs-tasyeel-tabby", label: "كاش تابي vs تسييل تابي" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline border border-primary/20 rounded-lg px-3 py-1.5 bg-primary/5 transition-colors hover:bg-primary/10"
                >
                  <ArrowRight className="h-3 w-3" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">عندك سؤال عن نوع السيولة المناسب لك؟</h2>
            <p className="text-muted-foreground mb-8">
              أرسل لنا على واتساب وسنحدد لك الخيار الأنسب لوضعك خلال دقائق.
            </p>
            <Button asChild size="lg">
              <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                تواصل على واتساب
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
