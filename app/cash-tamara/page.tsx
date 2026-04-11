import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Clock,
  Shield,
  AlertTriangle,
  MessageCircle,
  Banknote,
  CreditCard,
  Smartphone,
  XCircle,
  Star,
  ChevronDown,
  ArrowLeftRight,
  TrendingUp,
  MapPin,
} from "lucide-react"
import Link from "next/link"

/* ─────────────────────────────────────────────
   Metadata & SEO
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "كاش تمارا | سيولة تمارا | سلفة تمارا - تحويل خلال ساعة",
  description:
    "احصل على كاش تمارا وسيولة من رصيدك خلال ساعة واحدة فقط. سلفة تمارا بأفضل الأسعار. تحويل رصيد تمارا إلى نقد في حسابك البنكي. طريقة استخراج سيولة من تمارا بدون Apple Pay. خدمة معتمدة في الرياض وجدة والدمام وكل السعودية.",
  keywords:
    "كاش تمارا, سيولة تمارا, سلفة تمارا, تحويل رصيد تمارا, طريقة استخراج سيولة من تمارا, كاش تمارا بدون Apple Pay, تسييل تمارا, tamara cash, كاش من تمارا, سيولة من تمارا",
  alternates: {
    canonical: "https://liilsol.com/cash-tamara",
  },
  openGraph: {
    title: "كاش تمارا | سيولة تمارا | سلفة تمارا - تحويل خلال ساعة",
    description:
      "احصل على كاش من رصيد تمارا خلال ساعة واحدة. سلفة تمارا وتحويل رصيدك إلى نقد في حسابك البنكي مع مطر.",
    url: "https://liilsol.com/cash-tamara",
    siteName: "مطر",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "كاش تمارا | سيولة تمارا - مطر",
    description: "سيولة من تمارا خلال ساعة. احصل على كاش تمارا بأفضل الأسعار في السعودية.",
  },
}

/* ─────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما هو كاش تمارا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "كاش تمارا هو خدمة تحويل رصيد تمارا إلى سيولة نقدية في حسابك البنكي. نشتري لك جهازاً من اكسترا أو جرير عبر تمارا ونحوّل القيمة النقدية لحسابك خلال ساعة.",
      },
    },
    {
      "@type": "Question",
      name: "لماذا يجب إضافة بطاقة جديدة وليس Apple Pay؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "صفحة OTP الخاصة بالبنك لا تظهر عند استخدام Apple Pay أو بطاقة محفوظة مسبقاً في تمارا. يجب إضافة بطاقة بنكية جديدة لأول مرة حتى يتم تفعيل صفحة التحقق ويمكننا إتمام العملية.",
      },
    },
    {
      "@type": "Question",
      name: "كم تستغرق عملية كاش تمارا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تتم عملية تحويل كاش تمارا خلال ساعة واحدة فقط من لحظة إرسالك صورة صفحة OTP.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي المتاجر المعتمدة لعملية كاش تمارا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المتاجر المعتمدة هي: اكسترا (extra.com)، جرير (jarir.com)، ونون (noon.com). يمكنك اختيار أي جهاز من هذه المتاجر بقيمة تعادل المبلغ المطلوب.",
      },
    },
    {
      "@type": "Question",
      name: "من يتكفل بالدفعة الأولى في تمارا؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نحن نتكفل بسداد الدفعة الأولى نيابةً عنك حسب عدد الأقساط المختارة، سواء كانت 2 أو 3 أو 4 أقساط أو أكثر.",
      },
    },
    {
      "@type": "Question",
      name: "ما الفرق بين تمارا وتابي في السيولة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تمارا تتيح أقساطاً حتى 24 شهراً مما يرفع نسبة القبول ويناسب المبالغ الكبيرة، بينما تابي تعمل عبر تطبيق مباشر وأسرع في بعض الحالات. كلتا الخدمتين متاحتان لدى مطر.",
      },
    },
    {
      "@type": "Question",
      name: "هل خدمة كاش تمارا متاحة في جميع مناطق السعودية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، الخدمة متاحة في جميع مناطق المملكة العربية السعودية: الرياض، جدة، الدمام، مكة، المدينة، وجميع المدن الأخرى.",
      },
    },
    {
      "@type": "Question",
      name: "كيف أحسب مبلغ كاش تمارا الذي سأستلمه؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يعتمد المبلغ على قيمة الجهاز وعدد الأقساط. مثال: إذا اشتريت جهازاً بـ 3000 ريال على 4 أقساط، ستستلم ما بين 2400 إلى 2600 ريال بعد خصم العمولة والدفعة الأولى.",
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
      name: "كاش تمارا",
      item: "https://liilsol.com/cash-tamara",
    },
  ],
}

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const WA_LINK = "https://wa.me/966590360039"

const WHATSAPP_MSG = encodeURIComponent(
  "السلام عليكم، أريد الاستفسار عن كاش تمارا 🌧️"
)

/* ─────────────────────────────────────────────
   Page Component
───────────────────────────────────────────── */
export default function CashTamaraPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen flex flex-col bg-background" dir="rtl">
        <Header />

        <main className="flex-1">
          {/* ══════════════════════════════════
              HERO
          ══════════════════════════════════ */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
            <div className="absolute top-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                {/* Breadcrumb */}
                <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
                  <Link href="/" className="hover:text-primary transition-colors">
                    الرئيسية
                  </Link>
                  <span>/</span>
                  <span className="text-foreground font-medium">كاش تمارا</span>
                </nav>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" />
                  تحويل خلال ساعة واحدة فقط
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  كاش تمارا | سيولة تمارا | سلفة تمارا
                  <span className="block text-accent mt-2">تحويل خلال ساعة</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  هل تحتاج سيولة عاجلة من رصيد تمارا؟ نحوّل رصيدك إلى نقد في حسابك البنكي
                  خلال ساعة واحدة فقط. خدمة موثوقة في الرياض وجدة والدمام وكل السعودية.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {[
                    { icon: Clock, text: "تحويل خلال ساعة" },
                    { icon: Shield, text: "خدمة موثوقة 100%" },
                    { icon: MapPin, text: "كل السعودية" },
                    { icon: Banknote, text: "أفضل الأسعار" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm"
                    >
                      <Icon className="w-4 h-4 text-accent" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`${WA_LINK}?text=${WHATSAPP_MSG}`} target="_blank">
                    <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6">
                      <MessageCircle className="w-5 h-5" />
                      ابدأ الآن عبر واتساب
                    </Button>
                  </Link>
                  <Link href="#steps">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto gap-2 text-base px-8 py-6"
                    >
                      <ChevronDown className="w-5 h-5" />
                      اعرف الخطوات
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              ما هو كاش تمارا؟
          ══════════════════════════════════ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  ما هو كاش تمارا؟
                </h2>

                <div className="bg-background rounded-2xl border border-border p-8 shadow-sm">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5">
                    <strong className="text-foreground">كاش تمارا</strong> هو خدمة تحويل رصيد تمارا إلى سيولة نقدية حقيقية في حسابك البنكي.
                    تمارا هي منصة تقسيط سعودية رائدة تتيح لك الشراء الآن والدفع لاحقاً بأقساط ميسّرة،
                    وقد أصبح الكثيرون يبحثون عن طريقة لتحويل هذا الرصيد إلى نقد فعلي يمكن استخدامه
                    في أي غرض.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5">
                    الطريقة تعتمد على شراء جهاز إلكتروني من متاجر معتمدة مثل اكسترا أو جرير أو نون
                    عبر تمارا بالتقسيط، ثم نقوم نحن بتحويل القيمة النقدية المقابلة إلى حسابك البنكي
                    مباشرةً. تُعدّ هذه الخدمة بديلاً مرناً للحصول على سيولة فورية دون الحاجة إلى
                    قرض بنكي أو إجراءات معقدة.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-5">
                    نحن في <strong className="text-foreground">مطر</strong> نقدم خدمة كاش تمارا منذ سنوات بخبرة واسعة وثقة عملائنا.
                    نتولى الأمر من الألف إلى الياء: من اختيار الجهاز المناسب، وإتمام عملية الشراء،
                    إلى تحويل المبلغ النقدي لحسابك في غضون ساعة واحدة فقط.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    سواء كنت في الرياض أو جدة أو الدمام أو أي مدينة في المملكة العربية السعودية،
                    يمكنك الاستفادة من خدمة <strong className="text-foreground">سيولة تمارا</strong> وسلفة تمارا بكل سهولة ويسر.
                    الخدمة متاحة على مدار الساعة، وفريقنا جاهز للرد على استفساراتك فوراً.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              خطوات كاش تمارا
          ══════════════════════════════════ */}
          <section id="steps" className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  خطوات الحصول على كاش تمارا
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-base md:text-lg">
                  اتبع هذه الخطوات البسيطة للحصول على سيولتك خلال ساعة واحدة
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                      ١
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">تواصل معنا وحدّد المبلغ</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        أرسل لنا رسالة عبر واتساب وأخبرنا بالمبلغ الذي تريده. سنحدد لك الجهاز
                        المناسب من اكسترا أو جرير أو نون بقيمة تعادل المبلغ المطلوب. سيتولى فريقنا
                        توجيهك خطوة بخطوة.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                      ٢
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">اختر الجهاز من المتجر</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        ادخل على موقع اكسترا (<strong>extra.com</strong>) أو جرير (<strong>jarir.com</strong>)
                        أو نون (<strong>noon.com</strong>). اختر الجهاز الذي حددناه لك وأضفه إلى سلة
                        التسوق، ثم انتقل إلى صفحة الدفع.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                      ٣
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">اختر تمارا كطريقة دفع واختر "ادفع بعد"</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        في صفحة الدفع اختر <strong>تمارا</strong> من ضمن خيارات الدفع المتاحة،
                        ثم اختر خيار <strong>"ادفع بعد"</strong> أو أقساط حسب ما يتوفر لعدد الأقساط
                        المتفق عليه مع فريقنا (2 أو 3 أو 4 أقساط أو أكثر).
                      </p>
                    </div>
                  </div>

                  {/* Step 4 — CRITICAL */}
                  <div className="flex gap-5 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border-2 border-amber-400/60 shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-amber-700 dark:text-amber-400">
                        ⚠️ الخطوة الحرجة: أضف بطاقة بنكية جديدة فقط
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        هذه هي الخطوة الأهم في العملية. عند إدخال بيانات الدفع في تمارا:
                      </p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">ممنوع:</strong> استخدام Apple Pay
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">ممنوع:</strong> اختيار بطاقة محفوظة مسبقاً في تمارا
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">المطلوب:</strong> اختر "إضافة بطاقة جديدة" وأدخل بيانات بطاقتك البنكية يدوياً
                          </span>
                        </li>
                      </ul>
                      <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-sm text-amber-800 dark:text-amber-300">
                        <strong>السبب:</strong> صفحة OTP الخاصة بالبنك لا تظهر إلا عند إضافة بطاقة
                        جديدة. مع Apple Pay أو البطاقة المحفوظة لا تظهر هذه الصفحة ولا يمكن
                        إتمام العملية.
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                      ٥
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">صوّر صفحة OTP وأرسلها لنا</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        بعد إدخال بيانات البطاقة ستظهر لك صفحة التحقق من البنك (OTP).{" "}
                        <strong>صوّر هذه الصفحة</strong> وأرسل لنا الصورة عبر واتساب فوراً.
                        لا تضغط على زر التأكيد ولا تُغلق الصفحة قبل إرسال الصورة.
                      </p>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
                      ٦
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">أغلق الصفحة وانتظر التحويل</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        بعد إرسال صورة OTP، أغلق الصفحة تماماً وانتظر. سيتولى فريقنا إتمام
                        العملية وستستلم المبلغ النقدي في حسابك البنكي{" "}
                        <strong className="text-accent">خلال ساعة واحدة فقط</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                  <Link href={`${WA_LINK}?text=${WHATSAPP_MSG}`} target="_blank">
                    <Button size="lg" className="gap-2 text-base px-10 py-6">
                      <MessageCircle className="w-5 h-5" />
                      ابدأ الخطوات الآن عبر واتساب
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              حساب كاش تمارا — أمثلة على المبالغ
          ══════════════════════════════════ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  حساب كاش تمارا — أمثلة على المبالغ
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-base">
                  إليك أمثلة توضيحية على المبالغ التي ستستلمها حسب قيمة الشراء وعدد الأقساط
                </p>

                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-accent/10 border-b border-border">
                        <th className="p-4 text-right font-bold">قيمة الشراء</th>
                        <th className="p-4 text-right font-bold">عدد الأقساط</th>
                        <th className="p-4 text-right font-bold">الدفعة الأولى</th>
                        <th className="p-4 text-right font-bold">المبلغ الذي تستلمه</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { purchase: "1,500", installments: "3 أقساط", first: "500", receive: "850 - 900" },
                        { purchase: "2,000", installments: "4 أقساط", first: "500", receive: "1,200 - 1,300" },
                        { purchase: "3,000", installments: "4 أقساط", first: "750", receive: "1,900 - 2,050" },
                        { purchase: "5,000", installments: "6 أقساط", first: "833", receive: "3,300 - 3,600" },
                        { purchase: "8,000", installments: "12 قسطاً", first: "666", receive: "5,500 - 6,000" },
                        { purchase: "12,000", installments: "24 قسطاً", first: "500", receive: "8,500 - 9,200" },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                        >
                          <td className="p-4 font-medium">{row.purchase} ريال</td>
                          <td className="p-4 text-muted-foreground">{row.installments}</td>
                          <td className="p-4 text-muted-foreground">{row.first} ريال</td>
                          <td className="p-4 font-bold text-accent">{row.receive} ريال</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground text-sm mt-4 text-center">
                  * المبالغ تقديرية وقد تتفاوت حسب العروض والمتجر. تواصل معنا للحصول على
                  سعر دقيق لمبلغك.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              لماذا ممنوع Apple Pay في تمارا؟
          ══════════════════════════════════ */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  لماذا ممنوع Apple Pay في كاش تمارا؟
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="font-bold text-lg text-red-700 dark:text-red-400">
                        Apple Pay — لا يعمل
                      </h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        <span>Apple Pay يتحقق تلقائياً عبر Face ID / Touch ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        <span>لا تظهر صفحة OTP البنكية عند استخدامه</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        <span>لا يمكن مشاركة عملية التحقق مع فريقنا</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        <span>البطاقة المحفوظة في تمارا لها نفس المشكلة</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </div>
                      <h3 className="font-bold text-lg text-green-700 dark:text-green-400">
                        بطاقة جديدة — يعمل بشكل مثالي
                      </h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span>إضافة بطاقة جديدة تُفعّل صفحة OTP البنكية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span>يمكنك مشاركة صورة الصفحة مع فريقنا بسهولة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span>العملية مضمونة 100% مع هذه الطريقة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span>يعمل مع جميع البطاقات البنكية السعودية</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-muted/40 rounded-2xl border border-border">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    <strong className="text-foreground">خلاصة الأمر:</strong> صفحة التحقق (OTP) هي
                    المفتاح الأساسي لإتمام عملية كاش تمارا بدون Apple Pay. هذه الصفحة تظهر فقط
                    عند إضافة بطاقة بنكية جديدة لأول مرة في تمارا، وهي ما نحتاجه لإتمام العملية
                    نيابةً عنك بشكل آمن وسريع.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              تمارا حتى 24 قسطاً
          ══════════════════════════════════ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  تمارا حتى 24 قسطاً — ميزة رفع الحد
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-base md:text-lg">
                  تمارا توفر عروضاً حتى 24 قسطاً شهرياً، مما يرفع نسبة القبول ويتيح لك الحصول
                  على مبالغ أكبر
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "رفع نسبة القبول",
                      desc: "تقسيم المبلغ على 24 قسطاً يجعل القسط الشهري أصغر، مما يرفع نسبة موافقة تمارا على الطلب.",
                    },
                    {
                      icon: Banknote,
                      title: "مبالغ أكبر",
                      desc: "يمكنك الحصول على سيولة أعلى عند اختيار أقساط أكثر، حيث يصل حد تمارا إلى 20,000 ريال وأكثر.",
                    },
                    {
                      icon: CreditCard,
                      title: "دفعة أولى أقل",
                      desc: "كلما زاد عدد الأقساط، كلما انخفضت قيمة الدفعة الأولى، مما يرفع المبلغ الصافي الذي تستلمه.",
                    },
                    {
                      icon: Clock,
                      title: "مرونة في السداد",
                      desc: "24 قسطاً يعني فترة سداد أطول وأقساط شهرية أريح، مما يناسب من يريد سيولة كبيرة بأقساط منخفضة.",
                    },
                    {
                      icon: Shield,
                      title: "عروض موسمية",
                      desc: "تمارا تطلق بين الحين والآخر عروض خاصة مثل 0% فائدة أو رسوم مخفضة، نحن نستغلها لصالحك.",
                    },
                    {
                      icon: Star,
                      title: "متاجر معتمدة متعددة",
                      desc: "خيار 24 قسطاً متاح في اكسترا وجرير ونون، مما يعطيك حرية الاختيار بين المتاجر الكبرى.",
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-bold mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              مقارنة: تمارا vs تابي
          ══════════════════════════════════ */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  مقارنة: كاش تمارا مقابل كاش تابي
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-base">
                  كلتا الخدمتين متاحتان لدينا — إليك الفرق لتختار الأنسب لك
                </p>

                <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="p-4 text-right font-bold">المعيار</th>
                        <th className="p-4 text-center font-bold text-accent">كاش تمارا</th>
                        <th className="p-4 text-center font-bold text-primary">كاش تابي</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          criteria: "الحد الأقصى للمبلغ",
                          tamara: "حتى 20,000+ ريال",
                          tabby: "حتى 15,000 ريال",
                        },
                        {
                          criteria: "عدد الأقساط",
                          tamara: "حتى 24 قسطاً",
                          tabby: "حتى 12 قسطاً",
                        },
                        {
                          criteria: "سرعة التحويل",
                          tamara: "خلال ساعة",
                          tabby: "خلال ساعة",
                        },
                        {
                          criteria: "طريقة التفعيل",
                          tamara: "عبر موقع المتجر",
                          tabby: "عبر تطبيق تابي",
                        },
                        {
                          criteria: "المتاجر المعتمدة",
                          tamara: "اكسترا، جرير، نون",
                          tabby: "متاجر الشركاء",
                        },
                        {
                          criteria: "نسبة القبول",
                          tamara: "مرتفعة (أقساط أكثر)",
                          tabby: "جيدة",
                        },
                        {
                          criteria: "مناسب لـ",
                          tamara: "المبالغ الكبيرة والمتوسطة",
                          tabby: "المبالغ المتوسطة والصغيرة",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={`border-b border-border ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
                        >
                          <td className="p-4 font-medium">{row.criteria}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.tamara}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.tabby}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20 text-center">
                  <p className="text-muted-foreground mb-4">
                    لا تعرف أيهما يناسبك؟ تواصل معنا وسنساعدك في اختيار الأنسب لوضعك
                  </p>
                  <Link href={`${WA_LINK}?text=${WHATSAPP_MSG}`} target="_blank">
                    <Button className="gap-2">
                      <ArrowLeftRight className="w-4 h-4" />
                      استشرنا الآن مجاناً
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              CTA وسط الصفحة
          ══════════════════════════════════ */}
          <section className="py-12 bg-gradient-to-r from-accent/20 via-accent/10 to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  احصل على سيولة تمارا الآن
                </h2>
                <p className="text-muted-foreground mb-8 text-base md:text-lg">
                  فريقنا جاهز على مدار الساعة. تواصل معنا الآن وستستلم مبلغك خلال ساعة واحدة.
                  خدمة في الرياض وجدة والدمام وكل مدن المملكة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`${WA_LINK}?text=${WHATSAPP_MSG}`}
                    target="_blank"
                  >
                    <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-10 py-6">
                      <MessageCircle className="w-5 h-5" />
                      واتساب — تحويل خلال ساعة
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              FAQ
          ══════════════════════════════════ */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  أسئلة شائعة عن كاش تمارا
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-base">
                  إجابات على أكثر الأسئلة التي يسألها عملاؤنا حول خدمة سيولة تمارا
                </p>

                <div className="space-y-4">
                  {[
                    {
                      q: "ما هو كاش تمارا وكيف يعمل؟",
                      a: "كاش تمارا هو خدمة تحويل رصيد تمارا إلى سيولة نقدية حقيقية في حسابك البنكي. نشتري لك جهازاً من متاجر معتمدة عبر تمارا بالتقسيط، ثم نحوّل القيمة النقدية المقابلة إلى حسابك مباشرةً خلال ساعة واحدة فقط.",
                    },
                    {
                      q: "لماذا يجب إضافة بطاقة جديدة وليس Apple Pay في تمارا؟",
                      a: "صفحة OTP الخاصة بالبنك لا تظهر عند استخدام Apple Pay أو بطاقة محفوظة مسبقاً في تمارا. يجب إضافة بطاقة بنكية جديدة لأول مرة حتى يتم تفعيل صفحة التحقق ويمكننا إتمام العملية نيابةً عنك.",
                    },
                    {
                      q: "كم يستغرق تحويل كاش تمارا؟",
                      a: "تتم عملية تحويل كاش تمارا خلال ساعة واحدة فقط من لحظة إرسالك صورة صفحة OTP. في أغلب الحالات يصل المبلغ أسرع من ذلك.",
                    },
                    {
                      q: "ما هي المتاجر المعتمدة لعملية كاش تمارا؟",
                      a: "المتاجر المعتمدة هي: اكسترا (extra.com)، جرير (jarir.com)، ونون (noon.com). نختار لك الجهاز المناسب من هذه المتاجر حسب المبلغ المطلوب.",
                    },
                    {
                      q: "من يتكفل بالدفعة الأولى في تمارا؟",
                      a: "نحن نتكفل بسداد الدفعة الأولى نيابةً عنك حسب عدد الأقساط المختارة. لا تحتاج لدفع أي شيء مسبقاً.",
                    },
                    {
                      q: "ما الفرق بين كاش تمارا وكاش تابي؟",
                      a: "تمارا تتيح أقساطاً حتى 24 شهراً مما يرفع نسبة القبول ويناسب المبالغ الكبيرة. تابي تعمل بشكل مختلف قليلاً عبر التطبيق. كلتا الخدمتين متاحتان لدى مطر ونساعدك في اختيار الأنسب.",
                    },
                    {
                      q: "هل خدمة كاش تمارا متاحة في جميع مناطق السعودية؟",
                      a: "نعم، الخدمة متاحة في جميع مناطق المملكة العربية السعودية بما فيها الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، الطائف، أبها، وجميع المدن الأخرى.",
                    },
                    {
                      q: "كيف أحسب مبلغ كاش تمارا الذي سأستلمه؟",
                      a: "يعتمد المبلغ على قيمة الجهاز وعدد الأقساط المختارة. مثال: لو اشتريت جهازاً بـ 5,000 ريال على 6 أقساط، ستستلم ما بين 3,300 إلى 3,600 ريال. تواصل معنا للحصول على تقدير دقيق لمبلغك.",
                    },
                  ].map(({ q, a }, i) => (
                    <details
                      key={i}
                      className="group bg-background rounded-2xl border border-border shadow-sm overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-muted/30 transition-colors">
                        <span className="font-semibold text-sm md:text-base">{q}</span>
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0 mr-3" />
                      </summary>
                      <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-border/50 pt-4">
                        {a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              Final CTA
          ══════════════════════════════════ */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" />
                  تحويل خلال ساعة — متاح الآن
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  جاهز تحصل على كاش تمارا؟
                </h2>
                <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                  لا تنتظر أكثر. تواصل معنا الآن عبر واتساب وسنبدأ معك فوراً.
                  خدمة في الرياض وجدة والدمام وكل السعودية 🌧️
                </p>
                <Link
                  href={`${WA_LINK}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                >
                  <Button size="lg" className="gap-3 text-lg px-12 py-7">
                    <MessageCircle className="w-6 h-6" />
                    تواصل معنا على واتساب
                  </Button>
                </Link>
                <p className="text-muted-foreground text-sm mt-4">
                  رقم الواتساب: 966590360039
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
