import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تابي أم تمارا للسيولة؟ — مقارنة شاملة بالأرقام 2026",
  description:
    "مقارنة مباشرة بين سيولة تابي وكاش تمارا: الخطوات، الرسوم، الرصيد المطلوب، وأيهما يعطيك كاش أكثر. نتيجة واضحة بدون تحيز.",
  keywords:
    "تابي أم تمارا, مقارنة تابي وتمارا, سيولة تابي أم كاش تمارا, الفرق بين تابي وتمارا, أيهما أفضل تابي أم تمارا, كاش تابي مقابل كاش تمارا",
  alternates: {
    canonical: "https://liilsol.com/compare-tabby-tamara",
  },
  openGraph: {
    title: "تابي أم تمارا للسيولة؟ — مقارنة شاملة 2026 | مطر",
    description:
      "مقارنة حقيقية بالأرقام بين سيولة تابي وكاش تمارا: الخطوات والرسوم والفروق العملية.",
    url: "https://liilsol.com/compare-tabby-tamara",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://liilsol.com/compare-tabby-tamara",
      name: "تابي أم تمارا للسيولة — مقارنة شاملة 2026",
      description:
        "مقارنة بين سيولة تابي وكاش تمارا بالأرقام الحقيقية: الرسوم، الخطوات، ومن يعطيك كاش أكثر.",
      url: "https://liilsol.com/compare-tabby-tamara",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
          { "@type": "ListItem", position: 2, name: "مقارنة تابي وتمارا", item: "https://liilsol.com/compare-tabby-tamara" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "أيهما أفضل للسيولة تابي أم تمارا؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "تابي أسهل في الخطوات (لا يطلب بطاقة بنكية)، بينما تمارا قد تعطي حداً أعلى لبعض العملاء. الأفضل يعتمد على حدك المتاح في كل تطبيق.",
          },
        },
        {
          "@type": "Question",
          name: "هل رسوم تابي وتمارا متساوية؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "الرسوم متقاربة: فرق بيع 10-15% + رسوم إدارية 10% + دفعة أولى 25%. الفرق بسيط جداً بين التطبيقين.",
          },
        },
        {
          "@type": "Question",
          name: "ما الخطوة الإضافية في تمارا عن تابي؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "تمارا تطلب إضافة بطاقة بنكية بدون رصيد قبل إتمام الطلب. تابي لا يطلب بطاقة أصلاً.",
          },
        },
      ],
    },
  ],
}

export default function CompareTabbyTamaraPage() {
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
              <span className="text-foreground">مقارنة تابي وتمارا</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                مقارنة موضوعية
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                تابي أم تمارا للسيولة؟
              </h1>
              <p className="text-lg text-muted-foreground">
                مقارنة مباشرة بالأرقام الحقيقية — خطوات، رسوم، وأيهما يناسب وضعك.
              </p>
            </div>
          </div>
        </section>

        {/* جدول المقارنة السريعة */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">جدول المقارنة السريعة</h2>
            <div className="overflow-x-auto rounded-xl border bg-background">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-right p-4 font-semibold">المعيار</th>
                    <th className="text-center p-4 font-semibold text-primary">تابي</th>
                    <th className="text-center p-4 font-semibold text-accent-foreground">تمارا</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 font-medium">عدد الخطوات</td>
                    <td className="p-4 text-center">3 خطوات</td>
                    <td className="p-4 text-center">4 خطوات</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium">هل يطلب بطاقة بنكية؟</td>
                    <td className="p-4 text-center">
                      <span className="flex items-center justify-center gap-1 text-green-600">
                        <XCircle className="h-4 w-4" /> لا
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="flex items-center justify-center gap-1 text-amber-600">
                        <CheckCircle2 className="h-4 w-4" /> نعم (بدون رصيد)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">فرق البيع</td>
                    <td className="p-4 text-center">10 – 15%</td>
                    <td className="p-4 text-center">10 – 15%</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium">الرسوم الإدارية</td>
                    <td className="p-4 text-center">10%</td>
                    <td className="p-4 text-center">10%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">الدفعة الأولى</td>
                    <td className="p-4 text-center">25%</td>
                    <td className="p-4 text-center">25%</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium">وقت التنفيذ مع مطر</td>
                    <td className="p-4 text-center">ساعة</td>
                    <td className="p-4 text-center">ساعة</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">المتاجر المتاحة</td>
                    <td className="p-4 text-center">نون، اكسترا</td>
                    <td className="p-4 text-center">نون، اكسترا</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-medium">صعوبة الخطوات</td>
                    <td className="p-4 text-center">
                      <span className="text-green-600 font-medium">أسهل</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-amber-600 font-medium">خطوة إضافية</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* مثال حسابي مقارن */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">مثال بالأرقام: 10,000 ريال</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* تابي */}
              <div className="rounded-xl border p-6 bg-primary/5">
                <h3 className="text-xl font-bold mb-4 text-primary">كاش تابي</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>مبلغ الشراء</span><span className="font-medium">10,000 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>فرق البيع (12%)</span><span>−1,200 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>مبلغ البيع</span><span>8,800 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>الدفعة الأولى (25%)</span><span>−2,500 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>الرسوم الإدارية (10%)</span><span>−1,000 ريال</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-base">
                    <span>تستلم</span><span className="text-primary">5,300 ريال</span>
                  </div>
                </div>
              </div>
              {/* تمارا */}
              <div className="rounded-xl border p-6 bg-muted/30">
                <h3 className="text-xl font-bold mb-4">كاش تمارا</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>مبلغ الشراء</span><span className="font-medium">10,000 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>فرق البيع (12%)</span><span>−1,200 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>مبلغ البيع</span><span>8,800 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>الدفعة الأولى (25%)</span><span>−2,500 ريال</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>الرسوم الإدارية (10%)</span><span>−1,000 ريال</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-base">
                    <span>تستلم</span><span>5,300 ريال</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              الرسوم متساوية تقريباً — الفرق الوحيد في سهولة الخطوات وليس في المبلغ.
            </p>
          </div>
        </section>

        {/* متى تختار كل واحد */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">متى تختار كل تطبيق؟</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border bg-background p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">اختر تابي إذا…</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "تريد أبسط خطوات ممكنة",
                    "ليس عندك بطاقة بنكية جاهزة",
                    "تجربتك الأولى مع السيولة",
                    "تريد سرعة أكبر في التنفيذ",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border bg-background p-6">
                <h3 className="font-bold text-lg mb-4">اختر تمارا إذا…</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "حدك في تمارا أعلى من تابي",
                    "تابي غير متاح لك حالياً",
                    "عندك بطاقة بنكية فارغة جاهزة",
                    "سبق لك التعامل مع تمارا",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">أسئلة شائعة</h2>
            <div className="space-y-4">
              {[
                {
                  q: "هل يمكن أستخدم تابي وتمارا معاً في نفس الوقت؟",
                  a: "نعم. يمكنك طلب سيولة من تابي وسيولة من تمارا في نفس الوقت إذا كان عندك حد في كليهما — شرط أن تكون قادراً على سداد الأقساط.",
                },
                {
                  q: "أيهما أسرع في التنفيذ؟",
                  a: "كلاهما ينفذ خلال ساعة مع مطر. تابي أسرع قليلاً في الخطوات لأنه لا يطلب بطاقة بنكية.",
                },
                {
                  q: "هل الرسوم نفسها دائماً؟",
                  a: "الرسوم متقاربة جداً. الفرق البسيط يعتمد على المتجر والمنتج المختار.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl border p-5">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* روابط مرتبطة */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-lg font-semibold mb-4">روابط مرتبطة</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/siyola-tabby", label: "سيولة تابي" },
                { href: "/cash-tabby", label: "كاش تابي" },
                { href: "/cash-tamara", label: "كاش تمارا" },
                { href: "/salfa-tamara", label: "سلفة تمارا" },
                { href: "/articles/tabby-vs-tamara", label: "مقال: تابي أم تمارا" },
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
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">جاهز تبدأ؟</h2>
            <p className="text-muted-foreground mb-8">
              أرسل لنا مبلغ حدك في تابي أو تمارا وسنحسب لك الكاش الصافي فوراً.
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
