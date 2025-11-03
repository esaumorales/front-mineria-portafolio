// src/components/layout/SocialLinks.tsx
export function SocialLinks() {
    const links = [
      { label: 'GitHub', href: 'https://github.com/tu-usuario' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tu-usuario' },
      { label: 'Behance', href: 'https://www.behance.net/tu-usuario' },
      { label: 'Contacto', href: '/contacto', internal: true },
    ]
  
    return (
      <nav className="flex flex-wrap items-center gap-4 text-sm">
        {links.map((l) =>
          l.internal ? (
            <a key={l.label} href={l.href} className="text-white/70 hover:text-white underline-offset-4 hover:underline">
              {l.label}
            </a>
          ) : (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline-offset-4 hover:underline"
            >
              {l.label} ↗
            </a>
          )
        )}
      </nav>
    )
  }
  