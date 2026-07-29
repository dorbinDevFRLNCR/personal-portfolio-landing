'use client'

import { motion } from 'framer-motion'
import Stat from '@/src/app/components/ui/stat/stat' // Проверь правильность пути к Stat

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

type StatsGridProps = {
  stats: {
    stat1Label: string
    stat2Label: string
    stat3Label: string
    stat4Label: string
  }
}

export default function StatsGrid({ stats }: StatsGridProps) {
  const items = [
    {
      value: 100,
      statTitle: stats.stat1Label,
      isCounter: true,
      isPercentage: true,
    },
    {
      value: 'B1+ / B2 Kurs',
      statTitle: stats.stat2Label,
      isCounter: false,
    },
    {
      value: 'Modern',
      statTitle: stats.stat3Label,
      isCounter: false,
    },
    {
      value: 'Clean',
      statTitle: stats.stat4Label,
      isCounter: false,
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6"
    >
      {items.map((item, index) => (
        <Stat
          key={index}
          value={item.value}
          statTitle={item.statTitle}
          isCounter={item.isCounter}
          isPercentage={item.isPercentage}
        />
      ))}
    </motion.div>
  )
}
