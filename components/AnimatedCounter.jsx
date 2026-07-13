'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number counting up when it scrolls into view.
 * value: e.g. "100k+", "14+", "2+"  -> extracts numeric part, animates it, keeps suffix
 */
export default function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0')
  const started = useRef(false)

  const match = value.match(/^([\d.]+)(.*)$/)
  const numTarget = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : ''

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const startTime = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = numTarget * eased
          setDisplay(numTarget % 1 === 0 ? Math.round(current).toString() : current.toFixed(1))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })

    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [numTarget])

  return <span ref={ref}>{display}{suffix}</span>
}
