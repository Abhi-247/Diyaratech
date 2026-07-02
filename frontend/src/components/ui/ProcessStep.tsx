interface ProcessStepProps {
  step: number
  title: string
  isLast?: boolean
}

export function ProcessStep({ step, title, isLast }: ProcessStepProps) {
  let visibilityClasses = 'block'
  
  if (step % 2 === 0) {
    visibilityClasses = 'hidden'
  }
  
  if (step % 2 === 0 && step % 4 !== 0) {
    visibilityClasses += ' md:block'
  }
  
  if (step % 4 === 0) {
    visibilityClasses += ' md:hidden'
  }
  
  if (step % 4 === 0 && step % 8 !== 0) {
    visibilityClasses += ' lg:block'
  }

  return (
    <div className="relative flex flex-col items-center text-center">
      {!isLast && (
        <div className={`absolute left-[calc(50%+2rem)] top-6 h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-primary to-primary/20 ${visibilityClasses}`} />
      )}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-lg shadow-primary/30">
        {step}
      </div>
      <p className="mt-4 max-w-[120px] text-sm font-semibold leading-snug text-charcoal">{title}</p>
    </div>
  )
}
