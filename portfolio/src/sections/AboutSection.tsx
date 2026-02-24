// src/sections/AboutSection.tsx
import { motion } from 'framer-motion'
import { personal, skills } from '@/data/portfolio'
import { fadeUp, slideRight, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion'

export default function AboutSection() {
  const hardSkills = skills.filter(s => s.category === 'hard')
  const softSkills = skills.filter(s => s.category === 'soft')

  return (
    <section id="about" style={{ padding: 'var(--space-section) 2rem', backgroundColor: 'var(--color-bg-alt)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ marginBottom: '4rem' }}>
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.6rem',
          }}>About Me</motion.p>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--color-ink)',
          }}>Who I Am<span style={{ color: 'var(--color-accent)' }}>.</span></motion.h2>
        </motion.div>

        {/* Photo + Bio */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem', alignItems: 'start', marginBottom: '4.5rem' }} className="about-top-grid">

          {/* Photo */}
          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-1.5rem', right: '-1rem',
              fontFamily: 'var(--font-display)', fontSize: '7rem', lineHeight: 1,
              color: 'var(--color-line)', userSelect: 'none', zIndex: 0, letterSpacing: '-0.04em',
            }}>01</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                position: 'absolute', top: '8px', left: '8px', right: '-8px', bottom: '-8px',
                border: '2px solid var(--color-accent)', zIndex: 0,
              }} />
              <div style={{ position: 'relative', zIndex: 1, aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
                <img
                  src={personal.photo} alt={personal.nameEn}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const p = e.currentTarget.parentElement
                    if (p) { p.style.display='flex'; p.style.alignItems='center'; p.style.justifyContent='center'; p.innerHTML=`<span style="font-family:var(--font-display);color:var(--color-ink-muted)">photo</span>` }
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', paddingLeft: '0.25rem' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-ink)', lineHeight: 1.2, marginBottom: '0.25rem' }}>{personal.name}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-ink-muted)', letterSpacing: '0.03em' }}>{personal.nameEn} · {personal.nickname}</p>
            </div>
          </motion.div>

          {/* Bio + Education */}
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ paddingTop: '0.5rem' }}>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              lineHeight: 1.9, color: 'var(--color-ink)', marginBottom: '2.5rem',
              borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.25rem',
            }}>{personal.bio}</motion.p>

            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '1.25rem',
            }}>Education</motion.p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {personal.education.map((edu, i) => (
                <motion.div key={i} variants={slideRight} style={{
                  display: 'grid', gridTemplateColumns: '8rem 1fr', gap: '1.25rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid var(--color-line)',
                  borderBottom: i === personal.education.length - 1 ? '1px solid var(--color-line)' : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-ink-muted)', paddingTop: '0.2rem' }}>{edu.year}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem', color: 'var(--color-ink)', marginBottom: '0.25rem' }}>{edu.institution}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--color-ink-muted)' }}>{edu.program}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '2rem',
          }}>Skills & Abilities</motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: 'var(--color-line)' }} className="skills-grid">
            {/* Hard Skills */}
            <motion.div variants={fadeUp} style={{ backgroundColor: 'var(--color-surface)', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '1.5rem' }}>Hard Skills</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {hardSkills.map((skill, i) => (
                  <div key={skill.name} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.85rem 0',
                    borderBottom: i < hardSkills.length - 1 ? '1px solid var(--color-line)' : 'none',
                  }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-ink)' }}>{skill.name}</span>
                    <span style={{ display: 'block', width: '7px', height: '7px', backgroundColor: 'var(--color-accent)', flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills + Contact */}
            <motion.div variants={fadeUp} style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '1.25rem' }}>Soft Skills</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {softSkills.map(skill => (
                    <span key={skill.name} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.82rem', padding: '0.35rem 0.85rem',
                      border: '1.5px solid var(--color-accent)', color: 'var(--color-accent)',
                    }}>{skill.name}</span>
                  ))}
                </div>
              </div>
              <div style={{ height: '1px', backgroundColor: 'var(--color-line)' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '1rem' }}>Contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { label: 'Tel', value: personal.contact.phone },
                    { label: 'Email', value: personal.contact.email },
                    { label: 'Facebook', value: personal.contact.facebook },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', width: '4rem', flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--color-ink)' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}