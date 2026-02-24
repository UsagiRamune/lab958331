// src/App.tsx
import './index.css'
import Navbar from '@/components/Navbar'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ProjectsSection from '@/sections/ProjectsSection'
import ActivitySection from '@/sections/ActivitySection'
import ContactSection from '@/sections/ContactSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ActivitySection />
        <ContactSection />
      </main>

      {/* Responsive styles */}
      <style>{`
        /* Mobile overrides */
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding-top: 5rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-top-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }

        @media (min-width: 769px) {
          .show-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
