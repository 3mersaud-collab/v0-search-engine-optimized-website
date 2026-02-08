import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'liilsol - سيولة تابي وتمارا فورية'
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
        {/* Logo Circle */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            background: 'linear-gradient(135deg, #1e3a5f 0%, #10b981 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            border: '4px solid rgba(255,255,255,0.3)',
          }}
        >
          <span style={{ fontSize: 60, color: 'white', fontWeight: 'bold' }}>L</span>
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          liilsol
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
          سيولة تابي وتمارا - كاش فوري
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 20,
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '15px 30px',
              borderRadius: 50,
              color: 'white',
              fontSize: 24,
            }}
          >
            تحويل خلال ساعتين
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '15px 30px',
              borderRadius: 50,
              color: 'white',
              fontSize: 24,
            }}
          >
            بدون كفيل
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '15px 30px',
              borderRadius: 50,
              color: 'white',
              fontSize: 24,
            }}
          >
            تقييم 4.9
          </div>
        </div>

        {/* Website */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 24,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          liilsol.com
        </div>
      </div>
    ),
    { ...size }
  )
}
