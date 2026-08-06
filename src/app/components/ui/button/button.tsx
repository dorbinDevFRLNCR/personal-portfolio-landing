'use client'

import { Link } from '@/src/i18n/routing'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
}

function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
}: ButtonProps) {
  if (href) {
    // Если ссылка внешняя (начинается с http), рендерим обычный <a>
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-${variant} ${className}`.trim()}
        >
          {children}
        </a>
      )
    }

    // Для внутренних ссылок используем Link из i18n
    return (
      <Link href={href} className={`btn-${variant} ${className} select-none`.trim()}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`btn-${variant} ${className} select-none`.trim()}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
