import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Shield,
  Smartphone,
  Banknote,
  MapPin,
  Store,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "سيولة تابي | كاش تابي وتحويل الرصيد إلى نقد خلال ساعة",
  description:
    "احصل على سيولة تابي وكاش من رصيدك خلال ساعة عبر نظام شراكة واضح. تعرف على الخطوات وحساب الصافي قبل التنفيذ، والخدمة متاحة في الرياض وجدة والدمام وبقية المناطق.",
  keywords:
    "سيولة تابي, كاش تابي, سلفة تابي, تحويل رصيد تابي, كيف احول رصيد تابي الى كاش, سيولة تابي بدون تحويل راتب, تسييل تابي, tabby cash",
  alternates: {
    canonical: "https://liilsol.com/siyola-tabby",
  },
  openGraph: {
    title: "سيولة تابي | كاش تابي | سلفة تابي - تحويل خلال ساعة",
    description:
      "احصل على كاش من رصيد تابي خلال ساعة فقط. بدون تحويل راتب، بدون OTP. خدمة مطر للسيولة في الرياض وجدة والدمام.",
    url: "https://liilsol.com/siyola-tabby",
    siteName: "مطر",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سيولة تابي | كاش تابي - مطر",
    description: "احصل على كاش من رصيد تابي خلال ساعة. بدون تحويل راتب.",
  },
}

// ─── Schemas ─────────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما هي سيولة تابي وكيف تعمل؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "سيولة تابي هي خدمة نقدم فيها شراكة معك عبر منصة تابي للتقسيط. ندخل معك كشركاء في شراء الجهاز، نتكفل بالدفعة الأولى (25%)، ثم نبيع الجهاز ونحوّل لك صافي المبلغ في حسابك البنكي خلال ساعة.",
      },
    },
    {
      "@type": "Question",
      name: "كم يستغرق الحصول على كاش تابي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ساعة واحدة فقط من وقت إرسال صورة الشاشة إلى التحويل الكامل لحسابك البنكي.",
      },
    },
    {
      "@type": "Question",
      name: "كيف أحوّل رصيد تابي إلى كاش؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تواصل معنا على واتساب، ادخل نون أو اكسترا أو جرير، أضف منتجًا باستخدام تابي كوسيلة دفع، صوّر شاشة تقسيم الدفعات وأرسلها لنا. نحن نكمل الباقي ونحوّل لك الصافي خلال ساعة.",
      },
    },
    {
      "@type": "Question",
      name: "هل سيولة تابي بدون تحويل راتب ممكنة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم تمامًا. سيولة تابي لا تشترط تحويل الراتب على الإطلاق. تحتاج فقط أن يكون لديك حد متاح في تطبيق تابي.",
      },
    },
    {
      "@type": "Question",
      name: "ما هو الحد الأدنى والأقصى لسيولة تابي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الحد الأدنى 1000 ريال، والحد الأقصى حسب حدك المتاح في تطبيق تابي.",
      },
    },
    {
      "@type": "Question",
      name: "أين يمكنني استخدام تابي للحصول على السيولة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تابي متواجد في متجر اكسترا، متجر جرير، ومتجر نون. يمكنك استخدام أي منها.",
      },
    },
    {
      "@type": "Question",
      name: "هل سيولة تابي آمنة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، التنفيذ يتم بخطوات واضحة ومن جهازك أنت، ونوضح لك ما نحتاجه بالضبط قبل البدء دون طلب بيانات دخول غير لازمة.",
      },
    },
    {
      "@type": "Question",
      name: "كم تبلغ رسوم سيولة تابي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تختلف نسبة الصافي بحسب قيمة الطلب وطريقة التنفيذ. لمعرفة الرقم الأدق استخدم الحاسبة أو تواصل معنا مباشرة قبل إكمال الطلب.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "الرئيسية",
      item: "https://liilsol.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "سيولة تابي",
      item: "https://liilsol.com/siyola-tabby",
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "سيولة تابي - مطر",
  description:
    "خدمة تحويل رصيد تابي إلى كاش نقدي خلال ساعة في السعودية. بدون تحويل راتب، بدون OTP.",
  provider: {
    "@type": "Organization",
    name: "مطر",
    url: "https://liilsol.com",
    telephone: "+966590360039",
  },
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  serviceType: "سيولة تابي وتحويل رصيد تابي إلى نقد",
  offers: {
    "@type": "Offer",
    priceCurrency: "SAR",
    description: "رسوم إدارية 10% + فرق بيع 10-15%",
  },
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SiyolaTabbyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background" dir="rtl">
      <Header />

      <main className="flex-1">
        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary transition-colors">
                  الرئيسية
                </Link>
                <span>/</span>
                <span className="text-foreground">سيولة تابي</span>
              </nav>

              {/* Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                  ✅ التحويل خلال ساعة
                </span>
                <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                  🔒 بدون OTP
                </span>
                <span className="px-4 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold border border-green-500/20">
                  💳 بدون تحويل راتب
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">سيولة تابي</span> |{" "}
                <span className="text-accent">كاش تابي</span> |{" "}
                <span className="text-primary">سلفة تابي</span>
                <br />
                <span className="text-2xl md:text-3xl font-semibold text-muted-foreground mt-2 block">
                  تحويل رصيد تابي إلى نقد خلال ساعة
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                هل تبحث عن طريقة لتحويل رصيد تابي إلى كاش في حسابك البنكي؟ مع{" "}
                <strong className="text-foreground">مطر</strong> الأمر بسيط جدًا — ندخل معك كشركاء في شراء الجهاز عبر تابي،
                نتكفل بالدفعة الأولى (25%)، ثم نبيع الجهاز ونحوّل لك{" "}
                <strong className="text-foreground">صافي مبلغ السيولة</strong> في حسابك البنكي خلال ساعة واحدة فقط.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                الخدمة متاحة في <strong className="text-foreground">الرياض وجدة والدمام وجميع مناطق المملكة</strong>، ولا
                تحتاج إلى تحويل راتب أو إثبات دخل — فقط حد متاح في تطبيق تابي.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="gap-2 text-lg shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                    اطلب سيولة تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب مبلغ السيولة</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Clock, label: "ساعة فقط", sub: "وقت التحويل", color: "text-primary" },
                  { icon: Shield, label: "آمن 100%", sub: "بدون OTP", color: "text-accent" },
                  { icon: Banknote, label: "1000 ريال+", sub: "حد أدنى", color: "text-green-500" },
                  { icon: MapPin, label: "كل السعودية", sub: "الرياض، جدة، الدمام", color: "text-primary" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                    <item.icon className={`w-8 h-8 shrink-0 ${item.color}`} />
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ما هي سيولة تابي؟ ─────────────────────────────────────────── */}
        <section className="py-16 bg-card" id="what-is">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ما هي <span className="text-primary">سيولة تابي</span>؟
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  <strong className="text-foreground">سيولة تابي</strong> هي خدمة تُتيح لك تحويل حدك الائتماني في تطبيق{" "}
                  <strong className="text-foreground">تابي للتقسيط</strong> إلى نقد حقيقي يصل حسابك البنكي خلال ساعة واحدة.
                  تابي هي منصة تقسيط سعودية موثوقة تقبلها كبرى المتاجر مثل اكسترا وجرير ونون، وتتيح لك الشراء على أربع دفعات
                  ميسّرة.
                </p>
                <p>
                  الفكرة ببساطة: بدلاً من استخدام تابي لشراء منتج تحتاجه، تستخدم حدّك في تابي للحصول على{" "}
                  <strong className="text-foreground">كاش نقدي مباشر</strong> في حسابك البنكي. مطر يدخل كشريك معك في هذه
                  العملية — نتكفل بالدفعة الأولى التي تبلغ 25% من قيمة الشراء، ثم نبيع الجهاز في السوق، ونحوّل لك صافي
                  المبلغ بعد خصم الرسوم الإدارية وفرق البيع.
                </p>
                <p>
                  الخدمة مصممة خصيصًا للأشخاص الذين يحتاجون إلى <strong className="text-foreground">سيولة سريعة</strong>{" "}
                  دون اللجوء إلى القروض البنكية أو التمويل التقليدي الذي يشترط تحويل الراتب. كل ما تحتاجه هو حد متاح في
                  تطبيق تابي، والباقي علينا.
                </p>
                <p>
                  نعمل في <strong className="text-foreground">الرياض وجدة والدمام والقصيم وجميع مناطق المملكة</strong>، ويتم
                  التواصل بالكامل عبر واتساب دون الحاجة للحضور الشخصي. لا نطلب كلمة مرور حسابك في تابي، ولا رمز OTP، ولا أي
                  معلومات سرية — أنت تتحكم في كل خطوة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. الخطوات ──────────────────────────────────────────────────── */}
        <section className="py-16" id="steps">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                خطوات الحصول على <span className="text-primary">سيولة تابي</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                العملية كاملة لا تأخذ أكثر من ساعة — اتبع هذه الخطوات وسيصل المبلغ حسابك
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "تواصل معنا عبر واتساب وأخبرنا بالمبلغ المطلوب",
                    desc:
                      "أرسل لنا رسالة على واتساب وأخبرنا بالمبلغ الذي تريده. سنحدد لك بالضبط قيمة الشراء المناسبة في المتجر وما ستحصل عليه بعد الخصومات. يمكنك أيضًا استخدام حاسبة السيولة على موقعنا لمعرفة المبلغ النهائي مسبقًا.",
                    icon: Smartphone,
                    color: "bg-primary",
                  },
                  {
                    step: "2",
                    title: "ادخل متجر اكسترا أو جرير أو نون وأضف المنتج في السلة",
                    desc:
                      "افتح تطبيق أو موقع نون أو اكسترا أو جرير — جميعها تقبل تابي. اختر جهازًا إلكترونيًا (مثل جوال أو لابتوب) بنفس قيمة الشراء التي حددناها لك، وأضفه إلى سلة التسوق دون إتمام الطلب.",
                    icon: Store,
                    color: "bg-accent",
                  },
                  {
                    step: "3",
                    title: "اختر تابي كوسيلة الدفع وصوّر شاشة التقسيم",
                    desc:
                      "عند الدفع، اختر تابي. بعد ظهور شاشة تقسيم الدفعات الأربع، التقط صورة واضحة للشاشة تظهر فيها قيمة كل دفعة. أرسل لنا هذه الصورة فقط على واتساب — لا نحتاج أي معلومة أخرى.",
                    icon: Smartphone,
                    color: "bg-primary",
                  },
                  {
                    step: "4",
                    title: "ندخل كشركاء ونتكفل بالدفعة الأولى (25%)",
                    desc:
                      "بعد مراجعة الصورة، ندخل معك كشركاء في العملية. نتكفل بدفع الدفعة الأولى التي تبلغ 25% من قيمة الشراء نيابةً عنك. بعدها يتم تأكيد الطلب ويُشحن الجهاز مباشرةً إلى فريقنا.",
                    icon: Banknote,
                    color: "bg-green-500",
                  },
                  {
                    step: "5",
                    title: "نبيع الجهاز ونحوّل لك صافي المبلغ خلال ساعة",
                    desc:
                      "فور وصول الجهاز نبيعه في السوق ونحوّل لك صافي مبلغ السيولة (بعد خصم الرسوم الإدارية وفرق البيع) مباشرةً إلى حسابك البنكي. الوقت المعتاد بين بدء العملية وإيداع المبلغ لا يتجاوز ساعة واحدة.",
                    icon: Clock,
                    color: "bg-accent",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors">
                    <div
                      className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg`}
                    >
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA after steps */}
              <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
                <p className="text-foreground font-semibold mb-4">
                  🚀 جاهز تبدأ؟ تواصل معنا الآن واحصل على سيولتك خلال ساعة
                </p>
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                    ابدأ الآن عبر واتساب
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. حساب سيولة تابي (جدول) ───────────────────────────────────── */}
        <section className="py-16 bg-secondary/30" id="calculator-table">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                حساب <span className="text-primary">سيولة تابي</span> — أمثلة على المبالغ
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
                يوضح الجدول أمثلة تقريبية على مبلغ الشراء وما ستحصل عليه صافيًا بعد الخصومات
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="py-4 px-5 text-right font-bold">قيمة الشراء (ريال)</th>
                      <th className="py-4 px-5 text-right font-bold">الرسوم الإدارية (10%)</th>
                      <th className="py-4 px-5 text-right font-bold">فرق البيع (تقريبي)</th>
                      <th className="py-4 px-5 text-right font-bold">الصافي الذي تحصل عليه</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { purchase: "2,000", fee: "200", diff: "240 – 300", net: "1,500 – 1,560" },
                      { purchase: "4,000", fee: "400", diff: "460 – 580", net: "3,020 – 3,140" },
                      { purchase: "6,000", fee: "600", diff: "660 – 840", net: "4,560 – 4,740" },
                      { purchase: "8,000", fee: "800", diff: "840 – 1,080", net: "6,120 – 6,360" },
                      { purchase: "10,000", fee: "1,000", diff: "1,000 – 1,400", net: "7,600 – 8,000" },
                      { purchase: "15,000", fee: "1,500", diff: "1,500", net: "12,000", highlight: true },
                      { purchase: "20,000", fee: "2,000", diff: "2,000", net: "16,000", highlight: true },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-t border-border transition-colors ${
                          row.highlight
                            ? "bg-primary/5 font-semibold"
                            : i % 2 === 0
                            ? "bg-card"
                            : "bg-background"
                        }`}
                      >
                        <td className="py-3 px-5 text-foreground font-medium">{row.purchase}</td>
                        <td className="py-3 px-5 text-red-500 dark:text-red-400">{row.fee}</td>
                        <td className="py-3 px-5 text-orange-500 dark:text-orange-400">{row.diff}</td>
                        <td className="py-3 px-5 text-green-600 dark:text-green-400 font-bold">{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-foreground text-sm">كلما زاد المبلغ</p>
                  <p className="text-xs text-muted-foreground">قلّت نسبة فرق البيع</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Zap className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-bold text-foreground text-sm">الدفعات الباقية</p>
                  <p className="text-xs text-muted-foreground">تابي يخصمها منك (3 دفعات)</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <Star className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-bold text-foreground text-sm">أفضل نسبة</p>
                  <p className="text-xs text-muted-foreground">المبالغ فوق 12,000 ريال</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                * الأرقام تقريبية وقد تختلف حسب المتجر والمنتج. للحساب الدقيق، تواصل معنا مباشرةً.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. أين أجد تابي؟ ─────────────────────────────────────────────── */}
        <section className="py-16 bg-card" id="stores">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                أين أجد <span className="text-primary">تابي</span>؟
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                تابي متاح في أشهر المتاجر الإلكترونية في السعودية
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "اكسترا Extra",
                    emoji: "🛒",
                    desc:
                      "متجر اكسترا يقبل تابي لشراء الأجهزة الإلكترونية والجوالات والأجهزة المنزلية. اختر جهازك وادفع بتابي.",
                    link: "https://www.extra.com",
                    linkText: "زيارة اكسترا",
                    color: "border-primary/30 hover:border-primary",
                  },
                  {
                    name: "جرير Jarir",
                    emoji: "📚",
                    desc:
                      "مكتبة جرير تدعم الدفع عبر تابي للأجهزة والإلكترونيات والكتب. خيار ممتاز للحصول على سيولة تابي.",
                    link: "https://www.jarir.com",
                    linkText: "زيارة جرير",
                    color: "border-accent/30 hover:border-accent",
                  },
                  {
                    name: "نون Noon",
                    emoji: "🛍️",
                    desc:
                      "متجر نون يتيح الدفع بتابي لمئات الأجهزة الإلكترونية. التوصيل سريع والعملية كاملة أونلاين.",
                    link: "https://www.noon.com/saudi-ar",
                    linkText: "زيارة نون",
                    color: "border-yellow-500/30 hover:border-yellow-500",
                  },
                ].map((store, i) => (
                  <div
                    key={i}
                    className={`p-6 bg-background rounded-2xl border-2 transition-colors ${store.color}`}
                  >
                    <div className="text-4xl mb-3">{store.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{store.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{store.desc}</p>
                    <a
                      href={store.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                    >
                      {store.linkText}
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-foreground text-sm leading-relaxed">
                  <strong>💡 نصيحة:</strong> لا يهم أي متجر تختار — نون، اكسترا، أو جرير — الأهم أن تكون قيمة الجهاز مطابقة
                  للمبلغ الذي اتفقنا عليه. تواصل معنا أولاً لنحدد معك قيمة الشراء الصحيحة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. سيولة تابي بدون تحويل راتب ──────────────────────────────── */}
        <section className="py-16" id="no-salary-transfer">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-primary">سيولة تابي بدون تحويل راتب</span> — هل هي ممكنة؟
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-green-600 dark:text-green-400 text-xl">✅ نعم، ممكنة 100%.</strong>
                  </p>
                  <p>
                    كثير من الناس يعتقدون أن الحصول على سيولة أو تمويل في السعودية يشترط تحويل الراتب للبنك أو إثبات الدخل —
                    وهذا صحيح في حالة البنوك والتمويل التقليدي. لكن{" "}
                    <strong className="text-foreground">سيولة تابي مختلفة تمامًا</strong>.
                  </p>
                  <p>
                    تابي هو تطبيق تقسيط يمنحك حدًا ائتمانيًا بناءً على تقييمه الخاص الذي لا يشترط تحويل الراتب. وخدمتنا
                    تعتمد فقط على الحد المتاح لديك في تابي — لا علاقة لها بحسابك البنكي أو جهة عملك أو راتبك.
                  </p>
                  <p>
                    بمعنى آخر: إذا كان لديك حد متاح في تطبيق تابي ولو 1000 ريال، يمكنك الحصول على سيولة نقدية بهذا المبلغ
                    (أو أكثر) دون أي اشتراطات بنكية.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground mb-4">ما الذي نحتاجه منك؟</h3>
                  {[
                    { text: "حد متاح في تطبيق تابي (1000 ريال فأكثر)", check: true },
                    { text: "صورة شاشة من تطبيق تابي توضح تقسيم الدفعات", check: true },
                    { text: "رقم حسابك البنكي لاستقبال التحويل", check: true },
                    { text: "تحويل راتب للبنك", check: false },
                    { text: "إثبات دخل أو كشف حساب", check: false },
                    { text: "OTP أو كلمة مرور تابي", check: false },
                    { text: "الحضور الشخصي", check: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                      <span className={`text-lg ${item.check ? "text-green-500" : "text-red-500"}`}>
                        {item.check ? "✅" : "❌"}
                      </span>
                      <span className={`text-sm ${item.check ? "text-foreground" : "text-muted-foreground line-through"}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. مقارنة تابي vs تمارا ─────────────────────────────────────── */}
        <section className="py-16 bg-secondary/30" id="comparison">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                مقارنة سريعة: <span className="text-primary">تابي</span> vs{" "}
                <span className="text-accent">تمارا</span>
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                كلاهما ممتاز — نقدم خدمة السيولة لكليهما. الجدول يوضح الفرق لمساعدتك
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-card border-b border-border">
                      <th className="py-4 px-5 text-right font-bold text-foreground">الميزة</th>
                      <th className="py-4 px-5 text-center font-bold text-primary">تابي Tabby</th>
                      <th className="py-4 px-5 text-center font-bold text-accent">تمارا Tamara</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "عدد الدفعات", tabby: "4 دفعات", tamara: "3 دفعات" },
                      { feature: "الدفعة الأولى", tabby: "25%", tamara: "33%" },
                      { feature: "سيولة نقدية", tabby: "✅ متاحة مع مطر", tamara: "✅ متاحة مع مطر" },
                      { feature: "المتاجر المدعومة", tabby: "اكسترا، جرير، نون وأكثر", tamara: "اكسترا، نون وأكثر" },
                      { feature: "تحويل راتب مطلوب", tabby: "❌ لا", tamara: "❌ لا" },
                      { feature: "وقت التحويل مع مطر", tabby: "ساعة واحدة", tamara: "ساعة واحدة" },
                      { feature: "الحد الأدنى", tabby: "1,000 ريال", tamara: "1,000 ريال" },
                      { feature: "رسوم مطر الإدارية", tabby: "10%", tamara: "10%" },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                        <td className="py-3 px-5 font-medium text-foreground">{row.feature}</td>
                        <td className="py-3 px-5 text-center text-muted-foreground">{row.tabby}</td>
                        <td className="py-3 px-5 text-center text-muted-foreground">{row.tamara}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20" asChild>
                  <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                    سيولة تابي الآن
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/cash-tamara">سيولة تمارا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. التغطية الجغرافية ─────────────────────────────────────────── */}
        <section className="py-16 bg-card" id="coverage">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                خدمة <span className="text-primary">سيولة تابي</span> في جميع مناطق السعودية
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "الرياض",
                  "جدة",
                  "الدمام",
                  "مكة المكرمة",
                  "المدينة المنورة",
                  "الخبر",
                  "الظهران",
                  "القصيم",
                  "تبوك",
                  "أبها",
                  "جيزان",
                  "نجران",
                ].map((city, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border"
                  >
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{city}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-muted-foreground text-sm">
                كل العمليات تتم أونلاين عبر واتساب — لا حاجة للحضور الشخصي في أي مدينة.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-16" id="faq">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                أسئلة شائعة عن <span className="text-primary">سلفة تابي</span> و كاش تابي
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                إجابات مفصّلة لأكثر الأسئلة شيوعًا
              </p>

              <div className="space-y-4">
                {[
                  {
                    q: "ما هي سيولة تابي وكيف تعمل بالضبط؟",
                    a: "سيولة تابي هي عملية تحويل حدك الائتماني في تطبيق تابي إلى نقد في حسابك البنكي. نعمل كشركاء معك: ندخل في شراء جهاز عبر تابي، نتكفل بالدفعة الأولى (25%)، ثم نبيع الجهاز ونحوّل لك الصافي. أنت ستسدد ثلاث دفعات لتابي خلال 6 أسابيع وتكون قد استلمت كاشك مسبقًا.",
                  },
                  {
                    q: "كيف أحوّل رصيد تابي إلى كاش؟",
                    a: "الطريقة بسيطة: تواصل معنا على واتساب، ادخل أحد المتاجر (نون أو اكسترا أو جرير)، اختر جهازًا بالقيمة التي نحددها لك، وادفع بتابي. صوّر شاشة تقسيم الدفعات وأرسلها لنا. نحن نكمل الباقي ونحوّل المبلغ لحسابك خلال ساعة.",
                  },
                  {
                    q: "كم يستغرق وقت الحصول على كاش تابي؟",
                    a: "من لحظة إرسالك صورة الشاشة إلى وصول المبلغ حسابك البنكي، الوقت المعتاد لا يتجاوز ساعة واحدة. في بعض الحالات قد يصل خلال 15-30 دقيقة.",
                  },
                  {
                    q: "هل سيولة تابي بدون تحويل راتب ممكنة؟",
                    a: "نعم 100%. لا نشترط تحويل الراتب ولا إثبات الدخل ولا أي وثائق بنكية. الشرط الوحيد هو وجود حد متاح في تطبيق تابي.",
                  },
                  {
                    q: "ما هو الحد الأدنى والأقصى للسيولة؟",
                    a: "الحد الأدنى هو 1000 ريال سعودي. الحد الأقصى يعتمد على حدك المتاح في تطبيق تابي — كلما كان حدك أعلى، كلما تمكنت من الحصول على سيولة أكبر.",
                  },
                  {
                    q: "هل تطلبون كلمة المرور أو OTP؟",
                    a: "لا، مطلقًا. نحن لا نطلب كلمة مرورك في تابي، ولا رمز OTP، ولا أي معلومة سرية. أنت تتحكم في حسابك بالكامل من هاتفك. كل ما نحتاجه منك هو صورة شاشة.",
                  },
                  {
                    q: "كم تبلغ رسوم سيولة تابي مع مطر؟",
                    a: "الرسوم الإدارية 10% من قيمة الشراء، إضافةً لفرق بيع الجهاز الذي يتراوح بين 10-15% حسب قيمة الجهاز والمتجر. كلما زاد المبلغ قلّت نسبة فرق البيع — المبالغ فوق 12,000 ريال تحصل على أفضل نسبة.",
                  },
                  {
                    q: "هل الخدمة متاحة في جميع مناطق السعودية؟",
                    a: "نعم، الخدمة متاحة في جميع مناطق المملكة العربية السعودية — الرياض، جدة، الدمام، مكة، المدينة، القصيم، تبوك وغيرها. كل العمليات تتم عبر واتساب دون الحاجة للحضور الشخصي.",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <h3 className="font-bold text-foreground mb-3 flex items-start gap-3 text-base">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      {item.q}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mr-8">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Trust signals ────────────────────────────────────────────── */}
        <section className="py-14 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                لماذا يختار العملاء <span className="text-primary">مطر</span>؟
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  {
                    icon: Shield,
                    title: "أمان تام",
                    desc: "لا نطلب كلمة مرور أو OTP. سلامة بياناتك أولويتنا.",
                    color: "text-primary",
                  },
                  {
                    icon: Clock,
                    title: "سرعة استثنائية",
                    desc: "التحويل في ساعة — من إرسال الصورة إلى استلام الكاش.",
                    color: "text-accent",
                  },
                  {
                    icon: Users,
                    title: "آلاف العملاء",
                    desc: "خدمنا آلاف العملاء في جميع مناطق المملكة.",
                    color: "text-green-500",
                  },
                  {
                    icon: Banknote,
                    title: "أسعار تنافسية",
                    desc: "رسوم إدارية 10% فقط — من أفضل الأسعار في السوق.",
                    color: "text-primary",
                  },
                  {
                    icon: Zap,
                    title: "بدون تعقيد",
                    desc: "لا أوراق، لا بنوك، لا حضور شخصي — كل شيء عبر واتساب.",
                    color: "text-accent",
                  },
                  {
                    icon: Star,
                    title: "دعم على مدار الساعة",
                    desc: "فريقنا متاح 24/7 للرد على استفساراتك.",
                    color: "text-yellow-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-card rounded-xl border border-border text-center">
                    <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. Final CTA ────────────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                جاهز تحصل على <span className="text-primary">سيولة تابي</span>؟
              </h2>
              <p className="text-muted-foreground mb-2 text-lg">
                تواصل معنا الآن على واتساب وستستلم كاشك في حسابك خلال ساعة واحدة
              </p>
              <p className="text-muted-foreground mb-8 text-sm">
                الرياض • جدة • الدمام • وجميع مناطق المملكة
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-lg shadow-xl shadow-primary/25" asChild>
                  <a href="https://wa.me/966590360039" target="_blank" rel="noopener noreferrer">
                    واتساب: 0503367637
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent" asChild>
                  <Link href="/#calculator">احسب مبلغك أولاً</Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                بضغطك على الزر، ستُفتح نافذة واتساب مباشرةً مع رقمنا
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── JSON-LD Schemas ────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  )
}