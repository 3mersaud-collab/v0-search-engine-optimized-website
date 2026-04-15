"use client"

import React, { useState, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Calculator, CheckCircle2, Phone, User, Loader2, Upload,
  Store, ArrowRight, ArrowLeft, ImageIcon, ExternalLink,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const appOptions = [
  { id: "tabby", name: "تابي", label: "tabby", color: "text-[#3CBED8]", border: "border-[#3CBED8] bg-[#3CBED8]/5", screenshotLabel: "صورة صفحة تقسيم الدفعات من تابي" },
  { id: "tamara", name: "تمارا", label: "tamara", color: "text-[#FF6B35]", border: "border-[#FF6B35] bg-[#FF6B35]/5", screenshotLabel: "صورة الشاشة من تمارا" },
  { id: "madfu", name: "مدفوع", label: "مدفوع", color: "text-[#4361EE]", border: "border-[#4361EE] bg-[#4361EE]/5", screenshotLabel: "صورة صفحة تقسيم الدفعات من مدفوع" },
]

const storeOptions = [
  { id: "extra", name: "اكسترا", url: "https://www.extra.com/ar-sa/", color: "bg-[#0046be]/10 border-[#0046be]/30 text-[#0046be]" },
  { id: "noon", name: "نون", url: "https://www.noon.com/saudi-ar/", color: "bg-[#f5d100]/10 border-[#f5d100]/30 text-[#b39600]" },
  { id: "almunayes", name: "المنيع", url: "https://www.almunayes.com.sa/ar/", color: "bg-[#c8102e]/10 border-[#c8102e]/30 text-[#c8102e]" },
]

export default function OrderPage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [app, setApp] = useState("")
  const [netRequested, setNetRequested] = useState("")
  const [selectedStore, setSelectedStore] = useState("")
  const [screenshotUrl, setScreenshotUrl] = useState("")
  const [screenshotPreview, setScreenshotPreview] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  // Reverse calculation: user enters net (cash they want), we calculate purchase amount
  const netAmount = Number(netRequested) || 0

  const getSaleDiffPercent = (amt: number) => {
    if (amt >= 12000) return 10
    if (amt >= 5500) {
      const stepsAbove5500 = Math.floor((amt - 5500) / 1000)
      return Math.max(10, 14 - stepsAbove5500)
    }
    return 15
  }

  // Reverse formula: net = purchase - (purchase * saleDiff%) - (purchase * 10% + extra) - (purchase * 25%)
  // net = purchase * (1 - saleDiff% - 10% - 25%) - extra
  // For amounts < 4000: extra = 100
  // We iterate to find the right purchase amount
  const calculateFromNet = useCallback((net: number) => {
    if (net <= 0) return { purchaseAmount: 0, saleAmount: 0, adminFee: 0, firstPayment: 0, finalAmount: 0, remainingInstallment: 0, saleDiffPercent: 15 }

    // Try different purchase amounts to find one that gives the requested net
    let low = net
    let high = net * 4
    let bestPurchase = 0

    for (let i = 0; i < 50; i++) {
      const mid = Math.round((low + high) / 2)
      const sdp = getSaleDiffPercent(mid)
      const sa = mid * (1 - sdp / 100)
      const af = mid * 0.10 + (mid < 4000 ? 100 : 0)
      const fp = mid * 0.25
      const fa = sa - af - fp

      if (Math.abs(fa - net) < 10) {
        bestPurchase = mid
        break
      }
      if (fa < net) {
        low = mid + 1
      } else {
        high = mid - 1
      }
      bestPurchase = mid
    }

    const sdp = getSaleDiffPercent(bestPurchase)
    const sa = bestPurchase * (1 - sdp / 100)
    const af = bestPurchase * 0.10 + (bestPurchase < 4000 ? 100 : 0)
    const fp = bestPurchase * 0.25
    const fa = sa - af - fp
    const ri = bestPurchase - fp

    return {
      purchaseAmount: bestPurchase,
      saleAmount: Math.round(sa),
      adminFee: Math.round(af),
      firstPayment: Math.round(fp),
      finalAmount: Math.round(fa),
      remainingInstallment: Math.round(ri),
      saleDiffPercent: sdp,
    }
  }, [])

  const calc = calculateFromNet(netAmount)
  const selectedAppData = appOptions.find(a => a.name === app)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Show preview immediately
    const reader = new FileReader()
    reader.onload = (ev) => {
      setScreenshotPreview(ev.target?.result as string)
    }
    reader.readAsDataURL(file)

    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch("/api/upload", { method: "POST", body: formData })
      const data = await res.json()
      if (data.url) {
        setScreenshotUrl(data.url)
      } else {
        alert(data.error || "فشل رفع الصورة")
        setScreenshotPreview("")
      }
    } catch {
      alert("حدث خطأ في رفع الصورة")
      setScreenshotPreview("")
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const appMap: Record<string, string> = { "تابي": "tabby", "تمارا": "tamara", "مدفوع": "madfu" }
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          customer_phone: phone,
          app_type: appMap[app] || app,
          purchase_amount: calc.purchaseAmount,
          sale_amount: calc.saleAmount,
          admin_fee: calc.adminFee,
          first_payment: calc.firstPayment,
          final_amount: calc.finalAmount,
          remaining_installment: calc.remainingInstallment,
          net_requested: netAmount,
          store_name: selectedStore,
          screenshot_url: screenshotUrl,
          bank_name: "",
          iban: "",
          notes: `المتجر: ${selectedStore}`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setOrderNumber(data.order.order_number)
        const message = `تم تقديم طلب جديد ✅%0Aرقم الطلب: ${data.order.order_number}%0A%0Aالاسم: ${name}%0Aالجوال: ${phone}%0Aالتطبيق: ${app}%0Aالصافي المطلوب: ${netAmount.toLocaleString()} ريال%0Aقيمة الشراء: ${calc.purchaseAmount.toLocaleString()} ريال%0Aالمتجر: ${selectedStore}%0A%0Aالصورة مرفقة في لوحة التحكم`
        window.open(`https://wa.me/966548613381?text=${message}`, "_blank")
        setIsSubmitted(true)
      } else {
        alert(data.error || "حدث خطأ")
      }
    } catch {
      alert("حدث خطأ في إرسال الطلب")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">تم إرسال طلبك بنجاح!</h1>
              {orderNumber && (
                <p className="text-lg text-primary font-bold mb-4">رقم الطلب: {orderNumber}</p>
              )}
              <p className="text-muted-foreground mb-6">سيتواصل معك فريقنا خلال دقائق على واتساب لإكمال العملية.</p>
              <div className="bg-card rounded-2xl p-6 border border-border mb-8 text-right">
                <h3 className="font-bold text-foreground mb-4 text-center">ملخص طلبك</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-foreground font-medium">{name}</span><span className="text-muted-foreground">الاسم:</span></div>
                  <div className="flex justify-between"><span className="text-foreground font-medium">{app}</span><span className="text-muted-foreground">التطبيق:</span></div>
                  <div className="flex justify-between"><span className="text-foreground font-medium">{netAmount.toLocaleString()} ريال</span><span className="text-muted-foreground">الصافي المطلوب:</span></div>
                  <div className="flex justify-between"><span className="text-foreground font-medium">{calc.purchaseAmount.toLocaleString()} ريال</span><span className="text-muted-foreground">قيمة الشراء:</span></div>
                  <div className="flex justify-between"><span className="text-foreground font-medium">{selectedStore}</span><span className="text-muted-foreground">المتجر:</span></div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-primary font-bold">{calc.finalAmount.toLocaleString()} ريال</span>
                    <span className="text-muted-foreground">ستستلم:</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild><a href="https://wa.me/966548613381" target="_blank" rel="noopener noreferrer">فتح واتساب</a></Button>
                <Button variant="outline" asChild className="bg-transparent"><Link href="/track">تتبع الطلب</Link></Button>
                <Button variant="outline" asChild className="bg-transparent"><Link href="/">العودة للرئيسية</Link></Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">طلب سيولة - أولوية</span>
            <h1 className="text-4xl font-bold text-foreground mb-4">اطلب سيولتك بأولوية</h1>
            <p className="text-muted-foreground text-lg">الطلب عبر الموقع يمنحك أولوية في المعالجة وتتبع لحظي</p>
          </div>
        </div>
      </section>

      {/* Steps indicator */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              {[
                { num: 1, label: "البيانات" },
                { num: 2, label: "المبلغ" },
                { num: 3, label: "المتجر" },
                { num: 4, label: "الصورة" },
              ].map((s, i) => (
                <React.Fragment key={s.num}>
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step >= s.num ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
                    </div>
                    <span className="text-[10px] md:text-xs text-muted-foreground">{s.label}</span>
                  </div>
                  {i < 3 && <div className={`w-8 md:w-12 h-1 rounded mt-[-16px] ${step > s.num ? "bg-primary" : "bg-secondary"}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              
              {/* Step 1: Name + Phone */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-2">
                    <User className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-foreground">البيانات الشخصية</h2>
                    <p className="text-sm text-muted-foreground">نحتاج اسمك ورقم جوالك فقط</p>
                  </div>
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">الاسم</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك هنا" className="pr-11" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">رقم الجوال (واتساب)</Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="05xxxxxxxx" dir="ltr" className="pr-11 text-left" />
                    </div>
                  </div>
                  <Button type="button" size="lg" className="w-full gap-2" onClick={() => setStep(2)} disabled={!name || !phone}>
                    التالي <ArrowLeft className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {/* Step 2: Net amount + App selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-2">
                    <Calculator className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-foreground">المبلغ والتطبيق</h2>
                    <p className="text-sm text-muted-foreground">أدخل الصافي اللي تبغاه واختر التطبيق</p>
                  </div>

                  <div>
                    <Label htmlFor="net" className="block text-sm font-medium text-foreground mb-2">
                      كم تبغى تستلم كاش؟ (الصافي)
                    </Label>
                    <Input
                      id="net" type="number" value={netRequested}
                      onChange={(e) => setNetRequested(e.target.value)}
                      placeholder="مثال: 2000"
                      min="500" className="text-lg text-center font-bold"
                    />
                    <p className="text-xs text-muted-foreground mt-1 text-center">هذا المبلغ اللي بيتحول لحسابك البنكي</p>
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-3">اختر التطبيق</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {appOptions.map((opt) => (
                        <button key={opt.id} type="button" onClick={() => setApp(opt.name)}
                          className={`py-4 px-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                            app === opt.name ? opt.border : "border-border hover:border-primary/30"
                          }`}
                        >
                          <span className={`text-lg font-bold ${opt.color}`}>{opt.label}</span>
                          <span className="text-xs font-medium text-muted-foreground">{opt.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {netAmount >= 500 && calc.purchaseAmount > 0 && (
                    <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-primary" />
                        تفاصيل الحساب
                      </h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{calc.purchaseAmount.toLocaleString()} ريال</span>
                        <span className="text-muted-foreground">قيمة الشراء المطلوبة</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-red-500">- {(calc.purchaseAmount - calc.saleAmount).toLocaleString()} ريال</span>
                        <span className="text-muted-foreground">فرق البيع ({calc.saleDiffPercent}%)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-red-500">- {calc.adminFee.toLocaleString()} ريال</span>
                        <span className="text-muted-foreground">الرسوم الإدارية (10%{calc.purchaseAmount < 4000 ? " + 100" : ""})</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-red-500">- {calc.firstPayment.toLocaleString()} ريال</span>
                        <span className="text-muted-foreground">الدفعة الأولى (25%)</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-border font-bold">
                        <span className="text-primary text-lg">{calc.finalAmount.toLocaleString()} ريال</span>
                        <span className="text-foreground">الصافي المستلم</span>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" className="flex-1 bg-transparent gap-2" onClick={() => setStep(1)}>
                      <ArrowRight className="w-5 h-5" /> السابق
                    </Button>
                    <Button type="button" size="lg" className="flex-1 gap-2" onClick={() => setStep(3)} disabled={!app || netAmount < 500}>
                      التالي <ArrowLeft className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Store selection + instructions */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-2">
                    <Store className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-foreground">اختر المتجر</h2>
                    <p className="text-sm text-muted-foreground">اختر المتجر ثم اتبع الخطوات</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {storeOptions.map((s) => (
                      <button key={s.id} type="button" onClick={() => setSelectedStore(s.name)}
                        className={`py-4 px-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          selectedStore === s.name ? s.color : "border-border hover:border-primary/30"
                        }`}
                      >
                        <Store className="w-6 h-6" />
                        <span className="text-sm font-bold">{s.name}</span>
                      </button>
                    ))}
                  </div>

                  {selectedStore && (
                    <div className="bg-primary/5 rounded-xl p-5 border border-primary/20 space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        خطوات الشراء من {selectedStore}
                      </h4>
                      <ol className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</span>
                          <span>ادخل متجر {selectedStore} واختر جوال بقيمة <strong className="text-foreground">{calc.purchaseAmount.toLocaleString()} ريال</strong> تقريباً</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</span>
                          <span>عند الدفع اختر <strong className="text-foreground">{app}</strong> كطريقة دفع</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</span>
                          <span>أكمل عملية الشراء وادفع الدفعة الأولى <strong className="text-foreground">{calc.firstPayment.toLocaleString()} ريال</strong></span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</span>
                          <span>
                            {app === "تمارا"
                              ? "صوّر الشاشة من تمارا وأرسلها لنا"
                              : `صوّر صفحة تقسيم الدفعات من ${app}`
                            }
                          </span>
                        </li>
                      </ol>

                      <Button className="w-full gap-2 bg-transparent" variant="outline" asChild>
                        <a href={storeOptions.find(s => s.name === selectedStore)?.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          افتح متجر {selectedStore}
                        </a>
                      </Button>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" className="flex-1 bg-transparent gap-2" onClick={() => setStep(2)}>
                      <ArrowRight className="w-5 h-5" /> السابق
                    </Button>
                    <Button type="button" size="lg" className="flex-1 gap-2" onClick={() => setStep(4)} disabled={!selectedStore}>
                      التالي <ArrowLeft className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Screenshot upload + submit */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-2">
                    <Upload className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h2 className="text-xl font-bold text-foreground">ارفق الصورة</h2>
                    <p className="text-sm text-muted-foreground">
                      {selectedAppData?.screenshotLabel || "ارفق صورة التقسيط"}
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                    {screenshotPreview ? (
                      <div className="space-y-4">
                        <img src={screenshotPreview || "/placeholder.svg"} alt="صورة التقسيط" className="max-h-64 mx-auto rounded-lg shadow-md" />
                        {isUploading && (
                          <div className="flex items-center justify-center gap-2 text-primary">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="text-sm">جاري رفع الصورة...</span>
                          </div>
                        )}
                        {screenshotUrl && !isUploading && (
                          <div className="flex items-center justify-center gap-2 text-green-600">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="text-sm">تم رفع الصورة بنجاح</span>
                          </div>
                        )}
                        <Button variant="outline" size="sm" className="bg-transparent" onClick={() => { setScreenshotPreview(""); setScreenshotUrl("") }}>
                          تغيير الصورة
                        </Button>
                      </div>
                    ) : (
                      <label className="cursor-pointer block">
                        <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                        <p className="text-foreground font-medium mb-1">اضغط لرفع الصورة</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG حتى 10MB</p>
                        <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                      </label>
                    )}
                  </div>

                  {/* Order summary */}
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <h4 className="font-bold text-foreground mb-3 text-center">ملخص الطلب</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-foreground">{name}</span><span className="text-muted-foreground">الاسم:</span></div>
                      <div className="flex justify-between"><span className="text-foreground">{phone}</span><span className="text-muted-foreground">الجوال:</span></div>
                      <div className="flex justify-between"><span className="text-foreground">{app}</span><span className="text-muted-foreground">التطبيق:</span></div>
                      <div className="flex justify-between"><span className="text-foreground">{selectedStore}</span><span className="text-muted-foreground">المتجر:</span></div>
                      <div className="flex justify-between"><span className="text-foreground">{calc.purchaseAmount.toLocaleString()} ريال</span><span className="text-muted-foreground">قيمة الشراء:</span></div>
                      <div className="flex justify-between pt-2 border-t border-primary/20">
                        <span className="text-primary font-bold text-lg">{calc.finalAmount.toLocaleString()} ريال</span>
                        <span className="text-foreground font-bold">ستستلم:</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" className="flex-1 bg-transparent gap-2" onClick={() => setStep(3)}>
                      <ArrowRight className="w-5 h-5" /> السابق
                    </Button>
                    <Button type="button" size="lg" className="flex-1 gap-2" onClick={handleSubmit}
                      disabled={isSubmitting || isUploading || !screenshotUrl}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> جاري الإرسال...</>
                      ) : (
                        <><CheckCircle2 className="w-5 h-5" /> إرسال الطلب</>
                      )}
                    </Button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
