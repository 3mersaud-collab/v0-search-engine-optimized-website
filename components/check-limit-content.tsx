"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CreditCard, CheckCircle, ExternalLink, ArrowLeft, Smartphone, ShoppingCart, AlertTriangle, Camera, MessageCircle, Star } from "lucide-react"
import { TabbyLogo } from "@/components/app-logos"
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
      "افتح حاسبة سلفة تابي واختر المبلغ المطلوب",
      "ادخل متجر نون أو اكسترا",
      "أضف أي منتجات في السلة بنفس مبلغ الشراء من الحاسبة",
      "عند الدفع اختر تابي كوسيلة دفع",
      "بعد ظهور تقسيم الدفعات صور الشاشة فقط",
      "أرسل الصورة لنا على واتساب واستلم سلفة تابي خلال ساعتين"
    ],
    stores: [
      { name: "نون", url: "https://www.noon.com/saudi-ar/electronics/" },
      { name: "اكسترا", url: "https://www.extra.com/ar-sa/mobiles-tablets/mobiles/c/2-212/facet/?q=%3Arelevance%3AinStock%3Atrue%3Atype%3APRODUCT" }
    ],
    warning: null,
    comparison: "تابي أسهل وأسرع من تمارا - لا تحتاج إضافة بطاقة بنكية أو الضغط على ادفع"
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
            افحص حدك واطلب سلفة تابي
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            احصل على سلفة تابي بخطوات بسيطة
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اتبع الخطوات للحصول على سلفة تابي فورية خلال ساعتين - أسهل وأسرع من تمارا
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
                <a href="https://wa.me/966590360039">
                  <MessageCircle className="w-4 h-4" />
                  واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* App Selection */}
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app.id === selectedApp ? null : app.id)}
                className={`p-8 rounded-2xl border-2 transition-all w-full max-w-md ${
                  selectedApp === app.id
                    ? `${app.selectedColor} shadow-lg scale-[1.02]`
                    : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div className="h-14 mb-4 flex items-center justify-center">
                  <app.Logo className="w-32 h-12" />
                </div>
                <span className="font-bold text-lg text-foreground">سلفة {app.nameAr}</span>
                <p className="text-sm text-muted-foreground mt-2">
                  {app.stores.map(s => s.name).join(" - ")}
                </p>
                <p className="text-xs text-primary mt-2">أفضل وأسرع من تمارا</p>
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

                    {/* Comparison Note */}
                    {app.comparison && (
                      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6">
                        <p className="text-sm text-foreground flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {app.comparison}
                        </p>
                      </div>
                    )}

                    {/* Steps */}
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-primary" />
                      خطوات الحصول على سلفة {app.nameAr}
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
                        <a href="https://wa.me/966590360039">
                          أرسل الصورة واستلم كاش خلال ساعتين
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
                <h4 className="font-bold text-foreground mb-3">نصائح لزيادة حدك الائتماني في تابي</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>أكمل ملفك الشخصي بالكامل في تابي لزيادة سقف سلفة تابي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>اربط حسابك البنكي لرفع حد كاش تابي المتاح</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>سدد أقساطك في موعدها للحصول على سلفة تابي أكبر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>استخدم تابي بانتظام لزيادة حد السلفة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Calculator CTA */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/#calculator" className="gap-2">
                احسب المبلغ في حاسبة سلفة تابي
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
