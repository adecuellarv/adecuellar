'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Maximize2, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/components/lang-provider'
import { ProjectVisual } from '@/components/project-visual'
import { PROJECTS, type Category, type Project } from '@/lib/content'
import { assetPath } from '@/lib/utils'

type Filter = 'all' | Category

export function Portfolio() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<Project | null>(null)

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
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={() => setActive(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const { lang, t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const desc = lang === 'es' ? project.descEs : project.descEn
  const meta = [project.company, project.period].filter(Boolean).join(' · ')

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
      <button
        type="button"
        onClick={onOpen}
        aria-label={t.viewDetails}
        className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden"
      >
        {project.image ? (
          <motion.div style={{ y }} className="absolute inset-x-0 -top-[8%] bottom-[-8%]">
            <Image
              src={assetPath(project.image)}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ) : project.visual ? (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <ProjectVisual kind={project.visual} />
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 text-[11px] font-medium text-muted-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Maximize2 className="size-3.5" />
          {t.viewDetails}
        </span>
      </button>

      <div className="relative p-6">
        <h3 className="font-display text-xl font-bold tracking-tight">{project.title}</h3>
        {meta && <p className="mt-1 text-xs font-medium text-primary/80">{meta}</p>}
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

        <div className="mt-5 flex items-center gap-5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-secondary"
            >
              {t.viewSite}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.viewDetails}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { lang, t } = useLang()

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  const desc = project ? (lang === 'es' ? project.descEs : project.descEn) : ''
  const meta = project ? [project.company, project.period].filter(Boolean).join(' · ') : ''

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ clipPath: 'inset(0 100% 0 0)' }}
          transition={{ duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-background"
          onClick={onClose}
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="fixed right-5 top-5 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary sm:right-8 sm:top-8"
          >
            <X className="size-4" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto grid min-h-full max-w-6xl items-center gap-10 px-6 py-24 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-card"
            >
              {project.image ? (
                <Image
                  src={assetPath(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              ) : project.visual ? (
                <ProjectVisual kind={project.visual} />
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
                {project.category}
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h3>
              {meta && <p className="mt-2 text-sm font-medium text-primary/80">{meta}</p>}
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {desc}
              </p>

              <p className="mb-2 mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {t.stackUsed}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
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
                  className="mt-8 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-secondary"
                >
                  {t.viewSite}
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
