import type { ReactNode } from 'react'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </div>
  )
}
