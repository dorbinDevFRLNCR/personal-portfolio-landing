import Button from '../../ui/button/button'
import { CgArrowRight } from 'react-icons/cg'
import Stat from '../../ui/stat/stat'
import { getTranslations } from 'next-intl/server'

const counterStats = [
  { id: 'projectsCount', statCount: 3, statTitle: 'Готовых проекта', isPercentage: false },
  { id: 'older', statCount: 18, statTitle: 'Лет, молодой и голодный', isPercentage: false },
  { id: 'cafee', infinite: true, statTitle: 'Кофе выпито', isPercentage: false },
  { id: 'responsive', statCount: 100, statTitle: 'Адаптивная вёрстка', isPercentage: true },
]

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
        <p className="mb-4 md:text-lg">{t('thirdp')}</p>
      </div>
      <Button variant="primary" className="flex items-center gap-2">
        {t('btn')}
        <CgArrowRight size={16} />
      </Button>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {counterStats.map((stat, index) => (
          <Stat
            key={index}
            statCount={stat.statCount}
            statTitle={t(`items.${stat.id}.description`)}
            infinite={stat.infinite}
            isPercentage={stat.isPercentage}
          />
        ))}
      </div>
    </section>
  )
}

export default About
