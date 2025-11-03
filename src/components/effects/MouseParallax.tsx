// src/components/effects/MouseParallax.tsx
import { memo } from 'react'
import { useParallax } from '../../hooks/useParallax'

type Layer = {
  className?: string
  depth?: number  // multiplicador por capa
}

type Props = {
  layers?: Layer[]
  className?: string
  intensity?: number
}

export const MouseParallax = memo(function MouseParallax({
  layers = [
    { className: 'bg-gradient-to-tr from-cyan-500/10 to-fuchsia-500/10 blur-3xl', depth: 1 },
    { className: 'bg-cyan-500/10 blur-2xl', depth: 1.8 },
    { className: 'bg-fuchsia-500/10 blur-2xl', depth: 2.2 },
  ],
  className = '',
  intensity = 0.04,
}: Props) {
  const { x, y } = useParallax(intensity)

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {layers.map((l, i) => {
        const depth = l.depth ?? 1
        const tx = Math.round(x * depth)
        const ty = Math.round(y * depth)
        return (
          <div
            key={i}
            className={`absolute rounded-full ${l.className ?? ''}`}
            style={{
              width: i === 0 ? 900 : 500,
              height: i === 0 ? 900 : 500,
              transform: `translate3d(${tx}px, ${ty}px, 0)`,
              left: i === 0 ? '-10%' : i === 1 ? '60%' : '20%',
              top: i === 0 ? '-20%' : i === 1 ? '10%' : '60%',
            }}
          />
        )
      })}
    </div>
  )
})
