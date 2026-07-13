'use client'
import { useEffect, useRef } from 'react'

const JOBS = [
  {
    period: 'Jan 2025 — Present',
    company: 'Beno Support Technologies Pvt. Ltd.',
    role: 'Backend Developer Intern',
    type: 'Remote',
    caseStudy: [
      {
        label: 'Problem',
        text: 'Bulk imports of 100k+ prospect rows were failing silently — bad rows got dropped with no diagnostics, and the team had no way to see why an import "succeeded" with fewer rows than expected.',
      },
      {
        label: 'Approach',
        text: 'Rebuilt the Excel/CSV import pipeline with field-level validation that flags and reports bad rows instead of hard-rejecting them, and layered in multi-field deduplication (email, phone, name + account) before insert.',
      },
      {
        label: 'Result',
        text: 'Zero silent data loss on imports, plus a cascading ICP matching engine (industry, region, tech stack, persona) feeding a weighted scoring model — now the core matching layer of the platform.',
      },
    ],
    stack: ['Node.js', 'Next.js 15', 'MongoDB', 'Express.js', 'TypeScript', 'JWT', 'Vercel'],
  },
  {
    period: 'Jul 2024 — Jan 2025',
    company: 'EasyRewardz Software Services Pvt. Ltd.',
    role: 'Data Engineer Intern',
    type: 'On-site',
    points: [
      'Built end-to-end data cleaning and analysis modules in Python and SQL — handling missing data, duplicates and data quality checks.',
      'Automated repetitive data tasks and generated stakeholder reports from real client datasets.',
    ],
    stack: ['Python', 'SQL', 'Pandas', 'Data Analysis'],
  },
]

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      style={{ padding: '110px 48px', background: '#0f1115', borderTop: '1px solid #1f232c' }}
    >
      <p className="eyebrow reveal">Experience</p>
      <h2 className="section-title reveal" style={{ marginBottom: 64 }}>Where I've worked</h2>

      <div style={{ position: 'relative', maxWidth: 780 }}>
        <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 1, background: '#262b35' }} />

        {JOBS.map((job, i) => (
          <div
            key={i}
            className="reveal"
            style={{ marginBottom: 56, paddingLeft: 40, position: 'relative', transitionDelay: `${i * 0.15}s` }}
          >
            <div style={{
              position: 'absolute', left: -5, top: 6,
              width: 11, height: 11, borderRadius: '50%',
              background: '#e8a33d', border: '3px solid #0f1115',
              boxShadow: '0 0 0 1px #262b35',
            }} />

            <div style={{
              fontFamily: 'IBM Plex Mono, monospace', fontSize: 12,
              color: '#5b6270', letterSpacing: 1, marginBottom: 10,
              display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap',
            }}>
              <span>{job.period}</span>
              <span style={{
                padding: '2px 10px', borderRadius: 100,
                border: '1px solid #262b35', fontSize: 11,
              }}>{job.type}</span>
            </div>

            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 26, fontWeight: 600, color: '#eef0f3', marginBottom: 4 }}>
              {job.role}
            </h3>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#e8a33d', marginBottom: 20 }}>
              {job.company}
            </div>

            {job.caseStudy ? (
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 14,
                marginBottom: 22,
                background: '#161920', border: '1px solid #262b35',
                borderRadius: 14, padding: '22px 24px',
              }}>
                {job.caseStudy.map((c, j) => (
                  <div key={j} style={{ display: 'flex', gap: 16 }}>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: 11,
                      color: '#e8a33d', textTransform: 'uppercase', letterSpacing: 1,
                      width: 76, flexShrink: 0, paddingTop: 2,
                    }}>
                      {c.label}
                    </span>
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7,
                      color: '#9199a6', margin: 0,
                    }}>
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                {job.points.map((pt, j) => (
                  <li key={j} style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 14.5, lineHeight: 1.75,
                    color: '#9199a6', marginBottom: 10, paddingLeft: 20, position: 'relative',
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#e8a33d' }}>—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {job.stack.map((s, k) => (
                <span key={k} style={{
                  fontFamily: 'IBM Plex Mono, monospace', fontSize: 11,
                  color: '#9199a6', border: '1px solid #262b35',
                  borderRadius: 100, padding: '4px 12px',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}