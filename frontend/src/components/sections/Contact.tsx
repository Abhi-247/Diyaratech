import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { budgetOptions, contactInfo, serviceOptions } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatedSection id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge="Contact Us"
          title="Let's Build Something Great Together"
          description="Tell us about your project and we'll connect you with the right technology experts within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Head Office</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{contactInfo.headOffice}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Branch Office</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{contactInfo.branchOffice}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1 block text-sm text-primary transition-colors hover:text-primary-dark"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="mt-1 block text-sm text-primary transition-colors hover:text-primary-dark"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Business Hours</h3>
                <p className="mt-1 text-sm text-muted">{contactInfo.hours}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-charcoal">Thank You!</h3>
                <p className="mt-2 text-muted">
                  Your consultation request has been received. Our team will contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Request Consultation
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
