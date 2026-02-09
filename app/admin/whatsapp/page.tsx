"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Copy, ExternalLink, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function WhatsAppSetupPage() {
  const [copied, setCopied] = useState(false)
  const webhookUrl = typeof window !== "undefined" ? `${window.location.origin}/api/whatsapp` : ""
  const verifyToken = "liilsol-matar-verify-2024"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/admin" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowRight className="w-4 h-4" />
          العودة للوحة التحكم
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">ربط البوت بالواتساب</h1>
            <p className="text-muted-foreground">المساعد الذكي يرد على عملاءك تلقائياً عبر واتساب</p>
          </div>
        </div>

        {/* Step 1 */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
              إنشاء تطبيق Meta Business
            </CardTitle>
            <CardDescription>اذهب لـ Meta for Developers وأنشئ تطبيق جديد</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              1. سجل دخول في{" "}
              <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                developers.facebook.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"2. اضغط \"Create App\" واختر \"Business\" ثم \"WhatsApp\""}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              3. فعّل WhatsApp من القائمة الجانبية
            </p>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
              إعداد الـ Webhook
            </CardTitle>
            <CardDescription>اربط واتساب بموقعك عشان يستقبل الرسائل</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Callback URL</label>
              <div className="flex gap-2">
                <code className="flex-1 bg-muted px-3 py-2 rounded-lg text-sm break-all">{webhookUrl}</code>
                <Button variant="outline" size="sm" onClick={() => copyToClipboard(webhookUrl)} className="bg-transparent">
                  {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Verify Token</label>
              <div className="flex gap-2">
                <code className="flex-1 bg-muted px-3 py-2 rounded-lg text-sm">{verifyToken}</code>
                <Button variant="outline" size="sm" onClick={() => copyToClipboard(verifyToken)} className="bg-transparent">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {"في إعدادات WhatsApp > Configuration > Webhook: الصق الرابط والتوكن واشترك في \"messages\""}
            </p>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">3</span>
              إضافة متغيرات البيئة
            </CardTitle>
            <CardDescription>أضف مفتاح الواتساب في إعدادات المشروع</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"من صفحة التطبيق في Meta > WhatsApp > API Setup، انسخ الـ Access Token"}
            </p>
            <div className="bg-muted rounded-lg p-3 space-y-1">
              <p className="text-xs font-mono text-foreground">WHATSAPP_ACCESS_TOKEN = [التوكن من Meta]</p>
              <p className="text-xs font-mono text-foreground">WHATSAPP_VERIFY_TOKEN = liilsol_whatsapp_2024</p>
            </div>
            <p className="text-sm text-muted-foreground">
              أضفها من الشريط الجانبي {"->"} Vars أو من إعدادات Vercel
            </p>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="mb-8 border-[#25D366]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="w-7 h-7 rounded-full bg-[#25D366] text-white text-sm flex items-center justify-center">4</span>
              جاهز!
            </CardTitle>
            <CardDescription>البوت يرد تلقائياً على رسائل واتساب</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              بعد ربط الـ Webhook وإضافة التوكن، أي رسالة تجيك على واتساب البزنس راح يرد عليها البوت تلقائياً بنفس ذكاء المساعد الموجود في الموقع - يسأل عن المبلغ، يحسب، ويمشي مع العميل خطوة بخطوة.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
