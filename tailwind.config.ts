import type { Config } from 'tailwindcss'
export default {
darkMode: 'class',
content: ['index.html', 'src/**/*.{ts,tsx}'],
theme: { extend: { borderRadius: { xl: 'var(--radius)' } } },
} satisfies Config