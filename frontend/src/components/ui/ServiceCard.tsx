import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

export function ServiceCard({ icon: Icon, title, description, items }: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-card-hover md:p-8">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-5 flex-1 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-subtle">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
