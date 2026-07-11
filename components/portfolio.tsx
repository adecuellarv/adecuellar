'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/components/lang-provider'
import { PROJECTS, type Category, type Project } from '@/lib/content'

type Filter = 'all' | Category

export function Portfolio() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: t.filters.all },
    { id: 'FullStack', label: t.filters.full },
    { id: 'Frontend', label: t.filters.front },
  ]

  const visible = PROJECTS.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              03 — {t.workTitle}
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t.workTitle}
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{t.workSub}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="inline-flex rounded-full border border-border bg-card/50 p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className="relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={
                      filter === f.id
                        ? 'relative text-primary-foreground'
                        : 'relative text-muted-foreground hover:text-foreground'
                    }
                  >
                    {f.label}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang, t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const desc = lang === 'es' ? project.descEs : project.descEn

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[8%] bottom-[-8%]">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="relative p-6">
        <h3 className="font-display text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-secondary"
          >
            {t.viewSite}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
