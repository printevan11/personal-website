import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ theme, themeClasses, toggleTheme, mobileMenuOpen, setMobileMenuOpen, activeSection }) {
  const navLinks = ['About', 'Skills', 'Certifications', 'Work', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full backdrop-blur-md z-40 border-b ${themeClasses.border} ${theme === 'dark' ? 'bg-[#030712]/80' : 'bg-[#f9fafb]/80'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-bold tracking-tight ${themeClasses.textTitle}`}
        >
          &lt;ERT /&gt;
        </motion.div>

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => {
              const sectionId = link.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  className={`text-sm font-medium transition-colors ${isActive ? 'text-emerald-500' : 'hover:text-emerald-500'}`}
                >
                  {link}
                </a>
              );
            })}
          </div>

          <a
            href="src/resume/TABAR-EVANROI_CV"
            download="TABAR-EVANROI_CV"
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all ${
              theme === 'dark'
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-gray-900 text-white hover:bg-black'
            }`}
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={themeClasses.textTitle}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 w-full border-b ${themeClasses.border} ${theme === 'dark' ? 'bg-[#030712]' : 'bg-white'} flex flex-col p-6 gap-5 md:hidden shadow-lg`}
          >
            {navLinks.map((link) => {
              const sectionId = link.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold ${isActive ? 'text-emerald-500' : ''}`}
                >
                  {link}
                </a>
              );
            })}
            <hr className={themeClasses.border} />
            <a href="src/resume/TABAR-EVANROI_CV" download="TABAR-EVANROI_CV" className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-center block">
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}