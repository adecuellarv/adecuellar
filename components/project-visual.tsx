'use client'

import { motion } from 'motion/react'
import {
  type LucideIcon,
  CreditCard,
  Wallet,
  ShieldCheck,
  Scale,
  AppWindow,
  BellRing,
  Pill,
  ClipboardCheck,
  Receipt,
  Database,
  Cloud,
  Briefcase,
  Users,
  LayoutDashboard,
  GraduationCap,
  Globe,
} from 'lucide-react'
import type { VisualKind } from '@/lib/content'

type SceneKind = 'orbit' | 'window' | 'pulse' | 'flow'

type VisualConfig = {
  scene: SceneKind
  hue: number
  icon: LucideIcon
  chrome?: 'app' | 'browser'
  satellites?: LucideIcon[]
  from?: LucideIcon
  to?: LucideIcon
  lines?: number
}

const CONFIG: Record<VisualKind, VisualConfig> = {
  payments: { scene: 'orbit', hue: 300, icon: CreditCard, satellites: [Wallet, ShieldCheck, Receipt] },
  legal: { scene: 'window', hue: 250, icon: Scale, chrome: 'app', lines: 4 },
  desktop: { scene: 'window', hue: 20, icon: AppWindow, chrome: 'app', lines: 3 },
  alert: { scene: 'pulse', hue: 25, icon: BellRing },
  pharmacy: { scene: 'pulse', hue: 145, icon: Pill },
  invoice: { scene: 'window', hue: 175, icon: Receipt, chrome: 'app', lines: 4 },
  dataflow: { scene: 'flow', hue: 265, icon: Cloud, from: Database, to: Database },
  jobboard: { scene: 'flow', hue: 155, icon: Briefcase, from: Users, to: ClipboardCheck },
  cms: { scene: 'window', hue: 330, icon: LayoutDashboard, chrome: 'browser', lines: 3 },
  elearning: { scene: 'window', hue: 55, icon: GraduationCap, chrome: 'browser', lines: 3 },
  website: { scene: 'window', hue: 210, icon: Globe, chrome: 'browser', lines: 3 },
}

function accent(hue: number, alpha = 1) {
  return `oklch(0.75 0.16 ${hue} / ${alpha})`
}

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  const cfg = CONFIG[kind]
  const bg = accent(cfg.hue, 0.14)
  const bg2 = accent(cfg.hue, 0.05)
  const line = accent(cfg.hue, 0.35)
  const fg = accent(cfg.hue, 0.95)

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{ background: `radial-gradient(120% 100% at 30% 20%, ${bg}, ${bg2} 60%, transparent 100%)` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(${line} 1px, transparent 1px)`,
          backgroundSize: '22px 22px',
        }}
      />
      {cfg.scene === 'orbit' && <OrbitScene icon={cfg.icon} satellites={cfg.satellites!} fg={fg} line={line} />}
      {cfg.scene === 'window' && (
        <WindowScene icon={cfg.icon} chrome={cfg.chrome!} lines={cfg.lines!} fg={fg} line={line} />
      )}
      {cfg.scene === 'pulse' && <PulseScene icon={cfg.icon} fg={fg} line={line} />}
      {cfg.scene === 'flow' && (
        <FlowScene icon={cfg.icon} from={cfg.from!} to={cfg.to!} fg={fg} line={line} />
      )}
    </div>
  )
}

function IconBadge({
  Icon,
  size = 44,
  fg,
  line,
}: {
  Icon: LucideIcon
  size?: number
  fg: string
  line: string
}) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl border backdrop-blur"
      style={{
        width: size,
        height: size,
        borderColor: line,
        background: 'oklch(0.2 0.014 250 / 60%)',
        color: fg,
      }}
    >
      <Icon size={size * 0.5} strokeWidth={1.75} />
    </div>
  )
}

function OrbitScene({
  icon: Icon,
  satellites,
  fg,
  line,
}: {
  icon: LucideIcon
  satellites: LucideIcon[]
  fg: string
  line: string
}) {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <div className="absolute inset-0 rounded-full border" style={{ borderColor: line }} />
      <IconBadge Icon={Icon} size={52} fg={fg} line={line} />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        {satellites.map((Sat, i) => {
          const angle = (360 / satellites.length) * i
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="-translate-x-1/2 -translate-y-1/2"
              >
                <IconBadge Icon={Sat} size={30} fg={fg} line={line} />
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

function WindowScene({
  icon: Icon,
  chrome,
  lines,
  fg,
  line,
}: {
  icon: LucideIcon
  chrome: 'app' | 'browser'
  lines: number
  fg: string
  line: string
}) {
  return (
    <div
      className="relative w-[78%] overflow-hidden rounded-xl border shadow-lg"
      style={{ borderColor: line, background: 'oklch(0.2 0.014 250 / 70%)' }}
    >
      <div
        className="flex items-center gap-1.5 border-b px-3 py-2"
        style={{ borderColor: line }}
      >
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        {chrome === 'browser' && (
          <span
            className="ml-2 h-4 flex-1 rounded-full"
            style={{ background: 'oklch(0.28 0.014 250 / 80%)' }}
          />
        )}
      </div>
      <div className="flex items-center gap-3 p-4">
        <IconBadge Icon={Icon} size={40} fg={fg} line={line} />
        <div className="flex-1 space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 origin-left rounded-full"
              style={{ background: line }}
              initial={{ opacity: 0.3, scaleX: 0.6 }}
              animate={{ opacity: [0.3, 0.9, 0.3], scaleX: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function PulseScene({ icon: Icon, fg, line }: { icon: LucideIcon; fg: string; line: string }) {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ borderColor: line, width: 60, height: 60 }}
          animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: i * 0.8 }}
        />
      ))}
      <IconBadge Icon={Icon} size={56} fg={fg} line={line} />
    </div>
  )
}

function FlowScene({
  icon: Icon,
  from: From,
  to: To,
  fg,
  line,
}: {
  icon: LucideIcon
  from: LucideIcon
  to: LucideIcon
  fg: string
  line: string
}) {
  return (
    <div className="flex w-[80%] items-center justify-between gap-2">
      <IconBadge Icon={From} size={44} fg={fg} line={line} />
      <div className="relative h-px flex-1" style={{ background: line }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute -top-1 h-2 w-2 rounded-full"
            style={{ background: fg }}
            initial={{ left: '0%', opacity: 0 }}
            animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: i * 0.7 }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <IconBadge Icon={Icon} size={40} fg={fg} line={line} />
        </div>
      </div>
      <IconBadge Icon={To} size={44} fg={fg} line={line} />
    </div>
  )
}
