import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { navLinks } from '../../data/content'
import { Button } from '../ui/Button'

function NavLink({ href, children, onClick, className }: { href: string; children: React.ReactNode; onClick?: () => void; className?: string }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const hash = href.slice(1) // e.g. "#services"
      if (location.pathname === '/') {
        // Already on home page, just scroll
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Navigate to home and then scroll
        navigate('/' + hash)
      }
    }
    onClick?.()
  }

  if (href.startsWith('/') && !href.startsWith('/#')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isOpen
          ? 'bg-white shadow-nav'
          : isScrolled
            ? 'bg-white/95 shadow-nav backdrop-blur-md'
            : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            className="relative z-[60] shrink-0"
            onClick={() => {
              closeMenu()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img src={logo} alt="Diyaratech Software" className="h-15 w-auto md:h-17" />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="text-base font-semibold text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 px-6 py-3 text-sm"
            >
              Get Free Consultation
            </Link>
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
            className="absolute inset-0 top-16 bg-charcoal/20 backdrop-blur-[2px]"
            onClick={closeMenu}
            aria-label="Close menu"
          />

          <div className="absolute inset-x-0 top-16 bottom-0 overflow-y-auto bg-white shadow-lg">
            <ul className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3.5 text-lg font-semibold text-charcoal transition-colors hover:bg-surface hover:text-primary"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-4 border-t border-border pt-4">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 px-8 py-3.5 text-base"
                >
                  Get Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
