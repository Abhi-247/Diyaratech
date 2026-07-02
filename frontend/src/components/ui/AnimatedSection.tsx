import type { HTMLAttributes, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className = '', id, ...props }: AnimatedSectionProps) {
  const { ref, isVisible } = useInView<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`animate-in ${isVisible ? 'visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
