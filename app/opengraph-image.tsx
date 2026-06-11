import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'مطر - سحابة غيث ماحسبت حسابها - سيولة تابي وتمارا فورية'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #10b981 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* New Logo Image */}
        <img
          src="https://liilsol.com/matar-logo.png"
          width={160}
          height={160}
          style={{ marginBottom: 24, objectFit: 'contain' }}
        />

        {/* Brand Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
          }}
        >
          مطر
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: '#10b981',
            marginBottom: 40,
            fontWeight: 600,
          }}
        >
          سحابة غيث ماحسبت حسابها
        </div>

        {/* Features */}
        <div style={{ display: 'flex', gap: 40, marginTop: 20 }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px 30px', borderRadius: 12, color: 'white', fontSize: 24 }}>
            سيولة تابي
          </div>
          <div style={{ background: 'rgba(16,185,129,0.2)', padding: '15px 30px', borderRadius: 12, color: '#10b981', fontSize: 24, border: '1px solid #10b981' }}>
            كاش تمارا
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px 30px', borderRadius: 12, color: 'white', fontSize: 24 }}>
            خلال ساعة
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
