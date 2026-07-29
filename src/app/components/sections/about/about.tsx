import Button from '../../ui/button/button'
import { CgArrowRight } from 'react-icons/cg'
import { getTranslations } from 'next-intl/server'
import StatsGrid from './statsGrid'

async function About() {
  const t = await getTranslations('about')

  return (
    <section id="about" className="pb-8 pt-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          {t('subtitle')}
        </span>
        <h3 className="text-3xl font-bold text-white my-2 md:text-5xl">{t('title')}</h3>
      </div>
      <div className="mb-8">
        <p className="mb-4 md:text-lg">
          {t.rich('firstp', {
            w: (chunks) => <span className="text-white font-semibold">{chunks}</span>,
          })}
        </p>
        <p className="mb-4 md:text-lg">
          {t.rich('secondp', {
            w: (chunks) => <span className="text-white font-semibold">{chunks}</span>,
          })}
        </p>
        <p className="mb-4 md:text-lg">
          {t.rich('thirdp', {
            w: (chunks) => <span className="text-white font-semibold">{chunks}</span>,
          })}
        </p>
      </div>
      <Button variant="primary" href="#contact" className="flex items-center gap-2">
        {t('btn')}
        <CgArrowRight size={16} />
      </Button>
      <StatsGrid
        stats={{
          stat1Label: t('items.motivation.description'),
          stat2Label: t('items.german.description'),
          stat3Label: t('items.techStack.description'),
          stat4Label: t('items.cleanCode.description'),
        }}
      />
    </section>
  )
}

export default About
