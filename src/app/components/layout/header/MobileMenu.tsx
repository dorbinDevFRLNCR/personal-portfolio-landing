'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../../ui/modal/modal'

type MenuItem = {
  name: string
  link: string
}

type MobileMenuProps = {
  items: MenuItem[]
}

const menuVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#EEF0FF] p-1"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <div className="flex flex-col items-center gap-4 mt-4 relative w-full h-full">
              {/* Decorative background glows */}
              <div
                className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(123, 31, 162, 0.25) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute bottom-10 left-[10%] w-[250px] h-[250px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(240, 48, 106, 0.15) 0%, transparent 70%)',
                }}
              />

              <motion.ul
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="mt-20 flex flex-col items-center gap-8 list-none z-10"
              >
                {items.map((item) => (
                  <motion.li
                    key={item.link}
                    variants={itemVariants}
                    className="text-muted active:text-text hover:text-text transition-colors"
                  >
                    <a
                      href={item.link}
                      className="text-2xl font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}
