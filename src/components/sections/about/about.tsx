import Button from '../../ui/button/button'
import { CgArrowRight } from 'react-icons/cg'
import Stat from '../../ui/stat/stat'
import { Trans, useTranslation } from 'react-i18next'

const counterStats = [
  { id: 'projectsCount', statCount: 3, statTitle: 'Готовых проекта', isPercentage: false },
  { id: 'older', statCount: 18, statTitle: 'Лет, молодой и голодный', isPercentage: false },
  { id: 'cafee', infinite: true, statTitle: 'Кофе выпито', isPercentage: false },
  { id: 'responsive', statCount: 100, statTitle: 'Адаптивная вёрстка', isPercentage: true },
]

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="pb-8 pt-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          {t('about.subtitle')}
        </span>
        <h3 className="text-3xl font-bold text-white my-2 md:text-5xl">{t('about.title')}</h3>
      </div>
      <div className="mb-8">
        <p className="mb-4 md:text-lg">
          <Trans i18nKey="about.firstp">
            Привет! Меня зовут <span className="text-white">Кирилл</span> — frontend разработчик,
            специализируюсь на React-приложениях. Пишу на TypeScript, верстаю с Tailwind CSS,
            управляю стейтом через Zustand.
          </Trans>
        </p>
        <p className="mb-4 md:text-lg">
          <Trans i18nKey="about.secondp" components={{ w: <span className="text-white" /> }}>
            Мне важно чтобы код <span className="text-white">был чистым и читаемым</span>, а
            интерфейс — <span className="text-white">удобным и быстрым</span>. Каждый проект делаю
            как для себя.
          </Trans>
        </p>
        <p className="mb-4 md:text-lg">{t('about.thirdp')}</p>
      </div>
      <Button variant="primary" className="flex items-center gap-2">
        {t('about.btn')}
        <CgArrowRight size={16} />
      </Button>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {counterStats.map((stat, index) => (
          <Stat
            key={index}
            statCount={stat.statCount}
            statTitle={t(`about.items.${stat.id}.description`)}
            infinite={stat.infinite}
            isPercentage={stat.isPercentage}
          />
        ))}
      </div>
    </section>
  )
}

export default About
