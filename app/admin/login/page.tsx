"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail, Loader2 } from "lucide-react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const supabase = createClient()
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      console.log("[v0] Login attempt:", { email, error: authError?.message, user: data?.user?.id })

      if (authError) {
        console.log("[v0] Auth error details:", authError.message, authError.status)
        setError(`بيانات الدخول غير صحيحة (${authError.message})`)
        return
      }

      router.push("/admin")
      router.refresh()
    } catch {
      setError("حدث خطأ. حاول مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">لوحة التحكم</h1>
          <p className="text-muted-foreground">تسجيل الدخول للإدارة</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-2xl p-8 border border-border shadow-lg space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني</Label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@liilsol.com"
                dir="ltr"
                className="pr-11 text-left"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">كلمة المرور</Label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                dir="ltr"
                className="pr-11 text-left"
                required
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <><Loader2 className="w-5 h-5 ml-2 animate-spin" />جاري الدخول...</>
            ) : (
              "تسجيل الدخول"
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}
