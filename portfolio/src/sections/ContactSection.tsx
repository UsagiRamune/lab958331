// src/sections/ContactSection.tsx
import { motion } from 'framer-motion'
import { personal } from '@/data/portfolio'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: 'var(--space-section) 2rem', backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-line)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.75rem',
            }}>Get in touch</motion.p>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
              lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--color-ink)', marginBottom: '1.5rem',
            }}>
              Let's work<br /><span style={{ color: 'var(--color-accent)' }}>together.</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8,
              color: 'var(--color-ink-muted)', maxWidth: '36ch',
            }}>
              กำลังมองหาตำแหน่ง Internship ด้าน Game Development / Game Design พร้อมร่วมงานและเรียนรู้สิ่งใหม่ๆ
            </motion.p>
          </motion.div>

          {/* Right: contacts */}
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { label: 'Email', value: personal.contact.email, href: `mailto:${personal.contact.email}` },
              { label: 'Tel', value: personal.contact.phone, href: `tel:${personal.contact.phone}` },
              { label: 'Facebook', value: personal.contact.facebook, href: '#' },
            ].map(item => (
              <motion.a key={item.label} variants={fadeUp} href={item.href} style={{
                display: 'flex', alignItems: 'baseline', gap: '1.5rem',
                textDecoration: 'none', padding: '1.5rem 0',
                borderBottom: '1px solid var(--color-line)', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const v = e.currentTarget.querySelector('.cval') as HTMLElement
                if (v) v.style.color = 'var(--color-accent)'
              }}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector('.cval') as HTMLElement
                if (v) v.style.color = 'var(--color-ink)'
              }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', width: '4.5rem', flexShrink: 0 }}>{item.label}</span>
                <span className="cval" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-ink)', transition: 'color 0.2s' }}>{item.value}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: '1200px', margin: '5rem auto 0',
        paddingTop: '2rem', borderTop: '1px solid var(--color-line)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-ink-muted)' }}>Atikun Chinnabud</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-ink-muted)', letterSpacing: '0.04em' }}>© 2025 · CAMT CMU · Digital Game Development</span>
      </div>
    </section>
  )
}