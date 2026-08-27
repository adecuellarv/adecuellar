'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { useLang } from '@/components/lang-provider'
import { SKILLS, SKILL_CATEGORIES } from '@/lib/content'

export function Skills() {
  const { t, lang } = useLang()

  return (
    <section id="skills" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            02 — {t.skillsTitle}
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t.skillsTitle}
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t.skillsSub}</p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 border-t border-border pt-14">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {t.skillsStackTitle}
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground">{t.skillsStackSub}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.key} delay={0.1 + i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {lang === 'es' ? cat.titleEs : cat.titleEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group"
    >
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-display text-sm font-medium text-foreground">{name}</span>
        <span className="font-display text-sm text-muted-foreground transition-colors group-hover:text-primary">
          {level}%
        </span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, delay: 0.1 + (index % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </motion.div>
  )
}
