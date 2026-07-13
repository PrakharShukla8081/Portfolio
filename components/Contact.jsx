'use client'
import { useEffect, useRef } from 'react'

const LINKS = [
  { type: 'Email', val: 'prakharshukla6095@gmail.com', href: 'mailto:prakharshukla6095@gmail.com' },
  { type: 'Phone', val: '+91 80819 40458', href: 'tel:+918081940458' },
  { type: 'LinkedIn', val: 'linkedin.com/in/prakharshukla', href: 'https://linkedin.com/in/prakharshukla' },
  { type: 'GitHub', val: 'github.com/prakharshukla', href: 'https://github.com/prakharshukla' },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.2 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: '110px 48px 100px', background: '#12141a', borderTop: '1px solid #1f232c' }}
    >
      <div style={{
        maxWidth: 980, margin: '0 auto',
        background: 'linear-gradient(160deg, #1c1f28 0%, #161920 100%)',
        border: '1px solid #262b35',
        borderRadius: 28,
        padding: '64px 56px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 260, height: 260, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,163,61,0.1) 0%, transparent 70%)',
        }} />

        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#4fd1c5', display: 'inline-block' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: '#4fd1c5', letterSpacing: 1 }}>
            Available for backend roles & freelance
          </span>
        </div>

        <h2 className="reveal section-title" style={{ marginBottom: 20, maxWidth: 560 }}>
          Let's build something that scales.
        </h2>

        <p className="reveal" style={{
          fontFamily: 'Inter, sans-serif', fontSize: 15.5, lineHeight: 1.75,
          color: '#9199a6', maxWidth: 520, marginBottom: 44,
        }}>
          Open to backend roles, freelance projects, and interesting collaborations.
          Usually replies within 24 hours.
        </p>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="reveal"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '18px 22px',
                background: '#0f1115',
                border: '1px solid #262b35',
                borderRadius: 14,
                textDecoration: 'none',
                transition: 'border-color 0.3s, transform 0.3s',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8a33d'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#262b35'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#5b6270', letterSpacing: 1, marginBottom: 4 }}>
                  {link.type}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#eef0f3' }}>
                  {link.val}
                </div>
              </div>
              <span style={{ color: '#e8a33d', fontSize: 18 }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
