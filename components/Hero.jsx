'use client'
import { useEffect, useState } from 'react'
import MagneticButton from '@/components/MagneticButton'
import AnimatedCounter from '@/components/AnimatedCounter'

const ROLES = [
  'Backend Developer',
  'API Architect',
  'Node.js Engineer',
  'Data Pipeline Builder',
]

const STACK = [
  { label: 'Node.js', angle: 0 },
  { label: 'MongoDB', angle: 72 },
  { label: 'Express', angle: 144 },
  { label: 'Next.js', angle: 216 },
  { label: 'TypeScript', angle: 288 },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [roleText, setRoleText] = useState('')

  useEffect(() => {
    const role = ROLES[roleIdx]
    let i = 0
    setRoleText('')
    const t = setInterval(() => {
      i++
      setRoleText(role.slice(0, i))
      if (i >= role.length) {
        clearInterval(t)
        setTimeout(() => setRoleIdx(r => (r + 1) % ROLES.length), 2200)
      }
    }, 55)
    return () => clearInterval(t)
  }, [roleIdx])

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 48px 60px',
        position: 'relative',
        overflow: 'hidden',
        gap: 40,
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,163,61,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* LEFT — content */}
      <div style={{ flex: '1 1 560px', maxWidth: 620, position: 'relative', zIndex: 2 }}>
        <p className="eyebrow fade-hero" style={{ animation: 'fadeUp 0.6s 0.1s both' }}>
          Noida, India · Open to opportunities
        </p>

        <h1 style={{
          fontFamily: 'Fraunces, serif',
          fontWeight: 600,
          fontSize: 'clamp(44px, 6.5vw, 76px)',
          lineHeight: 1.05,
          letterSpacing: -1.5,
          color: '#eef0f3',
          marginBottom: 20,
          animation: 'fadeUp 0.6s 0.2s both',
        }}>
          Prakhar Shukla
        </h1>

        <p style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 19,
          color: '#e8a33d',
          marginBottom: 28,
          minHeight: 28,
          animation: 'fadeUp 0.6s 0.3s both',
        }}>
          {roleText}<span style={{ opacity: 0.6 }}>|</span>
        </p>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 16, lineHeight: 1.75,
          color: '#9199a6', marginBottom: 40,
          maxWidth: 520,
          animation: 'fadeUp 0.6s 0.4s both',
        }}>
          I design and build backend systems that hold up under real data — currently
          shipping a B2B sales intelligence platform, previously building data
          pipelines for production client datasets.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.6s 0.5s both' }}>
          <MagneticButton>
            <a
              href="#projects"
              style={{
                padding: '14px 30px',
                background: '#e8a33d',
                color: '#0f1115',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14, fontWeight: 600,
                borderRadius: 100,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'box-shadow 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 24px -8px rgba(232,163,61,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              View my work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              style={{
                padding: '14px 30px',
                background: 'transparent',
                color: '#eef0f3',
                fontFamily: 'Inter, sans-serif',
                fontSize: 14, fontWeight: 600,
                borderRadius: 100,
                border: '1px solid #262b35',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8a33d'; e.currentTarget.style.background = 'rgba(232,163,61,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#262b35'; e.currentTarget.style.background = 'transparent' }}
            >
              Get in touch
            </a>
          </MagneticButton>
        </div>

        {/* Quick stats */}
        <div style={{ display: 'flex', gap: 40, marginTop: 56, animation: 'fadeUp 0.6s 0.6s both' }}>
          {[['14+', 'API modules'], ['100k+', 'Rows processed'], ['2+', 'Years experience']].map(([n, l], i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, color: '#eef0f3', fontWeight: 600 }}>
                <AnimatedCounter value={n} />
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#5b6270', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — signature orbit visual */}
      <div style={{
        flex: '1 1 380px',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        position: 'relative', minHeight: 420,
      }}>
        <div style={{ position: 'relative', width: 380, height: 380 }}>
          {/* Center avatar */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 140, height: 140, borderRadius: '50%',
            background: 'linear-gradient(145deg, #1c1f28, #161920)',
            border: '1px solid #262b35',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Fraunces, serif', fontSize: 44, fontWeight: 600,
            color: '#e8a33d', zIndex: 3,
            boxShadow: '0 0 60px rgba(232,163,61,0.12)',
          }}>
            PS
          </div>

          {/* Static ring */}
          <div style={{
            position: 'absolute', inset: 0,
            border: '1px dashed #262b35',
            borderRadius: '50%',
          }} />

          {/* Rotating orbit with stack labels */}
          <div className="orbit-ring" style={{ position: 'absolute', inset: 0 }}>
            {STACK.map((s, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: 0, height: 0,
                  transform: `rotate(${s.angle}deg) translateX(190px)`,
                }}
              >
                <span style={{
                  display: 'inline-block',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: 11,
                  color: '#9199a6',
                  background: '#161920',
                  border: '1px solid #262b35',
                  borderRadius: 100,
                  padding: '6px 14px',
                  whiteSpace: 'nowrap',
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
