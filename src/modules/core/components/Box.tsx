interface BoxProps {
  children: React.ReactNode
  className?: string
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`bg-white border-[1px] border-gray-300 rounded-lg p-4 m-2 ${className}`}>
      {children}
    </div>
  )
}
