// src/pages/Contacto.tsx
import { useState } from 'react'

export default function Contacto() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const mailto = `mailto:tu-email@ejemplo.com?subject=${encodeURIComponent(
    'Contacto Portafolio MD'
  )}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${msg}`)}`

  const canSend = name.trim() && email.trim() && msg.trim()

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Contacto</h1>

      <form
        className="card p-6 grid grid-cols-1 gap-4 max-w-xl"
        onSubmit={e => {
          e.preventDefault()
          if (canSend) window.location.href = mailto
        }}
      >
        <label className="grid gap-1">
          <span className="text-sm text-white/70">Nombre</span>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-white/20"
            placeholder="Tu nombre"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm text-white/70">Email</span>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-white/20"
            placeholder="tu@email.com"
            type="email"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm text-white/70">Mensaje</span>
          <textarea
            value={msg}
            onChange={e => setMsg(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/10 outline-none focus:ring-2 ring-white/20 min-h-32"
            placeholder="Cuéntame sobre tu proyecto…"
          />
        </label>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!canSend}
            className={`px-4 py-2 rounded-xl text-sm ${
              canSend ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 text-white/40'
            }`}
          >
            Enviar
          </button>
          <a
            href={mailto}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm"
            onClick={e => {
              if (!canSend) e.preventDefault()
            }}
          >
            Abrir correo
          </a>
        </div>
      </form>
    </section>
  )
}
