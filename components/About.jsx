'use client'
import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    title: 'API Design',
    desc: 'RESTful services with clean route structure, centralized auth middleware, and validation that fails loud in dev and quiet in prod.',
  },
  {
    title: 'Data Pipelines',
    desc: 'Import, clean, and enrich large datasets — bulk imports, deduplication, and field-level validation without hard row rejection.',
  },
  {
    title: 'System Design',
    desc: 'Schema design and scoring engines for real business logic — matching, weighting, and cascading filters that hold up at scale.',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: '110px 48px', background: '#12141a', borderTop: '1px solid #1f232c' }}
    >
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 72, alignItems: 'start', marginBottom: 80 }}>
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 className="section-title">Backend-first,<br />detail-obsessed.</h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.85, color: '#9199a6', marginBottom: 18 }}>
            I'm a backend engineer currently building the core of a B2B sales
            intelligence platform at Beno Support Technologies — designing the API
            layer, the matching engine, and the import pipeline that keeps
            everything running on messy, real-world data.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.85, color: '#9199a6' }}>
            Before that, I worked as a Data Engineer intern at EasyRewardz, cleaning
            and analyzing real client datasets with Python and SQL. I started with
            Java and OOP fundamentals, and now build primarily in the Node.js and
            MongoDB ecosystem.
          </p>
        </div>
      </div>

      {/* Service-style cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="reveal lift-card"
            style={{
              background: '#161920',
              border: '1px solid #262b35',
              borderRadius: 16,
              padding: '32px 28px',
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'rgba(232,163,61,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Fraunces, serif', fontSize: 18, color: '#e8a33d',
              marginBottom: 20,
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 21, fontWeight: 600, color: '#eef0f3', marginBottom: 10 }}>
              {s.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7, color: '#9199a6' }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}