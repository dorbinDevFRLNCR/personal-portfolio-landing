import { useEffect, useRef, useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import Modal from '../../ui/modal/modal'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const LANGS = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  }

  const changeLang = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
    setIsLangOpen(false)
  }

  const menuItems = [
    { name: t('nav.projects'), link: '#projects' },
    { name: t('nav.about'), link: '#about' },
    { name: t('nav.contacts'), link: '#contact' },
  ]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="w-full sticky top-0 z-50 shadow-md backdrop-blur-sm background-opacity-40">
      <div className="max-w-7xl mx-auto flex px-4 py-4 items-center justify-between">
        <div>
          <Link className="logo font-heading text-xl font-bold tracking-tighter" to="/">
            dev.portfolio
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none text-sm">
            {menuItems.map((item) => (
              <li className="text-muted hover:text-text" key={item.link}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-sm text-muted hover:text-text transition-colors px-2 py-1 rounded border border-white/10 hover:border-white/20"
              >
                {i18n.language.toUpperCase()} ▾
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 flex flex-col bg-navy border border-white/10 rounded-lg overflow-hidden shadow-xl list-none"
                  >
                    {LANGS.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => changeLang(lang.code)}
                          className={`w-full px-4 py-2 text-sm text-left hover:bg-white/5 transition-colors ${
                            i18n.language === lang.code ? 'text-text' : 'text-muted'
                          }`}
                        >
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <CgMenu
              className="md:hidden"
              color="#EEF0FF"
              size={24}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
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
                    {menuItems.map((item) => (
                      <motion.li
                        className="text-muted active:text-text transition-colors hover:text-text"
                        variants={itemVariants}
                        key={item.link}
                      >
                        <a
                          className="text-xl"
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                          href={item.link}
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
        </div>
      </div>
    </header>
  )
}

export default Header
