// src/pages/NotFound.tsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-white/70">La página que buscas no existe.</p>
      <Link to="/" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 inline-block">
        Volver al inicio
      </Link>
    </section>
  )
}
