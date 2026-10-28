import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { DeveloperActivity } from './components/DeveloperActivity';
import { ContactForm } from './components/ContactForm';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090F] text-[#F4F7FF] flex flex-col font-sans selection:bg-[#55E6FF]/30 selection:text-[#55E6FF]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#55E6FF] text-[#07090F] font-bold font-mono text-xs rounded-md shadow-lg outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Landmarks */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DeveloperActivity />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal Dialog */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
