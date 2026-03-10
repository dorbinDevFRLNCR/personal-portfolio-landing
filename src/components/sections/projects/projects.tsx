import Project from '../../ui/project/project'
import Vantage from '../../../assets/image/vantage.webp'
import Furniro from '../../../assets/image/furniro.webp'

const metadata = [
  {
    image: Vantage,
    tags: ['React', 'JavaScript', 'CSS3', 'Vite', 'Framer Motion'],
    title: 'TechVantage SaaS',
    description:
      'Полноценный лендинг для SaaS продукта. Адаптивная вёрстка, бургер-меню, секции с фичами, отзывами и ценами.',
    link: 'https://react-landing-saas.vercel.app/',
  },
  {
    image: Furniro,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite', 'Framer Motion'],
    title: 'Furniro E-commerce',
    description:
      'Интернет-магазин мебели с корзиной, избранным и уведомлениями. Стейт-менеджмент на Zustand.',
    link: 'https://e-commerce-website-lilac-theta.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="pb-8 pt-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          Мои работы
        </span>
        <h2 className="text-3xl font-bold text-white mt-2">Проекты</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metadata.map((project, index) => (
          <Project
            key={index}
            projectImage={project.image}
            projectTags={project.tags}
            projectTitle={project.title}
            projectDescription={project.description}
            projectLink={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
