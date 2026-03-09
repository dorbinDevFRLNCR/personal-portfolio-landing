type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

function Button({ children, variant = 'primary', className, onClick }: ButtonProps) {
  return (
    <button className={`btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
