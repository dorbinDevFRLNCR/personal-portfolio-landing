import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type StatProps = {
  statCount?: number
  statTitle: string
  infinite?: boolean
  isPercentage?: boolean
}

function Stat({ statCount = 0, statTitle, infinite = false, isPercentage = false }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const step = statCount / (duration / 16)

    const timer = setInterval(() => {
      start += step
      if (start >= statCount) {
        setCount(statCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, statCount])

  return (
    <div
      ref={ref}
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
        {infinite ? '∞' : isPercentage ? `${count}%` : `${count}+`}
      </h3>
      <p className="text-sm align-center">{statTitle}</p>
    </div>
  )
}

export default Stat
