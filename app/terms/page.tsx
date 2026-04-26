import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "الشروط والأحكام | شروط خدمة السيولة",
  description:
    "الشروط والأحكام لخدمات مطر - سيولة نقدية فورية. رسوم شفافة 10-14% بدون رسوم مخفية. متوافق مع نظام حماية البيانات الشخصية السعودي PDPL.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
              الشروط والأحكام
            </h1>
            <p className="text-center text-muted-foreground mb-12">
              {"شروط استخدام خدمات السيولة النقدية والسلفة"}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. مقدمة
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {"مرحبا بك في مطر. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. نقدم خدمة سيولة نقدية فورية بالدخول كشركاء معكم في شراء الأجهزة عبر تابي وتمارا ومدفوع ثم بيعها لطرف ثالث مستقل وتحويل السيولة لكم."}
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. طبيعة الخدمة
                </h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>
                    نقدم خدمة سيولة نقدية وسلفة فورية عبر الشراكة في الشراء
                  </li>
                  <li>
                    ندخل كشركاء معكم في شراء الأجهزة من المتاجر الإلكترونية (نون / اكسترا / المنيع) عبر رصيدك في تابي أو تمارا أو مدفوع
                  </li>
                  <li>
                    نتكفل بقيمة الدفعة الأولى (25%) مقابل نسبة الشراكة
                  </li>
                  <li>
                    يتم بيع الجهاز لطرف ثالث مستقل وتحويل مبلغ السيولة لحسابك البنكي
                  </li>
                  <li>
                    أنت المسؤول عن سداد الأقساط المتبقية للتطبيق المستخدم (تابي / تمارا / مدفوع)
                  </li>
                  <li>
                    {"لمزيد من التفاصيل عن الأساس الشرعي، يرجى زيارة صفحة "}
                    <Link
                      href="/shariah"
                      className="text-primary hover:underline"
                    >
                      الامتثال الشرعي
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. الرسوم والشفافية
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {"جميع الرسوم شفافة وواضحة، بدون أي رسوم مخفية (متوافق مع متطلبات نظام حماية البيانات الشخصية PDPL):"}
                </p>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>
                    <strong>الدفعة الأولى:</strong> {"25% من مبلغ الشراء (تُدفع من قبلنا وتُخصم من مبلغ البيع)"}
                  </li>
                  <li>
                    <strong>الرسوم الإدارية:</strong> 10% من مبلغ الشراء
                  </li>
                  <li>
                    <strong>فرق البيع:</strong> يتراوح بين 10% إلى 15% حسب المبلغ
                  </li>
                  <li>
                    <strong>إجمالي النسبة:</strong> {"10-14% من قيمة الجهاز (شاملة جميع الرسوم)"}
                  </li>
                  <li>
                    جميع الرسوم محسوبة مسبقا في{" "}
                    <Link
                      href="/#calculator"
                      className="text-primary hover:underline"
                    >
                      حاسبة السيولة
                    </Link>{" "}
                    قبل تأكيد الطلب
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. مدة التنفيذ
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  يتم تحويل السيولة لحسابك البنكي عادة خلال ساعة من اتمام العملية. هذه المدة تقريبية وقد تختلف بحسب عوامل خارجية مثل: اوقات معالجة البنوك، تأخر التطبيقات، أو أيام العطل الرسمية. لا نضمن وقتا محددا بالدقيقة لكن نلتزم بأسرع تنفيذ ممكن.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. مسؤولية العميل
                </h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>التأكد من وجود رصيد كافٍ في التطبيق المختار</li>
                  <li>تقديم معلومات صحيحة ودقيقة</li>
                  <li>الالتزام بسداد الأقساط في موعدها للتطبيق</li>
                  <li>عدم إلغاء الطلب بعد تأكيده من جانبنا</li>
                  <li>
                    يتحمل العميل كامل المسؤولية عن أي تأخر في سداد الأقساط للتطبيقات
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. مسؤوليتنا وحدودها
                </h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>
                    تنفيذ الطلب بأسرع وقت ممكن (عادة خلال ساعة)
                  </li>
                  <li>
                    تحويل المبلغ المتفق عليه لحسابك البنكي
                  </li>
                  <li>الشفافية الكاملة في جميع الرسوم والخصومات</li>
                  <li>
                    {"حماية بياناتك وفقا لنظام حماية البيانات الشخصية (PDPL)"}
                  </li>
                  <li>
                    لا نتحمل مسؤولية التأخيرات الناجمة عن أطراف ثالثة (بنوك، تطبيقات دفع)
                  </li>
                  <li>
                    لا نقدم ضمانات بخصوص الموافقة على حدود التطبيقات
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. حماية البيانات
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {"نلتزم بحماية بياناتك الشخصية وفقا لنظام حماية البيانات الشخصية السعودي (PDPL) وإرشادات هيئة البيانات والذكاء الاصطناعي (سدايا). لمزيد من التفاصيل، يرجى مراجعة "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    سياسة الخصوصية
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. إلغاء الطلب
                </h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>يمكن إلغاء الطلب قبل تأكيده من جانبنا</li>
                  <li>بعد التأكيد وبدء التنفيذ، لا يمكن إلغاء الطلب</li>
                  <li>
                    في حالة وجود مشكلة تقنية من جانبنا، نلتزم بإعادة أي مبالغ محصلة
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. القانون الحاكم
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  تخضع هذه الشروط والأحكام للأنظمة والقوانين المعمول بها في المملكة العربية السعودية. أي نزاع ينشأ عن استخدام الخدمة يخضع لاختصاص المحاكم السعودية المختصة.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. التواصل والشكاوى
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  لأي استفسار أو شكوى، يمكنك التواصل معنا عبر:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>
                    <strong>واتساب:</strong>{" "}
                    <a
                      href="https://wa.me/966503367637"
                      className="text-primary hover:underline"
                    >
                      0503367637
                    </a>
                  </li>
                  <li>
                    <strong>البريد:</strong>{" "}
                    <a
                      href="mailto:matar@liilsa.com"
                      className="text-primary hover:underline"
                    >
                      matar@liilsa.com
                    </a>
                  </li>
                  <li>
                    <strong>انستقرام:</strong>{" "}
                    <a
                      href="https://instagram.com/liilsa.sol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @liilsa.sol
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. تعديل الشروط
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحتفظ بحق تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعارك بأي تغييرات جوهرية عبر قنوات التواصل المتاحة. استمرارك في استخدام الخدمة يعني موافقتك على الشروط المحدثة.
                </p>
              </div>

              <div className="text-center text-muted-foreground text-sm pt-8">
                <p>{"آخر تحديث: فبراير 2026"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
