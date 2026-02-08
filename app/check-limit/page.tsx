import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckLimitContent } from "@/components/check-limit-content"

export const metadata: Metadata = {
  title: "افحص حدك واطلب السيولة | liilsol - سيولة تابي وتمارا",
  description: "افحص حدك الائتماني واطلب سيولة من تابي وتمارا ومدفوع. خطوات سهلة للحصول على كاش فوري خلال ساعتين.",
  keywords: "فحص حد تابي, فحص حد تمارا, طلب سيولة, سيولة تابي, كاش تمارا, خطوات السيولة",
}

export default function CheckLimitPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CheckLimitContent />
      <Footer />
    </main>
  )
}
