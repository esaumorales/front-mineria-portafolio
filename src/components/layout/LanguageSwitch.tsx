// src/components/layout/LanguageSwitch.tsx
import { useState, useEffect } from 'react';

export function LanguageSwitch() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as 'es' | 'en' | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <button
      className="px-3 py-2 rounded-xl bg-white/10 text-sm hover:bg-white/20 transition"
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      title="Cambiar idioma">
      {lang.toUpperCase()}
    </button>
  );
}
