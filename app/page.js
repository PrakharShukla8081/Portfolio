import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NowStrip from '@/components/NowStrip'
import TechMarquee from '@/components/TechMarquee'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NowStrip />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer style={{
        background: '#0c0e12',
        borderTop: '1px solid #262b35',
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
        fontFamily: 'Inter, sans-serif',
        fontSize: 13,
        color: '#5b6270',
      }}>
        <span style={{ fontFamily: 'Fraunces, serif', fontSize: 16, color: '#eef0f3' }}>
          Prakhar Shukla
        </span>
        <span>© 2026 · Built with Next.js</span>
        <span>Noida, India</span>
      </footer>
    </>
  )
}