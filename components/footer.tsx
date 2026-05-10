import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* Cloud Icon - white version for footer */}
              <svg width="40" height="44" viewBox="0 0 84 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="36" r="22" fill="white" fillOpacity="0.9"/>
                <circle cx="48" cy="26" r="26" fill="white" fillOpacity="0.9"/>
                <circle cx="64" cy="36" r="18" fill="white" fillOpacity="0.9"/>
                <circle cx="42" cy="38" r="20" fill="white" fillOpacity="0.9"/>
                <rect x="6" y="36" width="72" height="20" fill="white" fillOpacity="0.9"/>
                <line x1="22" y1="58" x2="18" y2="80" stroke="white" strokeOpacity="0.9" strokeWidth="6" strokeLinecap="round"/>
                <line x1="42" y1="58" x2="40" y2="82" stroke="white" strokeOpacity="0.9" strokeWidth="6" strokeLinecap="round"/>
                <line x1="62" y1="58" x2="60" y2="80" stroke="white" strokeOpacity="0.9" strokeWidth="6" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-black text-3xl tracking-tight text-background" style={{ fontFamily: 'IBM Plex Sans Arabic, Arial, sans-serif' }}>مطر</span>
                <span className="text-[9px] text-background/50 font-light tracking-wide mt-0.5">سحابة غيث ماحسبت حسابها</span>
                <span className="text-[7px] text-background/30 font-light leading-none mt-0.5 tracking-widest">powered by liilsol</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md mb-6">
              نقوم بالدخول كشركاء معكم في شراء الأجهزة الذكية عبر تابي وتمارا،
              ونتكفل بقيمة الدفعة الأولى مقابل نسبة الشراكة، ثم نبيع الجهاز ونحول لكم مبلغ
              السيولة مباشرة لحسابكم البنكي خلال ساعة. خدمة موثوقة في الرياض وجدة والدمام.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+966563457734" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 59 036 0039</span>
              </a>
              <a href="mailto:matar@liilsa.com" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Mail className="w-4 h-4" />
                <span>matar@liilsa.com</span>
              </a>
              <a href="https://instagram.com/liilsa.sol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background">
                <Instagram className="w-4 h-4" />
                <span>@liilsa.sol</span>
              </a>
              <a href="https://maps.google.com/?q=مطر+الرياض+حي+المرسلات" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-background">
                <MapPin className="w-4 h-4" />
                <span>الرياض - حي المرسلات</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/siyola-tabby" className="text-background/70 hover:text-background transition-colors">سيولة تابي</Link>
              <Link href="/cash-tamara" className="text-background/70 hover:text-background transition-colors">كاش تمارا</Link>
              <Link href="/#calculator" className="text-background/70 hover:text-background transition-colors">حاسبة السيولة</Link>
              <Link href="/check-limit" className="text-background/70 hover:text-background transition-colors">افحص حدك</Link>
              <Link href="/reviews" className="text-background/70 hover:text-background transition-colors">آراء العملاء</Link>
              <Link href="/articles" className="text-background/70 hover:text-background transition-colors">المقالات</Link>
              <Link href="/about" className="text-background/70 hover:text-background transition-colors">من نحن</Link>
              <Link href="/referral" className="text-background/70 hover:text-background transition-colors">برنامج الإحالات</Link>
              <Link href="/shariah" className="text-background/70 hover:text-background transition-colors">الامتثال الشرعي</Link>
            </nav>
          </div>

          {/* Cities + Articles */}
          <div>
            <h4 className="font-bold mb-3">السيولة بالمدينة</h4>
            <nav className="flex flex-col gap-2 text-sm mb-5">
              <Link href="/siyola-riyadh" className="text-background/70 hover:text-background transition-colors">سيولة تابي الرياض</Link>
              <Link href="/siyola-jeddah" className="text-background/70 hover:text-background transition-colors">سيولة تابي جدة</Link>
              <Link href="/siyola-dammam" className="text-background/70 hover:text-background transition-colors">سيولة تابي الدمام</Link>
            </nav>
            <h4 className="font-bold mb-3">مقالات مفيدة</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/articles/tabby-vs-tamara" className="text-background/70 hover:text-background transition-colors">تابي أم تمارا — أيهما أفضل؟</Link>
              <Link href="/articles/كيف-احول-رصيد-تابي-الى-كاش" className="text-background/70 hover:text-background transition-colors">كيف أحوّل رصيد تابي للكاش؟</Link>
              <Link href="/articles/كم-عمولة-تسييل-تابي-وتمارا" className="text-background/70 hover:text-background transition-colors">كم عمولة تسييل تابي وتمارا؟</Link>
              <Link href="/articles/سيولة-تابي-بدون-تحويل-راتب" className="text-background/70 hover:text-background transition-colors">سيولة تابي بدون تحويل راتب</Link>
            </nav>
          </div>
        </div>

        {/* Services Tags */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {["سيولة تابي","كاش تابي","سيولة تمارا","كاش تمارا","سلفة تابي","سلفة تمارا",
              "سيولة الرياض","كاش جدة","سيولة الدمام","تقسيط جوالات كاش","سيولة نقدية فورية"].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-background/10 rounded-lg text-xs text-background/60">{tag}</span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/70 text-sm text-center md:text-right">
            <p>جميع الحقوق محفوظة {new Date().getFullYear()} — مطر | سحابة غيث ماحسبت حسابها</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-background/70 hover:text-background transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="text-background/70 hover:text-background transition-colors">الشروط والأحكام</Link>
            <Link href="/shariah" className="text-background/70 hover:text-background transition-colors">الامتثال الشرعي</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
