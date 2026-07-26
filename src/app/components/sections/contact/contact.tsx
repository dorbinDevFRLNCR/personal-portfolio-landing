import { getTranslations } from 'next-intl/server'
import ContactForm from './contactForm'

export default async function Contact() {
  const t = await getTranslations('contact')

  // Собираем объект локализованных строк для пропсов клиентской формы
  const formLabels = {
    nameLabel: t('nameLabel'),
    namePlaceholder: t('namePlaceholder'),
    emailLabel: t('emailLabel'),
    emailPlaceholder: t('emailPlaceholder'),
    messageLabel: t('messageLabel'),
    messagePlaceholder: t('messagePlaceholder'),
    btn: t('btn'),
    successMsg: t('successMsg'),
    errorMsg: t('errorMsg'),
  }

  return (
    <section id="contact" className="py-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          {t('subtitle')}
        </span>
        <h3 className="text-3xl font-bold text-white my-2">{t('title')}</h3>
      </div>

      <ContactForm labels={formLabels} />
    </section>
  )
}
