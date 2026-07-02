import { User } from 'lucide-react'

interface DeveloperCardProps {
  title: string
}

export function DeveloperCard({ title }: DeveloperCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white transition-transform duration-300 group-hover:scale-110">
        <User className="h-5 w-5" />
      </div>
      <span className="text-sm font-semibold text-charcoal md:text-base">{title}</span>
    </div>
  )
}
