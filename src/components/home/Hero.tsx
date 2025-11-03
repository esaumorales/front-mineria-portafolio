// src/components/home/Hero.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Títulos con “stroke” sutil (outline) usando inline style para simular look tipográfico.
 * Mantiene pure TSX sin CSS adicional.
 */
export function Hero() {
  const stroke: React.CSSProperties = {
    WebkitTextStroke: '1px rgba(156, 163, 175, 0.45)', // gris claro
    textShadow: '0 2px 0 rgba(0,0,0,0.35)',
  }

  return (
    <div className="relative z-10 w-full text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white/70 text-sm tracking-[0.35em] uppercase mb-4"
      >
        Hey, I’m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-[32px] sm:text-[44px] md:text-[58px] font-extrabold leading-[1.1] text-white"
        style={stroke}
      >
        ESAU <span className="text-white/70" style={{ WebkitTextStroke: '0' }}>MORALES</span>
        <br />
        <span className="text-white/80">BUT YOU CAN CALL ME</span>{' '}
        <span className="text-[var(--accent,#aab2ff)]" style={{ WebkitTextStroke: '0' }}>ESAU</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mt-4 text-white/80 text-base sm:text-lg"
      >
        I’m a graphic-minded front-end dev, UX/UI tinkerer<br className="hidden sm:block" />
        & data-mining enthusiast.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-6 flex items-center justify-center gap-6 text-sm"
      >
        <Link to="/proyectos" className="group inline-flex items-center gap-2 text-white hover:opacity-90">
          <span className="translate-x-0 group-hover:translate-x-1 transition">→</span>
          <span className="underline underline-offset-4 decoration-white/30">see my projects</span>
        </Link>
        <Link to="/acerca" className="group inline-flex items-center gap-2 text-white hover:opacity-90">
          <span className="translate-x-0 group-hover:translate-x-1 transition">→</span>
          <span className="underline underline-offset-4 decoration-white/30">more about me</span>
        </Link>
      </motion.div>
    </div>
  )
}
