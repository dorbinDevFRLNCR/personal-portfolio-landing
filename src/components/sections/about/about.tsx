import Button from '../../ui/button/button'
import { CgArrowRight } from 'react-icons/cg'
import Stat from '../../ui/stat/stat'

const counterStats = [
  { statCount: 3, statTitle: 'Готовых проекта', isPercentage: false },
  { statCount: 18, statTitle: 'Лет, молодой и голодный', isPercentage: false },
  { infinite: true, statTitle: 'Кофе выпито', isPercentage: false },
  { statCount: 100, statTitle: 'Адаптивная вёрстка', isPercentage: true },
]

function About() {
  return (
    <section id="about" className="pb-8 pt-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          Немного о себе
        </span>
        <h3 className="text-3xl font-bold text-white my-2 md:text-5xl">Кто я</h3>
      </div>
      <div className="mb-8">
        <p className="mb-4 md:text-lg">
          Привет! Меня зовут <span className="text-white">Кирилл</span> — frontend разработчик,
          специализируюсь на React-приложениях. Пишу на TypeScript, верстаю с Tailwind CSS, управляю
          стейтом через Zustand.
        </p>
        <p className="mb-4 md:text-lg">
          Мне важно чтобы код <span className="text-white">был чистым и читаемым</span>, а интерфейс
          — <span className="text-white">удобным и быстрым</span>. Каждый проект делаю как для себя.
        </p>
        <p className="mb-4 md:text-lg">
          Готов браться за лендинги, корпоративные сайты и фронтенд для e-commerce проектов
        </p>
      </div>
      <Button variant="primary" className="flex items-center gap-2">
        Обсудить проект
        <CgArrowRight size={16} />
      </Button>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {counterStats.map((stat, index) => (
          <Stat
            key={index}
            statCount={stat.statCount}
            statTitle={stat.statTitle}
            infinite={stat.infinite}
            isPercentage={stat.isPercentage}
          />
        ))}
      </div>
    </section>
  )
}

export default About
