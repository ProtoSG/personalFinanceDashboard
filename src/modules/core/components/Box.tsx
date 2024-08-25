interface BoxProps {
  children: React.ReactNode
  className?: string
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`bg-lime-100 rounded-lg shadow-md p-4 m-2 ${className}`}>
      {children}
    </div>
  )
}
