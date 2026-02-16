"use client"

export function RainBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Cloud shapes - very subtle */}
      <div className="absolute top-[5%] right-[10%] w-48 h-20 bg-foreground/[0.02] rounded-full blur-2xl" />
      <div className="absolute top-[3%] right-[25%] w-64 h-24 bg-foreground/[0.025] rounded-full blur-3xl" />
      <div className="absolute top-[8%] left-[15%] w-56 h-20 bg-foreground/[0.02] rounded-full blur-2xl" />
      <div className="absolute top-[4%] left-[35%] w-72 h-28 bg-foreground/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-[6%] left-[60%] w-44 h-16 bg-foreground/[0.015] rounded-full blur-2xl" />

      {/* CSS Rain drops - lightweight, no JS animations */}
      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(-10vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .rain-drop {
          position: absolute;
          top: 0;
          width: 1px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, currentColor);
          animation: rain-fall linear infinite;
          opacity: 0;
          color: var(--foreground);
        }
      `}</style>
      {/* Sparse rain drops scattered across the page */}
      <div className="rain-drop opacity-[0.04]" style={{ left: '5%', animationDuration: '4s', animationDelay: '0s', height: '18px' }} />
      <div className="rain-drop opacity-[0.03]" style={{ left: '12%', animationDuration: '5s', animationDelay: '1.2s', height: '22px' }} />
      <div className="rain-drop opacity-[0.04]" style={{ left: '22%', animationDuration: '4.5s', animationDelay: '0.5s', height: '16px' }} />
      <div className="rain-drop opacity-[0.03]" style={{ left: '30%', animationDuration: '5.5s', animationDelay: '2s', height: '20px' }} />
      <div className="rain-drop opacity-[0.04]" style={{ left: '40%', animationDuration: '4.2s', animationDelay: '0.8s', height: '24px' }} />
      <div className="rain-drop opacity-[0.03]" style={{ left: '48%', animationDuration: '5s', animationDelay: '1.5s', height: '18px' }} />
      <div className="rain-drop opacity-[0.04]" style={{ left: '55%', animationDuration: '4.8s', animationDelay: '0.3s', height: '20px' }} />
      <div className="rain-drop opacity-[0.03]" style={{ left: '65%', animationDuration: '5.2s', animationDelay: '2.5s', height: '22px' }} />
      <div className="rain-drop opacity-[0.04]" style={{ left: '73%', animationDuration: '4.3s', animationDelay: '1s', height: '16px' }} />
      <div className="rain-drop opacity-[0.03]" style={{ left: '82%', animationDuration: '5.5s', animationDelay: '0.7s', height: '20px' }} />
      <div className="rain-drop opacity-[0.04]" style={{ left: '90%', animationDuration: '4.6s', animationDelay: '1.8s', height: '18px' }} />
      <div className="rain-drop opacity-[0.03]" style={{ left: '95%', animationDuration: '5.3s', animationDelay: '2.2s', height: '24px' }} />
    </div>
  )
}
