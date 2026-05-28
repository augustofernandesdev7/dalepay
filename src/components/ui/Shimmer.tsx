import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ShimmerProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'p'
}

export default function Shimmer({ children, className, as: Tag = 'span' }: ShimmerProps) {
  return (
    <Tag className={clsx('shimmer', className)}>
      {children}
    </Tag>
  )
}
