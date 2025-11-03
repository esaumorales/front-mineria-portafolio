// src/components/layout/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { LanguageSwitch } from './LanguageSwitch';
import { ThemeSwitch } from './ThemeSwitch';

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-xl text-sm ${
      isActive ? 'bg-white/10' : 'hover:bg-white/5'
    }`;

  return (
    <>
      {/* Botón flotante móvil */}
      <button
        className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-white/10 hover:bg-white/20 sm:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú">
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel lateral */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-black/95 border-r border-white/10 p-5 transform transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } sm:static sm:translate-x-0 sm:w-60 sm:border-0 sm:bg-transparent`}>
        <h2 className="text-lg font-semibold mb-6">Menú</h2>
        <nav className="flex flex-col gap-1">
          <NavLink to="/" className={linkCls} end>
            Inicio
          </NavLink>
          <NavLink to="/biblioteca" className={linkCls}>
            Biblioteca
          </NavLink>
          <NavLink to="/proyectos" className={linkCls}>
            Proyectos
          </NavLink>
          <NavLink to="/acerca" className={linkCls}>
            Acerca
          </NavLink>
          <NavLink to="/contacto" className={linkCls}>
            Contacto
          </NavLink>
        </nav>

        <div className="mt-8 flex items-center gap-2">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>

        {/* Botón cerrar solo en móvil */}
        <button
          className="absolute top-4 right-4 text-lg sm:hidden"
          onClick={() => setOpen(false)}>
          ✕
        </button>
      </aside>
    </>
  );
}
