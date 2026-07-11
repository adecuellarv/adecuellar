'use client'

import { motion, useScroll, useSpring } from 'motion/react'
import { useLang } from '@/components/lang-provider'
import { Magnetic } from '@/components/magnetic'

export function SiteNav() {
  const { lang, toggle, t } = useLang()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'work', label: t.nav.work },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Ade Cuellar <span className="text-primary">{'</>'}</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1.5 backdrop-blur-xl md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic>
          <button
            onClick={toggle}
            className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium backdrop-blur-xl transition-colors hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </Magnetic>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-gradient-to-r from-primary to-secondary"
      />
    </motion.header>
  )
}
