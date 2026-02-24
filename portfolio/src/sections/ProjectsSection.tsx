// src/sections/ProjectsSection.tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/data/portfolio'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

function ProjectCard({ project, onClick }: {
  project: Project
  onClick: () => void
}) {
  return (
    <motion.article
      variants={fadeUp}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-line)',
        overflow: 'hidden',
      }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
    >
      {/* Cover image */}
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--color-bg-alt)', position: 'relative' }}>
        <img
          src={project.images[0]}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            const p = e.currentTarget.parentElement
            if (p) { p.style.display='flex'; p.style.alignItems='center'; p.style.justifyContent='center'; p.innerHTML=`<span style="font-family:var(--font-display);font-size:1.2rem;color:var(--color-ink-muted);padding:2rem;text-align:center">${project.title}</span>` }
          }}
        />
        {/* Year badge */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)',
          padding: '0.2rem 0.6rem',
          fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.06em',
        }}>{project.year}</div>

      </div>

      {/* Content */}
      <div style={{ padding: '1.2rem 1.4rem 1.4rem' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '0.4rem' }}>
          {project.type}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--color-ink)', marginBottom: '0.35rem' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-ink-muted)', marginBottom: '1rem', fontStyle: 'italic' }}>
          {project.subtitle}
        </p>
        {/* Role chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
          {project.role.map(r => (
            <span key={r} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
              padding: '0.18rem 0.55rem',
              border: '1px solid var(--color-accent)', color: 'var(--color-accent)',
              letterSpacing: '0.03em',
            }}>{r}</span>
          ))}
        </div>
        {/* Engine + link hint */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--color-ink-muted)' }}>
            {project.engine.join(' · ')}
          </p>
          {project.link && (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              Play / Visit ↗
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(10,8,6,0.8)',
          zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--color-bg-alt)',
            border: '1px solid var(--color-line)',
            width: '100%', maxWidth: '820px', maxHeight: '92vh', overflowY: 'auto',
          }}
        >
          {/* Sticky header */}
          <div style={{
            position: 'sticky', top: 0, zIndex: 1,
            backgroundColor: 'var(--color-bg-alt)',
            padding: '1.2rem 1.5rem',
            borderBottom: '1px solid var(--color-line)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.2rem' }}>
                {project.type} · {project.year}
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--color-ink)', lineHeight: 1.1 }}>
                {project.title}
              </h2>
            </div>
            <button onClick={onClose} style={{
              background: 'none', border: '1.5px solid var(--color-line)',
              width: '36px', height: '36px', cursor: 'pointer',
              fontSize: '1rem', color: 'var(--color-ink)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>✕</button>
          </div>

          <div style={{ padding: '1.5rem' }}>
            {/* Main image — คลิกได้เพื่อขยาย */}
            {project.images.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div
                  onClick={() => setLightbox(true)}
                  style={{
                    aspectRatio: '16/9', overflow: 'hidden',
                    backgroundColor: 'var(--color-surface)', marginBottom: '0.6rem',
                    cursor: 'zoom-in', position: 'relative',
                  }}
                >
                  <img
                    src={project.images[activeImg]}
                    alt={`${project.title} ${activeImg + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                    onError={e => { e.currentTarget.style.opacity = '0.3' }}
                  />
                  {/* Zoom hint */}
                  <div style={{
                    position: 'absolute', bottom: '0.6rem', right: '0.6rem',
                    backgroundColor: 'rgba(0,0,0,0.5)', color: 'var(--color-ink)',
                    padding: '0.2rem 0.5rem',
                    fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.06em',
                    textTransform: 'uppercase', pointerEvents: 'none',
                  }}>
                    ⊕ ขยาย
                  </div>
                </div>

                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.25rem', scrollbarWidth: 'thin' }}>
                    {project.images.map((img, i) => (
                      <button key={i} onClick={() => setActiveImg(i)} style={{
                        flexShrink: 0, width: '72px', height: '54px',
                        padding: 0, cursor: 'pointer',
                        border: `2px solid ${i === activeImg ? 'var(--color-accent)' : 'var(--color-line)'}`,
                        overflow: 'hidden', background: 'var(--color-surface)',
                        opacity: i === activeImg ? 1 : 0.55,
                        transition: 'opacity 0.2s, border-color 0.2s',
                      }}>
                        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.currentTarget.style.opacity = '0' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.93rem', lineHeight: 1.8, color: 'var(--color-ink)', marginBottom: '1.5rem' }}>
              {project.description}
            </p>

            {/* งานที่รับผิดชอบ */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '0.75rem' }}>งานที่รับผิดชอบ</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.details.map((d, i) => (
                  <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--color-ink)', paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)', lineHeight: 1.65 }}>{d}</div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginBottom: '0.75rem' }}>Tools & Engine</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.tools.map(t => (
                  <span key={t} style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', padding: '0.25rem 0.7rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-line)', color: 'var(--color-ink)' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* QR + Link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {project.qrCode && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: '80px', height: '80px', border: '1.5px solid var(--color-line)', padding: '4px', backgroundColor: 'white', overflow: 'hidden' }}>
                    <img src={project.qrCode} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} onError={e => { e.currentTarget.style.display = 'none' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-muted)' }}>QR / Demo</span>
                </div>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" style={{
                  display: 'inline-block', padding: '0.65rem 1.5rem',
                  backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)',
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
                  textDecoration: 'none', letterSpacing: '0.04em', transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent-light)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--color-accent)' }}
                >Play / Visit →</a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(0,0,0,0.92)',
              zIndex: 300,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
              cursor: 'zoom-out',
            }}
          >
            {/* Prev / Next buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); setActiveImg(i => (i - 1 + project.images.length) % project.images.length) }}
                  style={{
                    position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--color-ink)', width: '44px', height: '44px',
                    fontSize: '1.2rem', cursor: 'pointer', zIndex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >‹</button>
                <button
                  onClick={e => { e.stopPropagation(); setActiveImg(i => (i + 1) % project.images.length) }}
                  style={{
                    position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--color-ink)', width: '44px', height: '44px',
                    fontSize: '1.2rem', cursor: 'pointer', zIndex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >›</button>
              </>
            )}

            {/* Full image */}
            <motion.img
              key={activeImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={project.images[activeImg]}
              alt={`${project.title} ${activeImg + 1}`}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '100%', maxHeight: '100%',
                objectFit: 'contain', display: 'block',
                userSelect: 'none',
              }}
            />

            {/* Counter + close */}
            <div style={{
              position: 'absolute', top: '1.2rem', right: '1.2rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                {activeImg + 1} / {project.images.length}
              </span>
              <button
                onClick={() => setLightbox(false)}
                style={{
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white', width: '36px', height: '36px', cursor: 'pointer',
                  fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" style={{ padding: 'var(--space-section) 2rem', backgroundColor: 'var(--color-bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ marginBottom: '3.5rem' }}>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.75rem',
            }}>Work Experience & Performance</motion.p>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--color-ink)',
            }}>Projects</motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden" whileInView="show" viewport={viewportOnce}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap: '1.5rem' }}
          >
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}