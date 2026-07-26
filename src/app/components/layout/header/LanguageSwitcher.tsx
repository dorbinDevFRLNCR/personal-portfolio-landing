'use client'

import { useState, useRef, useEffect, useTransition } from 'react'
import { useLocale } from 'next-intl'
// 1. ИМПОРТИРУЕМ ИЗ ТВОЕГО ФАЙЛА РОУТИНГА NEXT-INTL
import { usePathname, useRouter } from '@/src/i18n/routing'
import { motion, AnimatePresence } from 'framer-motion'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
]

export default function LanguageSwitcher() {
  const currentLocale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  // 2. Добавляем useTransition для бесшовного обновления
  const [isPending, startTransition] = useTransition()

  const [isOpen, setIsOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  const changeLang = (newLocale: string) => {
    setIsOpen(false)
    if (newLocale === currentLocale) return

    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={langRef} className="relative">
      <button
        disabled={isPending}
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm text-muted hover:text-text transition-colors px-2 py-1 rounded border border-white/10 hover:border-white/20 disabled:opacity-50"
      >
        {currentLocale.toUpperCase()} ▾
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1 flex flex-col bg-navy border border-white/10 rounded-lg overflow-hidden shadow-xl list-none z-50"
          >
            {LANGS.map((lang) => (
              <li key={lang.code}>
                <button
                  disabled={isPending}
                  onClick={() => changeLang(lang.code)}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-white/5 transition-colors ${
                    currentLocale === lang.code ? 'text-text font-bold' : 'text-muted'
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
  )
}
