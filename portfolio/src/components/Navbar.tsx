// src/components/Navbar.tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
          backgroundColor: scrolled ? 'rgba(20,24,32,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-line)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo / Name */}
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            color: 'var(--color-ink)',
            letterSpacing: '-0.01em',
          }}>
            Atikun<span style={{ color: 'var(--color-accent)' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-ink-muted)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'var(--color-ink)',
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(280px, 80vw)',
              backgroundColor: 'var(--color-bg-alt)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '3rem 2rem',
              gap: '2rem',
              boxShadow: '-4px 0 30px rgba(28,26,23,0.12)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(28,26,23,0.3)',
              zIndex: 98,
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}