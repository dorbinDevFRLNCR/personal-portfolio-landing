'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { CgArrowRight } from 'react-icons/cg'
import Input from '../../ui/input/input'
import Textarea from '../../ui/textarea/textarea'
import Button from '../../ui/button/button'

interface ContactFormProps {
  labels: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    btn: string
    successMsg: string
    errorMsg: string
  }
}

export default function ContactForm({ labels }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !message) return

    setIsLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          title: 'Новая заявка с портфолио',
          name,
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast.success(labels.successMsg)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      toast.error(labels.errorMsg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        label={labels.nameLabel}
        placeholder={labels.namePlaceholder}
        value={name}
        onChange={(value) => setName(value)}
      />

      <Input
        label={labels.emailLabel}
        placeholder={labels.emailPlaceholder}
        value={email}
        onChange={(value) => setEmail(value)}
        type="email"
      />

      <Textarea
        label={labels.messageLabel}
        placeholder={labels.messagePlaceholder}
        value={message}
        onChange={(value) => setMessage(value)}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={isLoading}
        className="flex gap-2 items-center justify-center disabled:opacity-50"
      >
        {isLoading ? '...' : labels.btn} <CgArrowRight size={16} />
      </Button>
    </form>
  )
}
