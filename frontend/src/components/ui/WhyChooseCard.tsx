import { Check } from 'lucide-react'

interface WhyChooseCardProps {
  title: string
  index: number
}

export function WhyChooseCard({ title, index }: WhyChooseCardProps) {
  return (
    <div className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card-hover">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent-dark transition-colors group-hover:bg-accent">
        <Check className="h-5 w-5" />
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="mt-1 font-semibold text-charcoal">{title}</p>
      </div>
    </div>
  )
}
