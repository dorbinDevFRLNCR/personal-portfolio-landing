// ui/textarea/textarea.tsx
type TextareaProps = {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  rows?: number
}

function Textarea({ label, placeholder, value, onChange, error, rows = 5 }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-muted">{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="input-field resize-none"
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  )
}

export default Textarea
