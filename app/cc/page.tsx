"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { FileText, Send, RefreshCw } from "lucide-react"
import Image from "next/image"

export default function InvoicePage() {
  // المدخلات
  const [purchaseAmount, setPurchaseAmount] = useState<string>("")
  const [saleAmount, setSaleAmount] = useState<string>("")
  const [downPayment, setDownPayment] = useState<string>("")
  const [clientPhone, setClientPhone] = useState<string>("")

  // الحسابات
  const purchase = parseFloat(purchaseAmount) || 0
  const sale = parseFloat(saleAmount) || 0
  const down = parseFloat(downPayment) || 0
  
  // الرسوم الإدارية: 10% + 100 للمبالغ أقل من 4000، و 10% فقط بعد 4000
  const adminFeeBase = purchase * 0.10
  const adminFeeExtra = purchase < 4000 && purchase > 0 ? 100 : 0
  const adminFee = adminFeeBase + adminFeeExtra
  
  const netAmount = sale - adminFee - down
  const remainingInstallment = purchase - down

  // إعادة تعيين
  const resetAll = () => {
    setPurchaseAmount("")
    setSaleAmount("")
    setDownPayment("")
    setClientPhone("")
  }

  // تنسيق رقم الجوال للواتساب
  const formatPhoneForWhatsApp = (phone: string) => {
    let cleaned = phone.replace(/\D/g, '')
    if (cleaned.startsWith('0')) {
      cleaned = '966' + cleaned.substring(1)
    }
    if (!cleaned.startsWith('966')) {
      cleaned = '966' + cleaned
    }
    return cleaned
  }

  // إرسال للواتساب
  const sendToWhatsApp = () => {
    if (!clientPhone) {
      alert("الرجاء إدخال رقم جوال العميل")
      return
    }

    const adminFeeLabel = purchase < 4000 && purchase > 0 ? "(10%+100)" : "(10%)"

    const message = `
━━━━━━━━━━━━━━━
    *مطر* | ملخص العملية
━━━━━━━━━━━━━━━

📋 *تفاصيل العملية:*

▫️ مبلغ الشراء: *${purchase.toLocaleString()} ر.س*
▫️ مبلغ البيع: *${sale.toLocaleString()} ر.س*
▫️ الرسوم الإدارية ${adminFeeLabel}: *${Math.round(adminFee).toLocaleString()} ر.س*
▫️ الدفعة الأولى: *${down.toLocaleString()} ر.س*

━━━━━━━━━━━━━━━
💰 *مجموع ما يتم تحويله إلى حسابك البنكي:*

▫️ إذا الدفعة عليك: *${Math.round(netAmount + down).toLocaleString()} ر.س*
▫️ إذا الدفعة علينا: *${Math.round(netAmount).toLocaleString()} ر.س*
━━━━━━━━━━━━━━━

📅 المتبقي للتقسيط: *${remainingInstallment.toLocaleString()} ر.س*

شكراً لثقتكم بنا 🙏
🌐 liilsol.com | مطر
    `.trim()

    const phoneNumber = formatPhoneForWhatsApp(clientPhone)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-8 px-4" dir="rtl">
      <div className="container mx-auto max-w-md">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Image 
              src="/logo.jpg" 
              alt="مطر" 
              width={48} 
              height={48} 
              className="rounded-xl"
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <h1 className="text-2xl font-bold text-[#1e3a5f]">ملخص العملية</h1>
              <p className="text-sm text-muted-foreground">للاستخدام الداخلي</p>
            </div>
          </div>
        </div>

        {/* قسم الإدخال */}
        <Card className="border-primary/20 mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5 text-primary" />
              بيانات العملية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* رقم الجوال */}
            <div>
              <Label className="text-sm font-medium">رقم جوال العميل</Label>
              <Input
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="05xxxxxxxx"
                className="mt-1 text-lg"
                type="tel"
              />
            </div>

            <hr className="border-border" />

            {/* المبالغ */}
            <div>
              <Label className="text-sm font-medium">مبلغ الشراء</Label>
              <Input
                type="number"
                value={purchaseAmount}
                onChange={(e) => setPurchaseAmount(e.target.value)}
                placeholder="0"
                className="mt-1 text-lg font-semibold"
              />
            </div>

            <div>
              <Label className="text-sm font-medium">مبلغ البيع</Label>
              <Input
                type="number"
                value={saleAmount}
                onChange={(e) => setSaleAmount(e.target.value)}
                placeholder="0"
                className="mt-1 text-lg font-semibold"
              />
            </div>

            <div>
              <Label className="text-sm font-medium">الدفعة الأولى</Label>
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                placeholder="0"
                className="mt-1 text-lg font-semibold"
              />
            </div>


          </CardContent>
        </Card>

        {/* ملخص العملية */}
        <Card className="border-0 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-l from-[#1e3a5f] to-[#2d5a3d] px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">ملخص العملية</h2>
                <p className="text-white/80 text-sm">مطر | liilsol.com</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FileText className="w-6 h-6" />
              </div>
            </div>
          </div>

          <CardContent className="p-6 space-y-3">
            {/* معلومات العميل */}
            {clientPhone && (
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">رقم العميل</span>
                  <span className="font-bold text-lg">{clientPhone}</span>
                </div>
              </div>
            )}

            {/* تفاصيل العملية */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">مبل�� الشراء</span>
                <span className="font-bold text-lg">{purchase.toLocaleString()} ر.س</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">مبلغ البيع</span>
                <span className="font-bold text-lg">{sale.toLocaleString()} ر.س</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">
                  الرسوم الإدارية {purchase < 4000 && purchase > 0 ? "(10%+100)" : "(10%)"}
                </span>
                <span className="font-bold text-lg text-red-600">- {Math.round(adminFee).toLocaleString()} ر.س</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">الدفعة الأولى</span>
                <span className="font-bold text-lg text-red-600">- {down.toLocaleString()} ر.س</span>
              </div>


            </div>

            {/* مجموع ما يتم تحويله */}
            <div className="mt-6">
              <p className="text-slate-700 font-bold text-lg mb-3">مجموع ما يتم تحويله إلى حسابك البنكي</p>
              <div className="space-y-3">
                <div className="bg-gradient-to-l from-[#1e3a5f] to-[#2d5a3d] rounded-xl p-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="font-medium">إذا الدفعة عليك</span>
                    <span className="text-2xl font-bold">{Math.round(netAmount + down).toLocaleString()} ر.س</span>
                  </div>
                </div>
                <div className="bg-gradient-to-l from-emerald-500 to-teal-600 rounded-xl p-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="font-medium">إذا الدفعة علينا</span>
                    <span className="text-2xl font-bold">{Math.round(netAmount).toLocaleString()} ر.س</span>
                  </div>
                </div>
              </div>
            </div>

            {/* المتبقي للتقسيط */}
            <div className="bg-slate-100 rounded-xl p-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">المتبقي للتقسيط</span>
                <span className="font-bold text-xl text-[#1e3a5f]">{remainingInstallment.toLocaleString()} ر.س</span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-4 mt-4 border-t border-slate-100">
              <p className="text-slate-500 text-sm">شكراً لثقتكم بنا</p>
              <p className="text-[#2d5a3d] font-bold mt-1">مطر | liilsol.com</p>
            </div>
          </CardContent>
        </Card>

        {/* الأزرار */}
        <div className="flex gap-3 mt-6">
          <Button 
            variant="outline" 
            onClick={resetAll} 
            className="flex-1 gap-2 bg-transparent h-12"
          >
            <RefreshCw className="w-4 h-4" />
            مسح
          </Button>
          
          <Button 
            onClick={sendToWhatsApp} 
            className="flex-1 gap-2 bg-green-600 hover:bg-green-700 h-12 text-lg"
            disabled={purchase === 0 || !clientPhone}
          >
            <Send className="w-4 h-4" />
            إرسال للعميل
          </Button>
        </div>
      </div>
    </div>
  )
}
