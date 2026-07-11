'use client'

import { useState } from 'react'
import { Copy, Check, Phone, Mail } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'
import { Magnetic } from '@/components/magnetic'
import { useLang } from '@/components/lang-provider'
import { CONTACT } from '@/lib/content'

export function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState<string | null>(null)

  function copy(value: string) {
    navigator.clipboard.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 1600)
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            04 — {t.nav.contact}
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-6xl">
            {t.contactTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty text-muted-foreground">{t.contactBody}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_40px_-8px] hover:shadow-primary"
              >
                <Mail className="size-4" />
                {CONTACT.email}
              </a>
            </Magnetic>
            <button
              onClick={() => copy(CONTACT.email)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-foreground"
            >
              {copied === CONTACT.email ? (
                <Check className="size-4 text-primary" />
              ) : (
                <Copy className="size-4" />
              )}
              {copied === CONTACT.email ? t.copied : t.copyEmail}
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-foreground"
            >
              <Phone className="size-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-24 max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-display text-lg font-bold">
            Ade Cuellar <span className="text-primary">{'</>'}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ade Cuellar. {t.rights}
          </p>
        </div>
      </footer>
    </section>
  )
}
