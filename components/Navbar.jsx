'use client'
import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 500,
        padding: scrolled ? '14px 48px' : '24px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(15,17,21,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #262b35' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a href="#" style={{
        fontFamily: 'Fraunces, serif',
        fontSize: 22, fontWeight: 600,
        color: '#eef0f3', textDecoration: 'none',
        letterSpacing: -0.5,
      }}>
        Prakhar<span style={{ color: '#e8a33d' }}>.</span>
      </a>

      <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }} className="nav-links">
        {LINKS.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className="link-underline"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14, fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 13, fontWeight: 600,
          color: '#0f1115',
          background: '#e8a33d',
          padding: '10px 22px',
          borderRadius: 100,
          textDecoration: 'none',
          transition: 'transform 0.25s, box-shadow 0.25s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(232,163,61,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        Let's talk
      </a>
    </nav>
  )
}