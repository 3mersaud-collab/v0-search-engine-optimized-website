import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Clock, Shield, MapPin, Star, ChevronDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "سيولة تابي المدينة المنورة | كاش تمارا المدينة — مطر",
  description: "سيولة تابي المدينة المنورة وكاش تمارا المدينة — نحوّل رصيدك إلى كاش في حسابك البنكي خلال ساعة. خدمة مطر لأهل المدينة بدون تحويل راتب.",
  keywords: "سيولة تابي المدينة المنورة, كاش تمارا المدينة, سيولة في المدينة, سلفة المدينة, تسييل تابي المدينة المنورة, كاش تابي المدينة",
  alternates: {
    canonical: "https://liilsol.com/siyola-madinah",
  },
  openGraph: {
    title: "سيولة تابي المدينة المنورة | كاش تمارا المدينة — مطر",
    description: "سيولة تابي المدينة المنورة وكاش تمارا المدينة — نحوّل رصيدك إلى كاش في حسابك البنكي خلال ساعة. خدمة مطر لأهل المدينة بدون تحويل راتب.",
    url: "https://liilsol.com/siyola-madinah",
    locale: "ar_SA",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://liilsol.com/siyola-madinah#local",
      name: "مطر — سيولة تابي وكاش تمارا المدينة المنورة",
      description: "سيولة تابي المدينة المنورة وكاش تمارا المدينة — نحوّل رصيدك إلى كاش في حسابك البنكي خلال ساعة. خدمة مطر لأهل المدينة بدون تحويل راتب.",
      url: "https://liilsol.com/siyola-madinah",
      telephone: "+966590360039",
      address: {
        "@type": "PostalAddress",
        addressLocality: "المدينة المنورة",
        addressRegion: "منطقة المدينة المنورة",
        addressCountry: "SA",
      },
      areaServed: {
        "@type": "City",
        name: "المدينة المنورة",
      },
      serviceType: ["سيولة تابي", "كاش تمارا", "سيولة في المدينة"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://liilsol.com" },
        { "@type": "ListItem", position: 2, name: "سيولة المدينة", item: "https://liilsol.com/siyola-madinah" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "هل خدمة مطر متاحة في المدينة المنورة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، خدمة مطر متاحة لجميع مناطق المملكة بما فيها المدينة المنورة. العملية تتم عبر المتاجر الإلكترونية ولا تحتاج حضوراً.",
          },
        },
        {
          "@type": "Question",
          name: "كم يستغرق التحويل لأهل المدينة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "التحويل يتم خلال ساعة فقط بغض النظر عن المدينة — العملية كلها إلكترونية.",
          },
        },
      ],
    },
  ],
}

const steps = [
  {
    num: "١",
    title: "احسب المبلغ في الحاسبة",
    desc: "ادخل موقع مطر واستخدم الحاسبة لتحديد مبلغ الشراء والكاش الصافي الذي ستستلمه.",
  },
  {
    num: "٢",
    title: "افتح متجر نون أو اكسترا",
    desc: "أضف منتجات إلكترونية بنفس مبلغ الشراء من الحاسبة.",
  },
  {
    num: "٣",
    title: "اختر تابي أو تمارا ثم صوّر الشاشة",
    desc: "اختر وسيلة الدفع المطلوبة. بعد ظهور صفحة الأقساط أو التأكيد، صوّر الشاشة وأرسلها لنا.",
  },
  {
    num: "٤",
    title: "استلم كاشك خلال ساعة",
    desc: "نتمم الجزء الباقي ونحول لك المبلغ الصافي مباشرة لحسابك البنكي.",
  },
]

const features = [
  { icon: Clock, title: "تحويل خلال ساعة", desc: "من إرسال الشاشة حتى وصول الكاش لحسابك" },
  { icon: Shield, title: "لا نطلب بيانات حساسة", desc: "لا كلمة مرور، لا OTP، لا تسجيل دخول" },
  { icon: MapPin, title: "متاح في المدينة المنورة", desc: "الخدمة إلكترونية بالكامل — تنفذ من أي مكان" },
  { icon: Star, title: "أسعار شفافة", desc: "تعرف المبلغ الصافي من الحاسبة قبل البدء" },
]

export default function SiyolaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
              <ArrowLeft className="h-3 w-3" />
              <span className="text-foreground">سيولة المدينة</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">المدينة المنورة</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                سيولة تابي المدينة
                <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-2">
                  وكاش تمارا المدينة — تحويل خلال ساعة
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                نحوّل رصيدك في تابي أو تمارا إلى كاش نقدي في حسابك البنكي خلال ساعة. لا تحتاج تحويل راتب — فقط حد متاح في التطبيق.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                    ابدأ الآن على واتساب
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/siyola">احسب مبلغك أولاً</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* الخطوات */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              خطوات سيولة تابي المدينة مع مطر
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step) => (
                <div key={step.num} className="rounded-xl border bg-background p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* المميزات */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-10">لماذا مطر؟</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 p-5 rounded-xl border">
                  <div className="p-2 rounded-lg bg-primary/10 h-fit">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">أسئلة شائعة — سيولة المدينة</h2>
            <div className="space-y-4">
              {[
                {
                  q: `هل خدمة مطر متاحة في المدينة المنورة؟`,
                  a: `نعم، خدمة مطر متاحة لجميع مناطق المملكة بما فيها المدينة المنورة. العملية تتم عبر المتاجر الإلكترونية ولا تحتاج حضوراً أو توصيلاً.`,
                },
                {
                  q: `كم يستغرق تحويل سيولة تابي المدينة؟`,
                  a: `التحويل يتم خلال ساعة فقط من إرسالك للشاشة على واتساب، بغض النظر عن المدينة.`,
                },
                {
                  q: `هل أحتاج تحويل راتب للحصول على سيولة تابي المدينة؟`,
                  a: `لا. تابي وتمارا لا يشترطان تحويل الراتب. الشرط الوحيد هو وجود حد ائتماني متاح في التطبيق.`,
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl border bg-background p-5">
                  <h3 className="font-semibold mb-2 flex items-start gap-2">
                    <ChevronDown className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm pr-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* روابط مرتبطة */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-base font-semibold mb-4">روابط مرتبطة</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/siyola-tabby", label: "سيولة تابي" },
                { href: "/cash-tamara", label: "كاش تمارا" },
                { href: "/siyola-riyadh", label: "سيولة الرياض" },
                { href: "/siyola-jeddah", label: "سيولة جدة" },
                { href: "/siyola-dammam", label: "سيولة الدمام" },
                { href: "/siyola", label: "خدمات السيولة الكاملة" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary border border-primary/20 rounded-lg px-3 py-1.5 bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">ابدأ سيولتك من المدينة المنورة الآن</h2>
            <p className="text-muted-foreground mb-8">
              أرسل لنا مبلغ حدك في تابي أو تمارا وسنحسب الكاش الصافي ونبدأ فوراً.
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
