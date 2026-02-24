// src/sections/HeroSection.tsx
import { motion } from 'framer-motion'
import { personal } from '@/data/portfolio'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '6rem 2rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '3rem',
      }}
      className="hero-section"
    >
      {/* Left: Text */}
      <motion.div
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        animate="show"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        {/* Label */}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ display: 'block', width: '28px', height: '2px', backgroundColor: 'var(--color-accent)' }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)',
          }}>Portfolio — 2023 to Present</span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={fadeUp} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
          lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--color-ink)',
        }}>
          {personal.nameEn.split(' ').map((w, i) => (
            <span key={i} style={{ display: 'block' }}>{w}</span>
          ))}
          <span style={{ color: 'var(--color-accent)' }}>.</span>
        </motion.h1>

        {/* Role */}
        <motion.p variants={fadeUp} style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
          fontWeight: 300, color: 'var(--color-ink-muted)', letterSpacing: '0.01em',
        }}>
          Game Designer / 2D Artist / Developer<br />
          <span style={{ fontStyle: 'italic' }}>CAMT, Chiang Mai University</span>
        </motion.p>

        {/* Tagline */}
        <motion.blockquote variants={fadeUp} style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
          fontStyle: 'italic', color: 'var(--color-ink)',
          borderLeft: '3px solid var(--color-accent)', paddingLeft: '1rem',
          lineHeight: 1.65, maxWidth: '38ch',
          opacity: 0.8,
        }}>
          "For me, games are not just entertainment — they are science, art, and player experience combined."
        </motion.blockquote>

        {/* CTA */}
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
          <a href="#projects" style={{
            display: 'inline-block', padding: '0.7rem 1.6rem',
            backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)',
            fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.04em', transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent-dim)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent)' }}
          >View Projects →</a>
          <a href="#contact" style={{
            display: 'inline-block', padding: '0.7rem 1.6rem',
            border: '1.5px solid var(--color-line)', color: 'var(--color-ink)',
            fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-line)'; e.currentTarget.style.color = 'var(--color-ink)' }}
          >Contact</a>
        </motion.div>
      </motion.div>

      {/* Right: Photo */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}
      >
        {/* Decorative bg rect */}
        <div style={{
          position: 'absolute', top: '5%', right: 0,
          width: '88%', height: '95%',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-line)',
          zIndex: 0,
        }} />

        {/* Photo */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: '78%', aspectRatio: '3/4',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-2)',
        }}>
          <img
            src={personal.photo} alt={personal.nameEn}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const p = e.currentTarget.parentElement
              if (p) { p.style.display='flex'; p.style.alignItems='center'; p.style.justifyContent='center'; p.innerHTML=`<span style="font-family:var(--font-display);color:var(--color-ink-muted)">photo here</span>` }
            }}
          />
        </div>

        {/* Label badge */}
        <div style={{
          position: 'absolute', bottom: '8%', left: '2%', zIndex: 2,
          backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)',
          padding: '0.4rem 0.9rem',
          fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>CMU · CAMT · Digital Game</div>
      </motion.div>
    </section>
  )
}