import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ isDark, toggle }) {
  return <button onClick={toggle} aria-label="Toggle color theme" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-yellow-300">
    {isDark ? <Sun size={18} /> : <Moon size={17} />}
  </button>
}
