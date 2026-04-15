import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية | حماية البيانات الشخصية",
  description:
    "سياسة الخصوصية لموقع مطر - نلتزم بحماية بياناتك الشخصية وفقا لنظام حماية البيانات الشخصية السعودي (PDPL). تعرف على حقوقك وكيف نحمي معلوماتك.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
              سياسة الخصوصية
            </h1>
            <p className="text-center text-muted-foreground mb-12">
              {"ملتزمون بحماية بياناتك وفقا لنظام حماية البيانات الشخصية السعودي (PDPL)"}
            </p>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. مقدمة
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {"نلتزم في مطر بحماية خصوصية عملائنا وبياناتهم الشخصية وفقا لنظام حماية البيانات الشخصية السعودي (المرسوم الملكي رقم م/19 لعام 2021 المعدل 2023). توضح هذه السياسة كيف نجمع ونستخدم ونحمي بياناتك عند استخدام خدمات السيولة النقدية والسلفة الفورية عبر تابي وتمارا ومدفوع."}
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. البيانات التي نجمعها
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {"نجمع الحد الأدنى من البيانات اللازمة لتقديم الخدمة (مبدأ تقليل البيانات - المادة 4 من PDPL):"}
                </p>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>
                    <strong>بيانات التعريف:</strong> الاسم ورقم الجوال
                  </li>
                  <li>
                    <strong>بيانات التواصل:</strong> حساب الواتساب
                  </li>
                  <li>
                    <strong>بيانات مالية:</strong> رقم الآيبان (IBAN) لتحويل مبلغ السيولة
                  </li>
                  <li>
                    <strong>بيانات الطلب:</strong> لقطات شاشة الطلب من المتجر
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>لا نجمع:</strong> كلمات مرور، بيانات بطاقات بنكية، أو أي معلومات حساسة أخرى.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. الأساس القانوني للمعالجة
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {"نعالج بياناتك بناء على موافقتك الصريحة عند التواصل معنا وطلب الخدمة، ولغرض تنفيذ العقد (الشراكة في شراء الجهاز وتحويل السيولة). لا نعالج بياناتك لأي غرض آخر دون الحصول على موافقة إضافية منك."}
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. كيف نستخدم بياناتك
                </h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>تنفيذ طلب السيولة أو السلفة المطلوبة</li>
                  <li>تحويل المبلغ لحسابك البنكي</li>
                  <li>التواصل معك بخصوص حالة الطلب</li>
                  <li>الامتثال للمتطلبات التنظيمية والقانونية</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. حقوقك
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {"بموجب نظام حماية البيانات الشخصية السعودي وإرشادات هيئة البيانات والذكاء الاصطناعي (سدايا)، لديك الحقوق التالية:"}
                </p>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>
                    <strong>حق الوصول:</strong> الاطلاع على البيانات التي نحتفظ بها عنك
                  </li>
                  <li>
                    <strong>حق التصحيح:</strong> طلب تعديل أي بيانات غير دقيقة
                  </li>
                  <li>
                    <strong>حق الحذف:</strong> طلب حذف بياناتك الشخصية
                  </li>
                  <li>
                    <strong>حق الاعتراض:</strong> الاعتراض على معالجة بياناتك
                  </li>
                  <li>
                    <strong>حق النقل:</strong> طلب نسخة من بياناتك بصيغة قابلة للقراءة
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  لممارسة أي من هذه الحقوق، تواصل معنا عبر البريد الإلكتروني:{" "}
                  <a
                    href="mailto:matar@liilsa.com"
                    className="text-primary hover:underline"
                  >
                    matar@liilsa.com
                  </a>
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. حماية البيانات وأمنها
                </h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>
                    {"نطبق معايير الأمان المعتمدة من الهيئة الوطنية للأمن السيبراني (NCA)"}
                  </li>
                  <li>لا نشارك بياناتك مع أي طرف ثالث غير مصرح به</li>
                  <li>نستخدم اتصالات مشفرة لحماية البيانات المنقولة</li>
                  <li>الوصول للبيانات مقيد بالموظفين المعنيين فقط</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. الاحتفاظ بالبيانات
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحتفظ ببياناتك فقط للمدة اللازمة لتنفيذ الخدمة والامتثال للمتطلبات القانونية. بعد انتهاء الغرض، يتم حذف البيانات بشكل آمن وفقا لمبدأ تقليل البيانات المنصوص عليه في النظام.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. ملفات تعريف الارتباط (Cookies)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  نستخدم ملفات تعريف الارتباط الأساسية لتحسين تجربة التصفح وأدوات تحليلية (Google Analytics) لفهم كيفية استخدام الموقع. لا نستخدم ملفات تتبع لأغراض إعلانية من أطراف ثالثة.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. التواصل معنا
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  لأي استفسارات تتعلق بالخصوصية أو لممارسة حقوقك:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>
                    <strong>البريد الإلكتروني:</strong>{" "}
                    <a
                      href="mailto:matar@liilsa.com"
                      className="text-primary hover:underline"
                    >
                      matar@liilsa.com
                    </a>
                  </li>
                  <li>
                    <strong>واتساب:</strong>{" "}
                    <a
                      href="https://wa.me/966548613381"
                      className="text-primary hover:underline"
                    >
                      0548613381
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. تحديث السياسة
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحتفظ بحق تعديل هذه السياسة بما يتوافق مع التحديثات التنظيمية. سيتم إشعارك بأي تغييرات جوهرية عبر قنوات التواصل المتاحة.
                </p>
              </div>

              <div className="text-center text-muted-foreground text-sm pt-8">
                <p>{"آخر تحديث: فبراير 2026"}</p>
                <p className="mt-2">
                  {"متوافق مع نظام حماية البيانات الشخصية السعودي (PDPL) وإرشادات هيئة البيانات والذكاء الاصطناعي (سدايا)"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
