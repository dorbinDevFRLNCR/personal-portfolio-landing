import Badge from '../skillBadge/badge'
import { CgArrowRight } from 'react-icons/cg'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type ProjectProps = {
  projectImage: string
  projectTags: string[]
  projectTitle: string
  projectDescription: string
  projectLink: string
}

function Project({
  projectImage,
  projectTags,
  projectTitle,
  projectDescription,
  projectLink,
}: ProjectProps) {
  const [showAll, setShowAll] = useState(false)

  const { t } = useTranslation()

  const visibleTags = showAll ? projectTags : projectTags.slice(0, 3)

  return (
    <motion.div
      className="project-card rounded-2xl outline-solid outline-[1px] outline-purple-900 overflow-hidden"
      whileHover={{ y: -5 }}
      whileTap={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        className="w-full h-48 object-cover"
        src={projectImage}
        alt={projectTitle}
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {visibleTags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
          {!showAll && projectTags.length > 3 && (
            <Badge onClick={() => setShowAll(!showAll)}>+{projectTags.length - 3}</Badge>
          )}
        </div>
        <h3 className="text-xl font-bold font-heading text-white mb-2 tracking-tight">
          {projectTitle}
        </h3>
        <p className="text-sm mb-4">{projectDescription}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-[10px] hover:-translate-y-[2px] active:gap-[10px] active:-translate-y-[2px]"
          style={{ color: '#C77DFF' }}
        >
          {t('projects.btn')}
          <CgArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  )
}

export default Project
