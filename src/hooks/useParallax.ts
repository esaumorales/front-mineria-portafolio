// src/hooks/useParallax.ts
import { useEffect, useState } from 'react'

export function useParallax(intensity = 0.04) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) * intensity
      const y = (e.clientY - innerHeight / 2) * intensity
      setOffset({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [intensity])

  return offset
}
