interface BoxProps {
  children: React.ReactNode
  className?: string
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`border-[1px] border-gray-300 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  )
}
