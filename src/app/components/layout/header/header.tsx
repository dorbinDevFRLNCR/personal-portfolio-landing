import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

export default async function Header() {
  const t = await getTranslations('nav')

  const menuItems = [
    { name: t('projects'), link: '#projects' },
    { name: t('about'), link: '#about' },
    { name: t('contacts'), link: '#contact' },
  ]

  return (
    <header className="w-full sticky top-0 z-40 shadow-md backdrop-blur-sm bg-navy/40">
      <div className="max-w-7xl mx-auto flex px-4 py-4 items-center justify-between">
        <Link className="logo font-heading text-xl font-bold tracking-tighter text-white" href="/">
          dev.portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none text-sm">
            {menuItems.map((item) => (
              <li className="text-muted hover:text-text transition-colors" key={item.link}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <MobileMenu items={menuItems} />
        </div>
      </div>
    </header>
  )
}
