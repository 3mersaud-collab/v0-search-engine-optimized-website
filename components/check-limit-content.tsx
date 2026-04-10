"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard, CheckCircle, ExternalLink, ArrowLeft, Smartphone, ShoppingCart, AlertTriangle, Camera, MessageCircle, Star } from "lucide-react"
import { TabbyLogo, TamaraLogo, MadfuLogo } from "@/components/app-logos"
import Link from "next/link"

const apps = [
  {
    id: "tabby",
    name: "Tabby",
    nameAr: "تابي",
    Logo: TabbyLogo,
    color: "from-[#3CBED8]/10 to-[#3CBED8]/5",
    borderColor: "border-[#3CBED8]/30",
    selectedColor: "border-[#3CBED8] bg-[#3CBED8]/10",
    accentColor: "bg-[#3CBED8]",
    steps: [
      "افتح حاسبة السيولة واختر المبلغ المطلوب",
      "ادخل متجر نون أو اكسترا",
      "أضف أي منتجات في السلة بنفس مبلغ الشراء من الحاسبة",
      "عند الدفع اختر تابي كوسيلة دفع",
      "بعد ظهور تقسيم الدفعات صور الشاشة فقط",
      "أرسل الصورة لنا على واتساب واستلم الكاش خلال ساعة"
    ],
    stores: [
      { name: "نون", url: "https://www.noon.com/saudi-ar/electronics/" },
      { name: "اكسترا", url: "https://www.extra.com/ar-sa/mobiles-tablets/mobiles/c/2-212/facet/?q=%3Arelevance%3AinStock%3Atrue%3Atype%3APRODUCT" }
    ],
    warning: null
  },
  {
    id: "tamara",
    name: "Tamara",
    nameAr: "تمارا",
    Logo: TamaraLogo,
    color: "from-[#FF6B35]/10 to-[#FF6B35]/5",
    borderColor: "border-[#FF6B35]/30",
    selectedColor: "border-[#FF6B35] bg-[#FF6B35]/10",
    accentColor: "bg-[#FF6B35]",
    steps: [
      "افتح حاسبة السيولة واختر المبلغ المطلوب",
      "ادخل متجر نون أو اكسترا",
      "أضف أي منتجات في السلة بنفس مبلغ الشراء من الحاسبة",
      "عند الدفع اختر تمارا كوسيلة دفع",
      "أكمل الطلب واضغط على 'ادفع'",
      "أضف بطاقة بنكية بدون رصيد (مهم جداً)",
      "اضغط على 'ادفع' وصور الشاشة وارسلها لنا",
      "أرسل الصورة لنا على واتساب واستلم الكاش خلال ساعة"
    ],
    stores: [
      { name: "نون", url: "https://www.noon.com/saudi-ar/electronics/" },
      { name: "اكسترا", url: "https://www.extra.com/ar-sa/mobiles-tablets/mobiles/c/2-212/facet/?q=%3Arelevance%3AinStock%3Atrue%3Atype%3APRODUCT" }
    ],
    warning: {
      title: "تنبيهات مهمة لتمارا",
      items: [
        "لا تستخدم Apple Pay نهائياً",
        "لا تستخدم بطاقة فيها رصيد",
        "لا تستخدم البطاقة المضافة مسبقاً في تمارا",
        "استخدم بطاقة بنكية جديدة بدون رصيد فقط"
      ]
    }
  },
  {
    id: "madfu",
    name: "Madfu",
    nameAr: "مدفوع",
    Logo: MadfuLogo,
    color: "from-[#6366F1]/10 to-[#6366F1]/5",
    borderColor: "border-[#6366F1]/30",
    selectedColor: "border-[#6366F1] bg-[#6366F1]/10",
    accentColor: "bg-[#6366F1]",
    steps: [
      "افتح حاسبة السيولة واختر المبلغ المطلوب",
      "ادخل متجر المنيع",
      "أضف أي منتجات في السلة بنفس مبلغ الشراء من الحاسبة",
      "عند الدفع اختر مدفوع كوسيلة دفع",
      "بعد ظهور تقسيم الدفعات صور الشاشة فقط",
      "أرسل الصورة لنا على واتساب واستلم الكاش خلال ساعة"
    ],
    stores: [
      { name: "المنيع", url: "https://www.almanea.sa/mobiles-tablets-c-7423/mobiles-c-7424" }
    ],
    warning: null
  }
]

export function CheckLimitContent() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <CreditCard className="w-4 h-4 inline ml-2" />
            افحص حدك واطلب السيولة
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            احصل على سيولة تابي وكاش تمارا بخطوات بسيطة
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختر التطبيق واتبع الخطوات للحصول على سيولة فورية خلال ساعة
          </p>
        </div>

        {/* Reviews Request Box */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">اطلب تعاملاتنا السابقة وآراء العملاء</h3>
                <p className="text-sm text-muted-foreground">تواصل معنا على واتساب لرؤية تقييمات وتجارب عملائنا السابقين</p>
              </div>
              <Button className="gap-2" asChild>
                <a href="https://wa.me/966563457734">
                  <MessageCircle className="w-4 h-4" />
                  واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* App Selection */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app.id === selectedApp ? null : app.id)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedApp === app.id
                    ? `${app.selectedColor} shadow-lg scale-[1.02]`
                    : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="h-12 mb-4 flex items-center justify-center">
                  <app.Logo className="w-24 h-10" />
                </div>
                <span className="font-semibold text-foreground">{app.nameAr}</span>
                <p className="text-xs text-muted-foreground mt-1">
                  {app.stores.map(s => s.name).join(" - ")}
                </p>
              </button>
            ))}
          </div>

          {/* Selected App Instructions */}
          {selectedApp && (
            <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
              {apps.filter(app => app.id === selectedApp).map((app) => (
                <div key={app.id}>
                  {/* App Header */}
                  <div className={`bg-gradient-to-r ${app.color} p-6 border-b border-border`}>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-12 flex items-center justify-center bg-card/50 rounded-lg p-2">
                        <app.Logo className="w-16 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          سيولة {app.nameAr} - كاش {app.nameAr}
                        </h3>
                        <p className="text-sm text-muted-foreground">خطوات الحصول على كاش من {app.nameAr}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Warning for Tamara */}
                    {app.warning && (
                      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/20 p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-amber-700 mb-2">{app.warning.title}</h5>
                            <ul className="space-y-1">
                              {app.warning.items.map((item, idx) => (
                                <li key={idx} className="text-sm text-amber-700 flex items-center gap-2">
                                  <span className="w-1 h-1 bg-amber-500 rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Steps */}
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-primary" />
                      خطوات الحصول على سيولة {app.nameAr}
                    </h4>
                    <div className="space-y-4 mb-6">
                      {app.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-8 h-8 ${app.accentColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-foreground pt-1">{step}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stores */}
                    <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <ShoppingCart className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">المتاجر المتاحة لـ {app.nameAr}</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {app.stores.map((store, idx) => (
                          <a
                            key={idx}
                            href={store.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-3 bg-card rounded-lg text-sm text-foreground hover:bg-primary/10 transition-colors border border-border font-medium"
                          >
                            {store.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="flex-1 gap-2" asChild>
                        <a href="https://wa.me/966563457734">
                          أرسل الصورة واستلم كاش خلال ساعة
                          <ArrowLeft className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/#calculator">حاسبة السيولة</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tips Section */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Smartphone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-3">نصائح لزيادة حدك الائتماني في تابي وتمارا</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>أكمل ملفك الشخصي بالكامل في التطبيق لزيادة سقف السيولة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>اربط حسابك البنكي لرفع حد الكاش المتاح</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>سدد أقساطك في موعدها للحصول على سيولة أكبر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>استخدم التطبيق بانتظام لزيادة حد السلفة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calculator CTA */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/#calculator" className="gap-2">
                احسب المبلغ في حاسبة السيولة
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
