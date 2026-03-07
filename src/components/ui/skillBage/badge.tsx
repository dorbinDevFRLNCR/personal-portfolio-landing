type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

function Badge({ children, style }: Props) {
  return (
    <span className="badge-tech" style={style}>
      {children}
    </span>
  )
}

export default Badge
