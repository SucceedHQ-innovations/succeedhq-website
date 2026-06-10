import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: { extend: { colors: { primary: '#00d4aa', dark: '#1a1a2e' } } },
} satisfies Config