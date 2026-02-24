// src/sections/ActivitySection.tsx
import { motion } from 'framer-motion'
import { activities, certificates } from '@/data/portfolio'
import { fadeUp, staggerContainer, viewportOnce, scaleIn } from '@/lib/motion'

export default function ActivitySection() {
  return (
    <section id="activity" style={{ padding: 'var(--space-section) 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Activities */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{ marginBottom: '5rem' }}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '0.75rem',
          }}>
            Activities
          </motion.p>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--color-ink)',
            marginBottom: '3rem',
          }}>
            กิจกรรม
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
            gap: '1.5rem',
          }}>
            {activities.map((act) => (
              <motion.div
                key={act.title}
                variants={scaleIn}
                style={{
                  overflow: 'hidden',
                  border: '1px solid var(--color-line)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <div style={{
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-bg-alt)',
                }}>
                  <img
                    src={act.image}
                    alt={act.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const p = e.currentTarget.parentElement
                      if (p) {
                        p.style.display = 'flex'
                        p.style.alignItems = 'center'
                        p.style.justifyContent = 'center'
                        p.innerHTML = `<span style="font-family:var(--font-display);font-size:1rem;color:var(--color-ink-muted);padding:2rem;text-align:center">${act.title}</span>`
                      }
                    }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    marginBottom: '0.4rem',
                  }}>
                    {act.year}
                  </span>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: 'var(--color-ink)',
                    lineHeight: 1.4,
                  }}>
                    {act.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '0.75rem',
          }}>
            Certificates
          </motion.p>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--color-ink)',
            marginBottom: '3rem',
          }}>
            เกียรติบัตร
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: '1.5rem',
          }}>
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                variants={scaleIn}
                style={{
                  border: '1px solid var(--color-line)',
                  backgroundColor: 'var(--color-surface)',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-bg-alt)',
                }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const p = e.currentTarget.parentElement
                      if (p) {
                        p.style.display = 'flex'
                        p.style.alignItems = 'center'
                        p.style.justifyContent = 'center'
                        p.innerHTML = `<span style="font-family:var(--font-display);font-size:1rem;color:var(--color-ink-muted);padding:2rem;text-align:center">Certificate</span>`
                      }
                    }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    color: 'var(--color-accent)',
                    marginBottom: '0.4rem',
                  }}>
                    {cert.issuer} · {cert.year}
                  </span>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                    lineHeight: 1.5,
                  }}>
                    {cert.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
