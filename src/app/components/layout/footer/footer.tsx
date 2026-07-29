import { Link } from '@/src/i18n/routing'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="mt-auto border-t border-white/10 bg-gray-900">
      <div className="px-4 py-4">
        <div className="flex justify-around">
          <Link className="text-gray-500 transition-colors hover:text-white" href="/impressum">
            Impressum
          </Link>
          <Link className="text-gray-500 transition-colors hover:text-white" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kirill Pavlov - Angehender Software Developer
        </p>
      </div>
    </footer>
  )
}
