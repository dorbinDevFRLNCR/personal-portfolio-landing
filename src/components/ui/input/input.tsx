// ui/input/input.tsx
type InputProps = {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'email'
  error?: string
  className?: string
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  className,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-muted">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input-field ${className || ''}`}
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  )
}

export default Input
