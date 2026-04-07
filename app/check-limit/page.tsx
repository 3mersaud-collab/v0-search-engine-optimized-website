import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckLimitContent } from "@/components/check-limit-content"

export const metadata: Metadata = {
  title: "افحص حدك واطلب سلفة تابي | مطر - سلفة تابي فورية",
  description: "افحص حدك الائتماني واطلب سلفة تابي. خطوات سهلة للحصول على كاش تابي فوري خلال ساعتين. خدمة أفضل وأسرع من تمارا.",
  keywords: "فحص حد تابي, طلب سلفة تابي, سيولة تابي, كاش تابي, خطوات سلفة تابي, افضل من تمارا",
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
