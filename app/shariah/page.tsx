import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Shield, BookOpen, Scale, Building2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "الامتثال الشرعي | التورق المباح - سيولة نقدية بدون ربا",
  description:
    "تعرف على أساس الامتثال الشرعي لخدمات مطر في التورق المباح. مدعوم بقرارات هيئة كبار العلماء وفتاوى ابن باز وابن عثيمين ومجمع الفقه الإسلامي. سيولة نقدية فورية بدون ربا عبر تابي وتمارا.",
  keywords:
    "تورق, تورق مباح, سيولة شرعية, سلفة بدون ربا, تقسيط جوالات بدون ربا, سيولة نقدية, سلفة فورية, فتوى التورق, هيئة كبار العلماء",
}

const fatwas = [
  {
    icon: Scale,
    source: "هيئة كبار العلماء",
    reference: "القرار رقم 10 لعام 1973",
    ruling:
      "التورق جائز شرعا بأن يشتري الشخص سلعة بالأجل ثم يبيعها نقدا لطرف ثالث غير البائع الأصلي، بشرط عدم وجود اتفاق مسبق وانتفاء الربا.",
    link: "https://alifta.gov.sa",
  },
  {
    icon: BookOpen,
    source: "الشيخ عبدالعزيز بن باز",
    reference: "رحمه الله",
    ruling:
      "التورق جائز لتحصيل السيولة النقدية بشرط أن لا يكون فيه ربا، وأن يتم البيع لطرف ثالث مستقل عن البائع الأصلي.",
    link: "https://alifta.gov.sa",
  },
  {
    icon: BookOpen,
    source: "الشيخ محمد بن عثيمين",
    reference: "رحمه الله",
    ruling:
      "التورق جائز إذا استوفى الشروط الشرعية: أن تكون السلعة حقيقية، وأن يتم قبضها فعليا، وأن يُباع لغير البائع الأصلي.",
    link: "https://islamqa.info/en/45042",
  },
  {
    icon: Scale,
    source: "مجمع الفقه الإسلامي",
    reference: "الدورة 15 لعام 1998",
    ruling:
      "التورق مباح شرعا إذا تم حيازة السلعة حيازة حقيقية وبيعت لطرف مستقل، مع انتفاء أي ترتيب مسبق يجعلها صورية.",
    link: "https://islamqa.info",
  },
]

const compliancePoints = [
  "نشتري الجهاز بشكل حقيقي من متجر معتمد (نون / اكسترا / المنيع)",
  "نقوم بقبض السلعة فعليا ونتملكها حقيقة",
  "نبيع الجهاز لطرف ثالث مستقل تماما عن البائع الأصلي",
  "لا يوجد اتفاق مسبق بين أطراف البيع",
  "الرسوم واضحة وشفافة بنسبة 10-14% كنسبة شراكة",
  "العميل يتحكم بالكامل في جميع خطوات العملية",
]

export default function ShariahPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                الامتثال الشرعي
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                الامتثال الشرعي في خدمات التورق - سيولة نقدية بدون ربا
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                خدمات مطر مبنية على مبدأ التورق المباح شرعا، وهو شراء سلعة بالأجل ثم بيعها نقدا لطرف ثالث مستقل للحصول على سيولة نقدية فورية. نلتزم بالضوابط الشرعية المعتمدة من كبار العلماء.
              </p>
            </div>

            {/* What is Tawarruq */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    ما هو التورق المباح؟
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    التورق هو أن يشتري الشخص سلعة بثمن مؤجل (عبر تابي أو تمارا أو مدفوع) ثم يبيعها نقدا لطرف ثالث مستقل للحصول على سيولة نقدية. هذا النوع من المعاملات جائز شرعا عند جمهور العلماء بشرط ألا يكون هناك اتفاق مسبق مع البائع الأصلي، وأن تتم حيازة السلعة فعليا. خدمات مطر عبر سلفة تابي وسلفة تمارا تحقق هذه الشروط من خلال الشراكة الحقيقية في شراء الجهاز.
                  </p>
                </div>
              </div>
            </div>

            {/* Fatwas Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                الفتاوى والأدلة الشرعية
              </h2>
              <div className="grid gap-4">
                {fatwas.map((fatwa, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                        <fatwa.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-foreground">
                            {fatwa.source}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            - {fatwa.reference}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {fatwa.ruling}
                        </p>
                        <a
                          href={fatwa.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          المصدر: {fatwa.link}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banking Usage */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    التورق في البنوك السعودية
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {"وفقا لتقرير التمويل الإسلامي لعام 2025، فإن أكثر من 80% من البنوك السعودية تستخدم آلية التورق المباح كوسيلة لتوفير السيولة النقدية لعملائها. هذا يؤكد أن التورق آلية مالية معتمدة وآمنة عند استيفاء الشروط الشرعية، وهو ما نلتزم به في خدمات سيولة تابي وكاش تمارا."}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Compliance */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                كيف نلتزم بالضوابط الشرعية
              </h2>
              <div className="grid gap-3">
                {compliancePoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">
                تنبيه مهم
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                المعلومات المقدمة في هذه الصفحة هي للتوضيح والتعريف بالأساس الشرعي لخدماتنا. نحن لا نصدر فتاوى ولا نزعم أننا جهة إفتاء. ما ذكرناه هو نتيجة بحثنا واجتهادنا في الأحكام الشرعية المتعلقة بالتورق.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ننصح كل عميل بالرجوع إلى عالم شرعي موثوق للحصول على فتوى شخصية تناسب حالته. يمكنك التواصل مع{" "}
                <a
                  href="https://alifta.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  اللجنة الدائمة للبحوث العلمية والإفتاء
                </a>
                {" "}للحصول على فتوى رسمية.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                هل لديك استفسار عن الجانب الشرعي لخدماتنا؟
              </p>
              <Link
                href="https://wa.me/966563457734"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                تواصل معنا عبر واتساب
              </Link>
            </div>

            <div className="text-center text-muted-foreground text-sm pt-8">
              <p>{"آخر تحديث: فبراير 2026"}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
