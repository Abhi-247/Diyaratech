import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import { navLinks } from '../../data/content'
import { Button } from '../ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isOpen
            ? 'bg-white shadow-nav'
            : isScrolled
              ? 'bg-white/95 shadow-nav backdrop-blur-md'
              : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="relative z-[60] shrink-0" onClick={closeMenu}>
            <img src={logo} alt="Diyaratech Software" className="h-10 w-auto md:h-11" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-semibold text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact" size="md">
              Get Free Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] rounded-lg p-2 text-charcoal transition-colors hover:bg-surface lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[45] lg:hidden" aria-hidden={!isOpen}>
          <button
            type="button"
            className="absolute inset-0 top-20 bg-charcoal/20 backdrop-blur-[2px]"
            onClick={closeMenu}
            aria-label="Close menu"
          />

          <div className="absolute inset-x-0 top-20 bottom-0 overflow-y-auto bg-white shadow-lg">
            <ul className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3.5 text-lg font-semibold text-charcoal transition-colors hover:bg-surface hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 border-t border-border pt-4">
                <Button href="#contact" size="lg" className="w-full" onClick={closeMenu}>
                  Get Free Consultation
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
