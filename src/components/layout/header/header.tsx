import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import Modal from '../../ui/modal/modal'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex px-4 py-4 items-center justify-between">
        <div>
          <p className="logo font-heading text-xl font-bold tracking-tighter">dev.portfolio</p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none text-lg">
            {['Проекты', 'Обо мне', 'Контакты'].map((item) => (
              <li className="text-muted hover:text-text" key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <CgMenu
            className="md:hidden"
            color="#EEF0FF"
            size={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <AnimatePresence>
            {isMenuOpen && (
              <Modal key="modal" onClose={() => setIsMenuOpen(false)}>
                <div className="flex flex-col items-center gap-4 mt-4">
                  <div
                    className="absolute -top-24 -right-24 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none z-99"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(123, 31, 162, 0.25) 0%, transparent 70%)',
                      animation: 'float 8s ease-in-out infinite',
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none z-99"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(240, 48, 106, 0.15) 0%, transparent 70%)',
                      animation: 'float 10s ease-in-out infinite reverse',
                    }}
                  />

                  <motion.ul
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-30 flex flex-col gap-8 list-none"
                  >
                    {['Проекты', 'Обо мне', 'Контакты'].map((item) => (
                      <motion.li
                        className="text-muted active:text-text transition-colors hover:text-text"
                        variants={itemVariants}
                        key={item}
                      >
                        <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

export default Header
