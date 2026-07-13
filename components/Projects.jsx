'use client'
import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    tag: 'Full-stack · Live',
    title: 'PDR — B2B Sales Intelligence Platform',
    desc: 'A full-stack prospect research tool with role-based access, campaign management, a segment/ICP engine, and audit logging across 14+ API modules with centralized JWT auth.',
    stack: ['Next.js 15', 'Node.js', 'Express.js', 'MongoDB Atlas', 'TypeScript', 'JWT', 'Vercel'],
    highlight: 'ICP matching engine + 100k+ row import pipeline',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #e8a33d 0%, #b9722a 100%)',
  },
  {
    tag: 'Java · OOP · Educational',
    title: 'Shape-Based Educational Game',
    desc: 'An interactive educational game for students (6th–12th grade) to learn 2D and 3D shapes, built around core OOP concepts — inheritance, polymorphism, and method overriding.',
    stack: ['Java', 'OOP', 'Swing/AWT'],
    highlight: 'Full OOP pattern implementation',
    status: 'Done',
    gradient: 'linear-gradient(135deg, #4fd1c5 0%, #2b8a80 100%)',
  },
  {
    tag: 'Data Engineering · Python',
    title: 'Data Cleaning & Analysis Pipeline',
    desc: 'An end-to-end data pipeline using Python and SQL for automated preprocessing, missing-value handling, duplicate removal, and stakeholder-facing reporting on real client datasets.',
    stack: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
    highlight: 'Built on real client datasets at EasyRewardz',
    status: 'Done',
    gradient: 'linear-gradient(135deg, #9199a6 0%, #565c68 100%)',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: '110px 48px', background: '#12141a', borderTop: '1px solid #1f232c' }}
    >
      <p className="eyebrow reveal">Projects</p>
      <h2 className="section-title reveal" style={{ marginBottom: 64 }}>Things I've built</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="reveal lift-card"
            style={{
              background: '#161920', border: '1px solid #262b35',
              borderRadius: 18, overflow: 'hidden',
              transitionDelay: `${i * 0.12}s`,
            }}
          >
            <div style={{ height: 8, background: p.gradient }} />

            <div style={{ padding: '30px 28px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#5b6270', letterSpacing: 1 }}>
                  {p.tag}
                </span>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
                  padding: '3px 10px', borderRadius: 100,
                  color: p.status === 'Live' ? '#4fd1c5' : '#5b6270',
                  border: `1px solid ${p.status === 'Live' ? 'rgba(79,209,197,0.3)' : '#262b35'}`,
                }}>
                  {p.status === 'Live' && <span className="pulse-dot" style={{ marginRight: 5 }}>●</span>}
                  {p.status}
                </span>
              </div>

              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 600, color: '#eef0f3', marginBottom: 14, lineHeight: 1.25 }}>
                {p.title}
              </h3>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.75, color: '#9199a6', marginBottom: 18 }}>
                {p.desc}
              </p>

              <div style={{
                fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#e8a33d',
                borderLeft: '2px solid #e8a33d', paddingLeft: 12, marginBottom: 22,
              }}>
                {p.highlight}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map((s, j) => (
                  <span key={j} style={{
                    fontFamily: 'IBM Plex Mono, monospace', fontSize: 10.5,
                    color: '#9199a6', border: '1px solid #262b35',
                    borderRadius: 100, padding: '3px 10px',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}