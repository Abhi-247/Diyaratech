interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover md:p-8">
      <div className="text-3xl font-extrabold text-primary md:text-4xl">{value}</div>
      <div className="mt-2 text-sm font-medium text-muted md:text-base">{label}</div>
    </div>
  )
}
