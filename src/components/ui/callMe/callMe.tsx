import CallsGrid from '../callsGrid/callsGrid'
import { useTranslation } from 'react-i18next'

function CallMe() {
  const { t } = useTranslation()

  return (
    <div className="call-me-card relative rounded-xl overflow-hidden">
      <div
        className="absolute bottom-[40%] left-[30%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240, 48, 106, 0.15) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
      <div className="py-12 px-4">
        <div className="flex flex-col items-center">
          <span className="subtitle uppercase text-sm font-semibold tracking-tighter pb-4">
            {t('callMe.subtitle')}
          </span>
          <h4 className="text-white text-3xl text-center font-bold font-body px-4">
            {t('callMe.title')}
          </h4>
          <div className="text-3xl pb-2">👋</div>
          <p className="text-center">{t('callMe.info')}</p>
        </div>
        <div className="mt-8">
          <CallsGrid />
        </div>
      </div>
    </div>
  )
}

export default CallMe
