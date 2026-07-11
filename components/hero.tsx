'use client'

import Image from 'next/image'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowDown, Copy, Check, Download } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { useLang } from '@/components/lang-provider'
import { Magnetic } from '@/components/magnetic'
import { CONTACT } from '@/lib/content'
import { assetPath } from '@/lib/utils'

export function Hero() {
  const { t, lang } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Scroll-based parallax
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse-based parallax for the photo
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 12 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 12 })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="pointer-events-none absolute -right-10 bottom-20 h-80 w-80 rounded-full bg-secondary/20 blur-[110px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <motion.div style={{ y: yText }} className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.role}
          </motion.p>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {'Ade'.split('').map((c, i) => (
              <motion.span
                key={`a-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
            <br />
            <span className="text-gradient">
              {'Cuellar'.split('').map((c, i) => (
                <motion.span
                  key={`c-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {t.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.4}>
              <a
                href={assetPath(lang === 'es' ? '/cv-es.pdf' : '/cv-en.pdf')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_40px_-8px] hover:shadow-primary"
              >
                <Download className="size-4" />
                {t.cv}
              </a>
            </Magnetic>
            <ContactCard />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yPhoto }}
          onMouseMove={onMove}
          onMouseLeave={() => {
            mx.set(0)
            my.set(0)
          }}
          className="order-1 flex justify-center md:order-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 blur-2xl" />
            <div className="relative aspect-square w-64 overflow-hidden rounded-[2rem] border border-border bg-card sm:w-80">
              <Image
                src={assetPath('/images/profile.png')}
                alt="Ade Cuellar"
                fill
                priority
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-primary/20" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur"
            >
              <p className="font-display text-2xl font-bold text-primary">10+</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {t.yearsLabel}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        {t.scroll}
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}

function ContactCard() {
  const { t } = useLang()
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)

  function copy(value: string, which: 'email' | 'phone') {
    navigator.clipboard.writeText(value)
    setCopied(which)
    setTimeout(() => setCopied(null), 1600)
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => copy(CONTACT.email, 'email')}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-foreground"
        aria-label={t.copyEmail}
      >
        {copied === 'email' ? (
          <Check className="size-4 text-primary" />
        ) : (
          <Copy className="size-4" />
        )}
        <span>{copied === 'email' ? t.copied : CONTACT.email}</span>
      </button>
      <button
        onClick={() => copy(CONTACT.phone, 'phone')}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-foreground"
        aria-label={t.copyPhone}
      >
        {copied === 'phone' ? (
          <Check className="size-4 text-primary" />
        ) : (
          <Copy className="size-4" />
        )}
        <span>{copied === 'phone' ? t.copied : CONTACT.phone}</span>
      </button>
      <a
        href={CONTACT.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/60 p-3 text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-foreground"
        aria-label="Github"
      >
        <GithubIcon className="size-4" />
      </a>
    </div>
  )
}
