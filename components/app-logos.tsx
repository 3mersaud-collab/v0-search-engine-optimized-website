"use client"

// Tabby Logo - SVG مدمج
export function TabbyLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#3BFFC1"/>
      <text x="70" y="33" textAnchor="middle" fill="#292929" fontSize="22" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">tabby</text>
    </svg>
  )
}

// Tamara Logo - SVG مدمج
export function TamaraLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#FFD700"/>
      <text x="70" y="33" textAnchor="middle" fill="#1A1A1A" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">tamara</text>
    </svg>
  )
}

// Madfu Logo - SVG مدمج
export function MadfuLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#4361EE"/>
      <text x="70" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">مدفوع</text>
    </svg>
  )
}

// Emkan Logo - SVG مدمج
export function EmkanLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#00A86B"/>
      <text x="70" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">إمكان</text>
    </svg>
  )
}

// Kuwa Logo - SVG مدمج
export function KuwaLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#FF6B35"/>
      <text x="70" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">كوارا</text>
    </svg>
  )
}

// Mora Logo - SVG مدمج
export function MoraLogo({ className = "w-24 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="50" rx="10" fill="#7B2FBE"/>
      <text x="70" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">مورا</text>
    </svg>
  )
}

// All logos in a row
export function AppLogos({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-20 h-8",
    md: "w-28 h-10",
    lg: "w-36 h-14"
  }

  const apps = [
    { Logo: TabbyLogo, label: "تابي" },
    { Logo: TamaraLogo, label: "تمارا" },
    { Logo: MadfuLogo, label: "مدفوع" },
    { Logo: EmkanLogo, label: "إمكان" },
    { Logo: KuwaLogo, label: "كوارا" },
    { Logo: MoraLogo, label: "مورا" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {apps.map(({ Logo, label }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <Logo className={sizeClasses[size]} />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  )
}

// Individual logo cards for selection
export function AppLogoCard({ 
  app, 
  selected, 
  onClick,
  label
}: { 
  app: "tabby" | "tamara" | "madfu" | "emkan" | "kuwa" | "mora"
  selected?: boolean
  onClick?: () => void
  label?: string
}) {
  const labels = {
    tabby: "كاش تابي",
    tamara: "كاش تمارا",
    madfu: "مدفوع",
    emkan: "إمكان",
    kuwa: "كوارا",
    mora: "مورا"
  }
  const colors = {
    tabby: "border-[#3BFFC1]",
    tamara: "border-[#FFD700]",
    madfu: "border-[#4361EE]",
    emkan: "border-[#00A86B]",
    kuwa: "border-[#FF6B35]",
    mora: "border-[#7B2FBE]"
  }
  const bgColors = {
    tabby: "bg-[#3BFFC1]/10",
    tamara: "bg-[#FFD700]/10",
    madfu: "bg-[#4361EE]/10",
    emkan: "bg-[#00A86B]/10",
    kuwa: "bg-[#FF6B35]/10",
    mora: "bg-[#7B2FBE]/10"
  }

  return (
    <button
      onClick={onClick}
      className={`flex-1 p-4 rounded-xl border-2 transition-all min-w-[120px] ${
        selected
          ? `${colors[app]} ${bgColors[app]} shadow-lg scale-[1.02]`
          : "border-border hover:border-primary/50 bg-card"
      }`}
    >
      <div className="h-12 mb-2 flex items-center justify-center">
        {app === "tabby" && <TabbyLogo className="w-24 h-10" />}
        {app === "tamara" && <TamaraLogo className="w-24 h-10" />}
        {app === "madfu" && <MadfuLogo className="w-24 h-10" />}
        {app === "emkan" && <EmkanLogo className="w-24 h-10" />}
        {app === "kuwa" && <KuwaLogo className="w-24 h-10" />}
        {app === "mora" && <MoraLogo className="w-24 h-10" />}
      </div>
      <span className="text-sm font-semibold text-foreground">{label || labels[app]}</span>
    </button>
  )
}
