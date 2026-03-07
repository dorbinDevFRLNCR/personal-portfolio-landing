type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

function Button({ children, variant = 'primary', className }: ButtonProps) {
  return <button className={`btn-${variant} ${className}`}>{children}</button>
}

export default Button
