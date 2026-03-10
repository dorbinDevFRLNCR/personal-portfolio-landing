type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button className={`btn-${variant} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
