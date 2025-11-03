// src/components/effects/BlobBackground.tsx
import { motion } from 'framer-motion'
import { memo } from 'react'

type BlobProps = {
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  x?: number
  y?: number
  scale?: number
}

function Blob({ className = '', style, delay = 0, duration = 12, x = 40, y = 30, scale = 1 }: BlobProps) {
  return (
    <motion.div
      initial={{ x: -x, y: -y, scale: scale * 0.95 }}
      animate={{ x, y, scale }}
      transition={{ duration, repeat: Infinity, repeatType: 'reverse', delay, ease: 'easeInOut' }}
      className={`absolute rounded-[999px] blur-3xl ${className}`}
      style={style}
    />
  )
}

/**
 * Fondo con blobs oscuros y grano sutil, tipo itssharl.ee
 * - No requiere CSS extra; todo va con Tailwind + inline styles.
 */
export const BlobBackground = memo(function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base azul grisáceo granular */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 50% 40%, rgba(255,255,255,0.04), transparent 60%), #1a1c25',
        }}
      />

      {/* Glow central suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 400px at 50% 20%, rgba(120,140,255,0.08), transparent 70%)',
        }}
      />

      {/* Blobs principales (oscuros, con brillo leve) */}
      <Blob
        className="w-[520px] h-[360px] bg-[rgba(10,10,14,0.95)]"
        style={{
          left: '-8%',
          top: '-10%',
          boxShadow: 'inset 0 0 60px rgba(255,255,255,0.06)',
        }}
        duration={16}
        x={30}
        y={25}
      />
      <Blob
        className="w-[560px] h-[380px] bg-[rgba(10,10,14,0.96)]"
        style={{
          right: '-12%',
          top: '-6%',
          boxShadow: 'inset 0 0 60px rgba(255,255,255,0.06)',
        }}
        duration={18}
        delay={0.4}
        x={-35}
        y={20}
        scale={1.05}
      />
      <Blob
        className="w-[460px] h-[320px] bg-[rgba(10,10,14,0.94)]"
        style={{
          left: '-6%',
          bottom: '-8%',
          boxShadow: 'inset 0 0 60px rgba(255,255,255,0.06)',
        }}
        duration={17}
        delay={0.2}
        x={28}
        y={-24}
      />
      <Blob
        className="w-[520px] h-[360px] bg-[rgba(10,10,14,0.95)]"
        style={{
          right: '-10%',
          bottom: '-6%',
          boxShadow: 'inset 0 0 60px rgba(255,255,255,0.06)',
        }}
        duration={15}
        delay={0.6}
        x={-26}
        y={-22}
      />

      {/* Halo central pequeño (círculo) */}
      <div
        className="absolute rounded-full"
        style={{
          left: '50%',
          top: '18%',
          width: 18,
          height: 18,
          marginLeft: -9,
          marginTop: -9,
          border: '2px solid rgba(255,255,255,0.25)',
          boxShadow: '0 0 0 4px rgba(255,255,255,0.06)',
        }}
      />
    </div>
  )
})
