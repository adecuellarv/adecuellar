'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { COPY, type Lang } from '@/lib/content'

type Ctx = {
  lang: Lang
  toggle: () => void
  t: (typeof COPY)['es']
}

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'))
  return (
    <LangContext.Provider value={{ lang, toggle, t: COPY[lang] }}>{children}</LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
