'use client'

const ITEMS = [
  'Node.js', 'Express.js', 'MongoDB', 'Next.js 15', 'TypeScript',
  'JWT Auth', 'Python', 'SQL', 'Java', 'Postman', 'Vercel', 'Git',
]

export default function TechMarquee() {
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div style={{
      background: '#0f1115',
      borderBottom: '1px solid #1f232c',
      overflow: 'hidden',
      padding: '18px 0',
    }}>
      <div
        style={{
          display: 'flex',
          gap: 48,
          width: 'max-content',
          animation: 'marquee-scroll 28s linear infinite',
        }}
      >
        {loop.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 13,
            color: '#5b6270',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: 48,
          }}>
            {item}
            <span style={{ color: '#e8a33d' }}>◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}