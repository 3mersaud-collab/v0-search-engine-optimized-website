"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export default function AdminSetup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [secret, setSecret] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSetup = async () => {
    if (!email || !password || !secret) return
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch("/api/admin/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, secret }),
      })
      const data = await res.json()

      if (res.ok) {
        setResult({ success: true, message: "تم إنشاء حساب الأدمن بنجاح! يمكنك الآن تسجيل الدخول." })
      } else {
        setResult({ success: false, message: data.error || "حدث خطأ" })
      }
    } catch {
      setResult({ success: false, message: "حدث خطأ في الاتصال" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border p-8">
        <h1 className="text-2xl font-bold text-foreground text-center mb-2">إعداد حساب الأدمن</h1>
        <p className="text-muted-foreground text-center mb-8 text-sm">أنشئ حساب المسؤول للوصول إلى لوحة التحكم</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">البريد الإلكتروني</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@liilsol.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">كلمة المرور</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="كلمة مرور قوية"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">رمز الأمان</label>
            <Input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="رمز الأمان"
            />
          </div>

          {result && (
            <div className={`flex items-center gap-2 p-3 rounded-lg ${result.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {result.success ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              <span className="text-sm">{result.message}</span>
            </div>
          )}

          <Button onClick={handleSetup} disabled={loading} className="w-full">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "إنشاء الحساب"}
          </Button>

          {result?.success && (
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="/admin/login">تسجيل الدخول</a>
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
