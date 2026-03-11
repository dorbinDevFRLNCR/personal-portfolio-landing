import Button from '../../ui/button/button'
import Badge from '../../ui/skillBage/badge'
import { CgArrowRight } from 'react-icons/cg'

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

function Hero() {
  return (
    <section className="relative overflow-hidden hero">
      <div
        className="absolute -top-24 -right-24 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123, 31, 162, 0.25) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 left-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240, 48, 106, 0.15) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          style={{
            background: 'rgba(123, 31, 162, 0.2)',
            border: '1px solid rgba(123, 31, 162, 0.4)',
            color: '#C77DFF',
          }}
          className="inline-flex items-center gap-2 border text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium"
        >
          <span style={{ background: '#C77DFF' }} className="w-2 h-2 rounded-full animate-pulse" />
          Открыт к заказам
        </div>
        <h1 className="text-5xl font-bold max-w-2xs tracking-tight mt-4 text-white md:text-7xl lg:text-8xl">
          Frontend <span className="grad">React</span> Developer
        </h1>
        <p className="text-base text-gray-300 mt-8 max-w-3xl md:text-xl md:max-w-2xl">
          Создаю быстрые и красивые веб-приложения на React + TypeScript. Пишу чистый код, делаю
          удобные интерфейсы — от лендингов до e-commerce.
        </p>
        <div className="flex gap-4 flex-col mt-8 md:flex-row">
          <Button
            onClick={() => scrollTo('projects')}
            variant="primary"
            className="text-base flex items-center gap-2 w-max"
          >
            Смотреть проекты <CgArrowRight />
          </Button>
          <Button
            onClick={() => scrollTo('contact')}
            variant="secondary"
            className="text-base w-max"
          >
            Связаться со мной
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 pt-4">
          {['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite', 'Git'].map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
