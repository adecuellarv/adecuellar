import { LangProvider } from '@/components/lang-provider'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <LangProvider>
      <SiteNav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </LangProvider>
  )
}
