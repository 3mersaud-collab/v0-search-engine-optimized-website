"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gift, Users, Copy, Check, Share2, Wallet, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ReferralPage() {
  const [phone, setPhone] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateCode = async () => {
    if (!phone || phone.length < 10) return
    
    setIsGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // توليد كود إحالة بناءً على رقم الجوال
    const code = `LIIL${phone.slice(-4)}${Math.random().toString(36).substring(2, 5).toUpperCase()}`
    setReferralCode(code)
    setIsGenerating(false)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(`https://liilsol.com?ref=${referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareWhatsApp = () => {
    const message = `احصل على سيولة فورية من تابي وتمارا مع liilsol%0A%0Aاستخدم كود الإحالة: ${referralCode}%0A%0Ahttps://liilsol.com?ref=${referralCode}`
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              برنامج الإحالات
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              اربح مع كل صديق تحيله لـ liilsol
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              شارك رابط الإحالة مع أصدقائك واحصل على عمولة عن كل عملية سيولة يقومون بها
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">كيف يعمل برنامج الإحالات؟</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Share2,
                title: "شارك رابطك",
                description: "احصل على كود إحالة خاص بك وشاركه مع أصدقائك ومعارفك"
              },
              {
                icon: Users,
                title: "صديقك يستخدم الخدمة",
                description: "عندما يستخدم صديقك كود الإحالة ويتم طلب السيولة"
              },
              {
                icon: Wallet,
                title: "اربح عمولتك",
                description: "تحصل على 50 ريال عن كل عملية سيولة ناجحة"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < 2 && (
                  <ArrowLeft className="w-6 h-6 text-muted-foreground mx-auto mt-4 hidden md:block rotate-180" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generate Code */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                احصل على كود الإحالة الخاص بك
              </h2>

              {!referralCode ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      رقم جوالك
                    </label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                      className="text-left"
                    />
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={generateCode}
                    disabled={isGenerating || !phone || phone.length < 10}
                  >
                    {isGenerating ? "جاري التوليد..." : "توليد كود الإحالة"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-2">كود الإحالة الخاص بك</p>
                    <p className="text-2xl font-bold text-primary font-mono">{referralCode}</p>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-4">
                    <p className="text-sm text-muted-foreground mb-2">رابط الإحالة</p>
                    <p className="text-sm text-foreground font-mono break-all" dir="ltr">
                      https://liilsol.com?ref={referralCode}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" onClick={copyCode} className="gap-2 bg-transparent">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? "تم النسخ" : "نسخ الرابط"}
                    </Button>
                    <Button onClick={shareWhatsApp} className="gap-2 bg-green-600 hover:bg-green-700">
                      <Share2 className="w-4 h-4" />
                      شارك واتساب
                    </Button>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full text-muted-foreground"
                    onClick={() => {
                      setReferralCode("")
                      setPhone("")
                    }}
                  >
                    توليد كود جديد
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50 ريال</div>
              <p className="opacity-90">عمولة لكل إحالة ناجحة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">بدون حد</div>
              <p className="opacity-90">أقصى لعدد الإحالات</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">فوري</div>
              <p className="opacity-90">تحويل العمولة لحسابك</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">أسئلة شائعة</h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "متى أحصل على عمولة الإحالة؟",
                a: "تحصل على عمولتك فور اكتمال عملية السيولة لصديقك. يتم تحويل المبلغ لحسابك البنكي خلال 24 ساعة."
              },
              {
                q: "هل هناك حد أقصى للإحالات؟",
                a: "لا، يمكنك إحالة عدد غير محدود من الأصدقاء والحصول على عمولة عن كل عملية."
              },
              {
                q: "هل يحصل صديقي على خصم؟",
                a: "نعم! صديقك يحصل على خصم 25 ريال على أول عملية سيولة عند استخدام كود الإحالة."
              },
              {
                q: "كيف أتتبع إحالاتي؟",
                a: "تواصل معنا على واتساب برقم جوالك وسنرسل لك تقرير بجميع إحالاتك وعمولاتك."
              }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            جاهز لتبدأ الربح؟
          </h2>
          <p className="text-muted-foreground mb-8">
            احصل على كود الإحالة الآن وابدأ بمشاركته مع أصدقائك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                احصل على كودك
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">العودة للرئيسية</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
