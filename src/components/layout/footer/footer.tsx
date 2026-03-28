import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-4 border-t border-white/10 bg-gray-900">
      <div className="px-4 py-4">
        <div className="flex justify-around">
          <Link className="text-gray-500 transition-colors hover:text-white" to="/impressum">
            Impressum
          </Link>
          <Link className="text-gray-500 transition-colors hover:text-white" to="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Kirill Pavlov - React Developer · {t('footer.first')} ❤️{' '}
          {t('footer.last')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
