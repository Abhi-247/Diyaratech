import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5',
  secondary:
    'bg-accent text-charcoal shadow-md hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary-light',
  ghost: 'text-charcoal hover:bg-surface hover:text-primary',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
