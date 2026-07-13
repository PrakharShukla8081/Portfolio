'use client'
import { useEffect, useRef } from 'react'

const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'Java', level: 3 },
      { name: 'SQL', level: 4 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js + Express.js', level: 5 },
      { name: 'REST API Design', level: 5 },
      { name: 'JWT Auth', level: 4 },
      { name: 'MongoDB + Mongoose', level: 4 },
      { name: 'MySQL', level: 3 },
    ],
  },
  {
    category: 'Frontend & Tools',
    items: [
      { name: 'Next.js 15', level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'Git + GitHub', level: 4 },
      { name: 'Postman', level: 5 },
      { name: 'Vercel', level: 4 },
    ],
  },
]

function Dots({ level }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: '50%',
          background: i < level ? '#e8a33d' : '#262b35',
        }} />
      ))}
    </div>
  )
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      style={{ padding: '110px 48px', background: '#0f1115', borderTop: '1px solid #1f232c' }}
    >
      <p className="eyebrow reveal">Skills</p>
      <h2 className="section-title reveal" style={{ marginBottom: 64 }}>What I work with</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 24 }}>
        {SKILLS.map((group, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              background: '#161920', border: '1px solid #262b35',
              borderRadius: 16, padding: '28px 26px',
              transitionDelay: `${i * 0.12}s`,
            }}
          >
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 600, color: '#eef0f3', marginBottom: 20 }}>
              {group.category}
            </h3>
            {group.items.map((item, j) => (
              <div key={j} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: j < group.items.length - 1 ? 14 : 0,
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, color: '#9199a6' }}>
                  {item.name}
                </span>
                <Dots level={item.level} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Education + Certifications */}
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="reveal" style={{
          background: '#161920', border: '1px solid #262b35',
          borderRadius: 16, padding: '28px 26px', transitionDelay: '0.4s',
        }}>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 600, color: '#eef0f3', marginBottom: 20 }}>
            Education
          </h3>
          {[
            { y: '2020–2024', d: 'B.Tech — Information Technology', i: 'BBDITM · AKTU · CGPA 7.1' },
            { y: '2019–2020', d: '12th Board — BMIC, Pratapgarh', i: '72%' },
            { y: '2017–2018', d: '10th Board — JPIC, Pratapgarh', i: '66%' },
          ].map((e, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#5b6270', marginBottom: 4 }}>{e.y}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#eef0f3', marginBottom: 2 }}>{e.d}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12.5, color: '#5b6270' }}>{e.i}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{
          background: '#161920', border: '1px solid #262b35',
          borderRadius: 16, padding: '28px 26px', transitionDelay: '0.5s',
        }}>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 600, color: '#eef0f3', marginBottom: 20 }}>
            Certifications & Courses
          </h3>
          {[
            { name: 'Java Full Stack', org: 'JSpiders, Noida' },
            { name: 'Web Development Bootcamp', org: 'JSpiders, Noida' },
            { name: 'Data Structures & Algorithms', org: 'AKTU Curriculum' },
            { name: 'Database Management Systems', org: 'AKTU Curriculum' },
          ].map((c, i) => (
            <div key={i} style={{ marginBottom: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: '#e8a33d', marginTop: 2, fontSize: 13 }}>✓</span>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#eef0f3', marginBottom: 2 }}>{c.name}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#5b6270' }}>{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}