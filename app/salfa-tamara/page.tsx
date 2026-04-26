import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Shield, Smartphone, Star, ChevronDown, Banknote, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سلفة تمارا | حوّل رصيد تمارا إلى نقد فوري — مطر",
  description:
"سلفة تمارا فورية تصل حسابك البنكي خلال ساعة. إذا كان لديك حد متاح في تمارا فنساعدك على تحويله إلى نقد عبر نظام شراكة واضح مع مطر.",
  keywords:
    "سلفة تمارا, سلفة من تمارا, كاش تمارا, سلفة تمارا فورية, tamara سلفة",
  alternates: {
    canonical: "https://liilsol.com/salfa-tamara",
  },
  openGraph: {
title: "سلفة تمارا | تحويل رصيد تمارا إلى نقد مع مطر",
    description: "حوّل رصيدك في تمارا إلى نقد فوري عبر خطوات واضحة ونظام شراكة منظم مع مطر.",
    url: "https://liilsol.com/salfa-tamara",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://liilsol.com/salfa-tamara#service",
      name: "سلفة تمارا — سلفة فورية من رصيد تمارا",
description: "خدمة تحويل رصيد تمارا إلى سلفة نقدية عبر نظام الشراكة الحلال وبخطوات واضحة قبل التنفيذ.",
      provider: { "@type": "LocalBusiness", "@id": "https://liilsol.com/#business" },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      serviceType: ["سلفة تمارا", "سلفة من تمارا", "كاش تمارا فوري"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "سلفة تمارا", item: "https://liilsol.com/salfa-tamara" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما الفرق بين سلفة تمارا وسلفة تابي؟",
          acceptedAnswer: { "@type": "Answer", text: "الآلية نفسها لكن عبر تطبيق مختلف. تمارا أحياناً توفر حدوداً أعلى من تابي، مما يتيح سلفة أكبر. يمكنك استخدام كلا التطبيقين معاً." },
        },
        {
          "@type": "Question",
          name: "كم الحد الأقصى لسلفة تمارا؟",
          acceptedAnswer: { "@type": "Answer", text: "يعتمد على حدك في تطبيق تمارا. بعض العملاء لديهم حدود تصل إلى 15,000 ريال أو أكثر." },
        },
      ],
    },
  ],
}

const tamaraVsTabby = [
  { feature: "الحد الائتماني", tabby: "يختلف حسب أهلية العميل", tamara: "يختلف حسب أهلية العميل" },
  { feature: "عدد الدفعات", tabby: "بحسب الخطة المتاحة في التطبيق", tamara: "بحسب الخطة المتاحة في التطبيق" },
  { feature: "المتاجر المتاحة", tabby: "تختلف حسب التاجر المعتمد", tamara: "تختلف حسب التاجر المعتمد" },
  { feature: "طريقة الدفع", tabby: "حسب آلية التطبيق والتاجر", tamara: "حسب آلية التطبيق والتاجر" },
]

const steps = [
  { num: "١", title: "تواصل معنا عبر واتساب", desc: "أرسل لنا طلبك مع المبلغ المطلوب." },
  { num: "٢", title: "ادخل المتجر واختر الجهاز", desc: "ادخل اكسترا أو جرير أو نون واختر جهازاً بالمبلغ المناسب." },
  { num: "٣", title: "اختر تمارا كوسيلة دفع", desc: "من صفحة الدفع اختر تمارا، أضف بطاقة بنكية (بدون رصيد)، واضغط ادفع. صوّر الشاشة وأرسلها لنا." },
  { num: "٤", title: "نشتري معك كشركاء", desc: "ندخل كشريك في الشراء ونغطي الدفعة الأولى نيابةً عنك." },
  { num: "٥", title: "تستلم المبلغ في حسابك", desc: "نبيع الجهاز ونحول لك الصافي مباشرة لحسابك البنكي." },
]

const faqs = [
  { q: "ما الفرق بين سلفة تمارا وكاش تمارا؟", a: "هما نفس الخدمة بمسميات مختلفة. في كلتا الحالتين نحول رصيدك في تمارا إلى نقد في حسابك البنكي." },
  { q: "هل سلفة تمارا حلال؟", a: "نعم، نعمل بنظام الشراكة الحلال. نشتري معك الجهاز كشركاء مقابل نسبة شراكة متفق عليها مسبقاً. لا ربا ولا فائدة." },
  { q: "كم عمولة سلفة تمارا؟", a: "تعتمد على المبلغ وعدد الدفعات. استخدم حاسبة السيولة في الصفحة الرئيسية لمعرفة الصافي الدقيق." },
  { q: "هل أقدر آخذ سلفة تمارا وسلفة تابي معاً؟", a: "يعتمد ذلك على حدودك المتاحة في كل تطبيق وحالتك. عند التواصل معنا نوضح لك الخيار المناسب ونحسب الصافي لكل مسار." },
  { q: "هل تمارا مناسبة للمبالغ الأعلى؟", a: "في بعض الحالات يكون الحد المتاح في تمارا أعلى من غيره، لكن ذلك يختلف من عميل لآخر حسب أهلية الحساب." },
  { q: "ما خطوات سلفة تمارا بالتفصيل؟", a: "ادخل المتجر، اختر جهازاً، اختر تمارا كوسيلة دفع، أضف بطاقة بنكية بدون رصيد واضغط ادفع، صوّر الشاشة وأرسلها لنا على واتساب. نكمل الباقي ونحول لك الصافي." },
]

export default function SalfaTamaraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-3" aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">الرئيسية</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">سلفة تمارا</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">حدود أعلى</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-foreground">
                سلفة تمارا — حدود أعلى
                <span className="block text-primary mt-2">سلفة أكبر تصلك خلال ساعة ⚡</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                تحتاج <strong className="text-foreground">سلفة من تمارا</strong>؟ تمارا توفر حدوداً ائتمانية أعلى أحياناً من تابي، مما يعني{" "}
                <strong className="text-foreground">سلفة أكبر لك</strong>. مطر يحول رصيدك في تمارا إلى نقد حقيقي يصل حسابك البنكي.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039?text=أبي سلفة تمارا" target="_blank" rel="noopener noreferrer">
                    اطلب سلفة تمارا الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب الصافي</Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">حدود أعلى</p>
                    <p className="text-sm text-muted-foreground">تصل 15,000+ ريال</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 text-accent shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">ساعة واحدة</p>
                    <p className="text-sm text-muted-foreground">من التأكيد للتحويل</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <Banknote className="w-8 h-8 text-green-500 shrink-0" />
                  <div className="text-start">
                    <p className="font-bold text-foreground">6 دفعات</p>
                    <p className="text-sm text-muted-foreground">أقساط أصغر وأريح</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ما هي سلفة تمارا */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                ما هي <span className="text-primary">سلفة تمارا</span>؟
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground">سلفة تمارا</strong> هي خدمة تتيح لك تحويل حدك الائتماني في تطبيق تمارا إلى نقد حقيقي. تمارا من أشهر تطبيقات «اشترِ الآن وادفع لاحقاً» في السعودية، وتتميز بحدود ائتمانية أعلى أحياناً من تابي.
                </p>
                <p>
                  في <strong className="text-foreground">مطر</strong>، نعمل بنظام الشراكة الحلال: نشتري معك جهازاً ذكياً عبر تمارا، ونغطي الدفعة الأولى نيابةً عنك. بعدها نبيع الجهاز ونحول لك الصافي مباشرة لحسابك البنكي.
                </p>
                <p>
                  ما يميز تمارا هو إمكانية التقسيط على <strong className="text-foreground">6 دفعات</strong> بدلاً من 4، مما يجعل الأقساط أصغر وأريح. كما أن بعض المستخدمين يحصلون على حدود تصل إلى <strong className="text-foreground">15,000 ريال أو أكثر</strong>.
                </p>
                <p>
                  كثير من عملائنا يجمعون بين سلفة تابي وسلفة تمارا للحصول على أقصى مبلغ ممكن. الخدمة متاحة في جميع مدن المملكة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* مقارنة تمارا vs تابي */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
                <span className="text-primary">تمارا</span> مقابل <span className="text-primary">تابي</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10">أيهما أفضل لك؟ المقارنة تساعدك تقرر</p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 text-start font-bold text-foreground">المعيار</th>
                      <th className="p-4 text-center font-bold text-foreground">تابي</th>
                      <th className="p-4 text-center font-bold text-primary">تمارا</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tamaraVsTabby.map((row, i) => (
                      <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.tabby}</td>
                        <td className="p-4 text-center text-primary font-medium">{row.tamara}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">💡 نصيحة: استخدم كلا التطبيقين معاً للحصول على أقصى سلفة ممكنة</p>
            </div>
          </div>
        </section>

        {/* الخطوات */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                خطوات الحصول على <span className="text-primary">سلفة تمارا</span>
              </h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary text-primary font-extrabold text-xl flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                أسئلة شائعة عن <span className="text-primary">سلفة تمارا</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-card border border-border rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-foreground hover:bg-primary/5 transition-colors list-none">
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

        {/* روابط داخلية */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-center mb-6 text-foreground">خدمات ذات صلة</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { href: "/salfa-tabby", label: "سلفة تابي" },
                  { href: "/cash-tamara", label: "كاش تمارا" },
                  { href: "/siyola-tabby", label: "سيولة تابي" },
                  { href: "/tasyeel-tabby", label: "تسييل تابي" },
                  { href: "/siyola", label: "سيولة فورية" },
                  { href: "/check-limit", label: "افحص حدك" },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="p-4 bg-background rounded-xl border border-border hover:border-primary/30 text-center font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/15 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">
                جاهز تحصل على <span className="text-primary">سلفة تمارا</span>؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                تواصل معنا الآن عبر واتساب. نساعدك تحصل على أعلى سلفة ممكنة من تمارا.
              </p>
              <Button size="lg" className="gap-3 text-xl px-10 py-6 bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 rounded-2xl" asChild>
                <a href="https://wa.me/966503367637?text=أبي سلفة تمارا" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  اطلب سلفة تمارا الآن
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
