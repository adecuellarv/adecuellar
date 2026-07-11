'use client'

import { animate, useInView, useMotionValue } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/components/lang-provider'
import { MARQUEE } from '@/lib/content'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, mv, to])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function About() {
  const { t } = useLang()
  const stats = [
    { value: 10, suffix: '+', label: t.yearsLabel },
    { value: 40, suffix: '+', label: t.projectsLabel },
    { value: 15, suffix: '', label: t.stackLabel },
  ]

  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              01 — {t.aboutTitle}
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t.aboutTitle}
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {t.aboutBody}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.15 + i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card/50 p-4">
                    <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 flex overflow-hidden border-y border-border py-6">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((tech, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted-foreground/50 transition-colors hover:text-primary"
            >
              {tech}
              <span className="ml-10 text-primary/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
