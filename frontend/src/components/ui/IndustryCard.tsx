import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Car,
  Clapperboard,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Plane,
  Scale,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Users,
  Zap,
  Home,
  UtensilsCrossed,
  Shield,
  HardHat,
  Briefcase,
} from 'lucide-react'

const industryIcons: Record<string, LucideIcon> = {
  Manufacturing: Factory,
  Healthcare: HeartPulse,
  Education: GraduationCap,
  Retail: ShoppingBag,
  'E-commerce': ShoppingCart,
  'Real Estate': Home,
  Logistics: Truck,
  Finance: Landmark,
  Banking: Landmark,
  Insurance: Shield,
  Hospitality: UtensilsCrossed,
  'Legal Services': Scale,
  Government: Building2,
  Construction: HardHat,
  Automotive: Car,
  Agriculture: Leaf,
  'Travel & Tourism': Plane,
  'Media & Entertainment': Clapperboard,
  'Human Resources': Users,
  'Energy & Utilities': Zap,
}

interface IndustryCardProps {
  name: string
}

export function IndustryCard({ name }: IndustryCardProps) {
  const Icon = industryIcons[name] ?? Briefcase

  return (
    <div className="group flex flex-col items-center rounded-xl border border-border bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-semibold text-charcoal">{name}</span>
    </div>
  )
}
