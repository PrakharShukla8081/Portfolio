'use client'
import { useRef } from 'react'
import gsap from 'gsap'

export default function MagneticButton({ children }) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.35, y: y * 0.45, duration: 0.4, ease: 'power2.out' })
  }

  const onMouseLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'inline-block' }}
    >
      {children}
    </div>
  )
}
