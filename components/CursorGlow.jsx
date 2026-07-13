'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.09
      pos.current.y += (target.current.y - pos.current.y) * 0.09
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 250}px, ${pos.current.y - 250}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,163,61,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        willChange: 'transform',
      }}
    />
  )
}
