import { useEffect, useState } from 'react';

export function ThemeSwitch() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      className="px-3 py-2 rounded-xl bg-white/10 text-sm hover:bg-white/20"
      onClick={() => setDark((d) => !d)}
      title="Toggle theme">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
