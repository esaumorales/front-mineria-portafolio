// src/components/layout/Navbar.tsx
import { Link, NavLink } from 'react-router-dom'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwitch'

export function Navbar() {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-xl text-sm ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`

  return (
    <header className="py-4 flex items-center gap-3 justify-between">
      <Link to="/" className="font-semibold tracking-wide">
        MD · Portfolio
      </Link>

      <nav className="flex items-center gap-1">
        <NavLink to="/" className={linkCls} end>Home</NavLink>
        <NavLink to="/biblioteca" className={linkCls}>Biblioteca</NavLink>
        <NavLink to="/proyectos" className={linkCls}>Proyectos</NavLink>
        <NavLink to="/acerca" className={linkCls}>Acerca</NavLink>
        <NavLink to="/contacto" className={linkCls}>Contacto</NavLink>
      </nav>

      <div className="flex items-center gap-2">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Navbar
