// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-10 py-6 border-t border-white/10 text-sm text-white/60">
      <div className="container-px max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-medium text-white/80">Minería de Datos</span> ·
          Portafolio educativo.
        </p>

        <nav className="flex gap-4">
          <Link to="/acerca" className="hover:text-white">
            Acerca
          </Link>
          <Link to="/contacto" className="hover:text-white">
            Contacto
          </Link>
          <a
            href="https://github.com/tu-usuario/mineria-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
