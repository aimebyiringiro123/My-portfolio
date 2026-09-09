export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return <div className={`max-w-2xl ${light ? 'text-white' : 'text-ink dark:text-slate-50'}`}>
    <p className={`font-mono text-xs font-medium uppercase tracking-[.2em] ${light ? 'text-teal-300' : 'text-ocean dark:text-teal-400'}`}>{eyebrow}</p>
    <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
    {text && <p className={`mt-5 text-base leading-7 ${light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{text}</p>}
  </div>
}
