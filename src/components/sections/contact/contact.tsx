import Input from '../../ui/input/input'
import Textarea from '../../ui/textarea/textarea'
import Button from '../../ui/button/button'
import { CgArrowRight } from 'react-icons/cg'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    console.log('handleSubmit вызван')
    console.log({ name, email, message })
    console.log('SERVICE:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('TEMPLATE:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    console.log('KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    // валидация
    if (!name || !email || !message) {
      console.log('валидация не прошла')
      return
    }

    try {
      console.log('отправляем...')
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: 'Новая заявка с портфолио',
          name,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      console.log('результат:', result)
      // успех
      toast.success(t('contact.successMsg'))
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      toast.error(t('contact.errorMsg'))
    }
  }

  const { t } = useTranslation()

  return (
    <section id="contact" className="py-4">
      <div className="mb-4">
        <span className="subtitle uppercase text-sm font-semibold tracking-tighter">
          {t('contact.subtitle')}
        </span>
        <h3 className="text-3xl font-bold text-white my-2">{t('contact.title')}</h3>
      </div>
      <form className="flex flex-col gap-6">
        <Input
          label={t('contact.nameLabel')}
          placeholder={t('contact.namePlaceholder')}
          value={name}
          onChange={(value) => setName(value)}
        />

        <Input
          label={t('contact.emailLabel')}
          placeholder={t('contact.emailPlaceholder')}
          value={email}
          onChange={(value) => setEmail(value)}
          type="email"
        />

        <Textarea
          label={t('contact.messageLabel')}
          placeholder={t('contact.messagePlaceholder')}
          value={message}
          onChange={(value) => setMessage(value)}
        />
        <Button
          type="button"
          variant="primary"
          onClick={handleSubmit}
          className="flex gap-2 items-center justify-center"
        >
          {t('contact.btn')} <CgArrowRight size={16} />
        </Button>
      </form>
    </section>
  )
}

export default Contact
