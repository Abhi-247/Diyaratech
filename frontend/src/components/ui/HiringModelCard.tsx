import { CheckCircle2 } from 'lucide-react'

interface HiringModelCardProps {
  title: string
  description: string
  idealFor: string[]
}

export function HiringModelCard({ title, description, idealFor }: HiringModelCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-card-hover md:p-8">
      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-20" />
      <h3 className="text-xl font-bold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-6 flex-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-subtle">Ideal for</p>
        <ul className="space-y-2">
          {idealFor.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
