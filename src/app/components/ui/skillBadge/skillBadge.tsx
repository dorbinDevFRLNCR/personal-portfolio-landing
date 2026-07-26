type Props = {
  onClick?: () => void
  children: React.ReactNode
  style?: React.CSSProperties
}

function Badge({ onClick, children, style }: Props) {
  return (
    <span className="badge-tech" style={style} onClick={onClick}>
      {children}
    </span>
  )
}

export default Badge
