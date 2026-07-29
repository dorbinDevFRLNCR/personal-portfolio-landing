'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

type StatProps = {
  value?: number | string
  statTitle: string
  isCounter?: boolean
  isPercentage?: boolean
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Stat({
  value = 0,
  statTitle,
  isCounter = false,
  isPercentage = false,
}: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

  const targetNumber = typeof value === 'number' ? value : parseInt(value, 10) || 0

  useEffect(() => {
    if (!isInView || !isCounter) return

    let start = 0
    const duration = 1500
    const step = targetNumber / (duration / 16)

    const timer = setInterval(() => {
      start += step
      if (start >= targetNumber) {
        setCount(targetNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, isCounter, targetNumber])

  const displayValue = isCounter ? (isPercentage ? `${count}%` : `${count}+`) : value

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="stat-card flex items-center flex-col rounded-2xl outline-solid outline-[1px] outline-purple-900 p-6"
    >
      <h3
        className="text-2xl font-bold font-heading mb-2"
        style={{
          background: 'linear-gradient(135deg, #7B1FA2, #F0306A)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {displayValue}
      </h3>
      <p className="text-sm align-center">{statTitle}</p>
    </motion.div>
  )
}
