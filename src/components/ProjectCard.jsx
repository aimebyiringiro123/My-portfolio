import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  const Icon = project.icon
  return <motion.article whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="group flex min-h-[295px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition dark:border-slate-800 dark:bg-slate-900">
    <div className={`grid h-12 w-12 place-items-center rounded-2xl ${project.color}`}><Icon size={23} /></div>
    <p className="mt-7 font-mono text-[11px] uppercase tracking-[.16em] text-ocean dark:text-teal-400">{project.type}</p>
    <h3 className="mt-2 text-xl font-bold text-ink dark:text-white">{project.title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
    <div className="mt-auto flex items-end justify-between pt-6">
      <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">{tag}</span>)}</div>
      {project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-hover:bg-ocean group-hover:text-white dark:border-slate-700"><ArrowUpRight size={16} /></a> : <span title="Repository link will be added soon" className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-300 dark:border-slate-700 dark:text-slate-700"><ArrowUpRight size={16} /></span>}
    </div>
  </motion.article>
}
