type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
}

function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  href,
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-${variant} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={`btn-${variant} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
