import { setRequestLocale } from 'next-intl/server'
import Hero from '../components/sections/hero/hero'
import SectionLine from '@/src/app/components/ui/sectionLine/sectionLine'
import Projects from '../components/sections/projects/projects'
import About from '../components/sections/about/about'
import Contact from '../components/sections/contact/contact'
import CallMe from '@/src/app/components/ui/callMe/callMe'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  setRequestLocale((await params).locale)
  return (
    <>
      <Hero />
      <SectionLine className="my-4 md:my-8" />
      <Projects />
      <SectionLine className="my-4 md:my-8" />
      <About />
      <SectionLine className="my-4 md:my-8" />
      <Contact />
      <SectionLine className="my-4 md:my-8" />
      <CallMe />
    </>
  )
}
