"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
              الشروط والأحكام
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. مقدمة</h2>
                <p className="text-muted-foreground leading-relaxed">
                  مرحباً بك في liilsol. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                  نقدم خدمة تحويل رصيد تطبيقات الدفع الآجل (تابي، تمارا، مدفوع) إلى سيولة نقدية.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. طبيعة الخدمة</h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>نقوم بشراء منتجات من المتاجر الإلكترونية نيابة عنك باستخدام رصيدك في تابي أو تمارا أو مدفوع</li>
                  <li>يتم بيع المنتجات في السوق وتحويل المبلغ المتبقي لحسابك البنكي</li>
                  <li>أنت المسؤول عن سداد الأقساط للتطبيق المستخدم (تابي/تمارا/مدفوع)</li>
                  <li>نحن وسطاء فقط ولا نتحمل مسؤولية أي خلاف بينك وبين التطبيقات</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. الرسوم والخصومات</h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li><strong>الدفعة الأولى:</strong> 25% من مبلغ الشراء (تُدفع من قبلنا وتُخصم من مبلغ البيع)</li>
                  <li><strong>الرسوم الإدارية:</strong> 10% من مبلغ الشراء</li>
                  <li><strong>فرق البيع:</strong> يتراوح بين 10% إلى 15% حسب المبلغ</li>
                  <li>جميع الرسوم واضحة في حاسبة السيولة قبل تأكيد الطلب</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. مسؤولية العميل</h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>التأكد من وجود رصيد كافٍ في التطبيق المختار</li>
                  <li>تقديم معلومات صحيحة ودقيقة</li>
                  <li>الالتزام بسداد الأقساط في موعدها للتطبيق</li>
                  <li>عدم إلغاء الطلب بعد تأكيده من جانبنا</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. مسؤوليتنا</h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>تنفيذ الطلب خلال ساعتين من التأكيد</li>
                  <li>تحويل المبلغ المتفق عليه لحسابك البنكي</li>
                  <li>الشفافية الكاملة في جميع الرسوم والخصومات</li>
                  <li>حماية بياناتك وعدم مشاركتها مع أي طرف ثالث</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. سياسة الخصوصية</h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>نجمع فقط البيانات الضرورية لتنفيذ الخدمة</li>
                  <li>لا نطلب كلمات مرور أو بيانات حساسة</li>
                  <li>بياناتك محفوظة بشكل آمن ولا تُشارك مع أطراف خارجية</li>
                  <li>يمكنك طلب حذف بياناتك في أي وقت</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. إلغاء الطلب</h2>
                <ul className="text-muted-foreground space-y-3 list-disc list-inside">
                  <li>يمكن إلغاء الطلب قبل تأكيده من جانبنا</li>
                  <li>بعد التأكيد وبدء التنفيذ، لا يمكن إلغاء الطلب</li>
                  <li>في حالة وجود مشكلة تقنية من جانبنا، نلتزم بإعادة أي مبالغ محصلة</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. التواصل والشكاوى</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  لأي استفسار أو شكوى، يمكنك التواصل معنا عبر:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>واتساب:</strong> 0590360039</li>
                  <li><strong>البريد:</strong> liilsol.support@liilsa.com</li>
                  <li><strong>انستقرام:</strong> @liilsa.sol</li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. تعديل الشروط</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحتفظ بحق تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعارك بأي تغييرات جوهرية 
                  عبر قنوات التواصل المتاحة. استمرارك في استخدام الخدمة يعني موافقتك على الشروط المحدثة.
                </p>
              </div>

              <div className="text-center text-muted-foreground text-sm pt-8">
                <p>آخر تحديث: فبراير 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
