import { Quote, Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  rating: number
}

export function TestimonialCard({ quote, name, role, company, rating }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8">
      <Quote className="h-8 w-8 text-primary/30" />
      <div className="mt-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 border-t border-border pt-6">
        <p className="font-bold text-charcoal">{name}</p>
        <p className="text-sm text-subtle">
          {role}, {company}
        </p>
      </div>
    </div>
  )
}
