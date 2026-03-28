import Project from '../../ui/project/project'
import Vantage from '../../../assets/image/vantage.webp'
import Furniro from '../../../assets/image/furniro.webp'
import { useTranslation } from 'react-i18next'

const metadata = [
  {
    id: 'vantage',
    image: Vantage,
    tags: ['React', 'JavaScript', 'CSS3', 'Vite', 'Framer Motion'],
    title: 'TechVantage SaaS',
    link: 'https://react-landing-saas.vercel.app/',
  },
  {
    id: 'furniro',
    image: Furniro,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite', 'Framer Motion'],
    title: 'Furniro E-commerce',
    link: 'https://e-commerce-website-lilac-theta.vercel.app/',
  },
]

function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="pb-8 pt-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          {t('projects.subtitle')}
        </span>
        <h2 className="text-3xl font-bold text-white mt-2">{t('projects.title')}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metadata.map((project, index) => (
          <Project
            key={index}
            projectImage={project.image}
            projectTags={project.tags}
            projectTitle={project.title}
            projectDescription={t(`projects.items.${project.id}.description`)}
            projectLink={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
