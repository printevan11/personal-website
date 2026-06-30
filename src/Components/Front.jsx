import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, MapPin } from 'lucide-react';
import About from './About';
import Skills from './Skills';
import Certifications from './Certifications';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Navbar from './Navbar';

export default function Front() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Toggle between dark and light modes
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Handle scroll to detect current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'certifications', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      // Check if we're at the bottom of the page (for Contact section)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme color mappings
  const themeClasses = {
    bg: theme === 'dark' ? 'bg-[#030712] text-gray-300' : 'bg-[#f9fafb] text-gray-600',
    bgAlt: theme === 'dark' ? 'bg-[#0b0f19]' : 'bg-[#f3f4f6]',
    textTitle: theme === 'dark' ? 'text-white' : 'text-gray-900',
    textMuted: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
    border: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
    card: theme === 'dark' ? 'bg-[#111827]' : 'bg-white',
    badge: theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700',
    profileOffset: theme === 'dark' ? 'bg-emerald-900/30 border-emerald-700' : 'bg-gray-300 border-gray-400',
    imgBorder: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'animated-bg text-gray-300' : 'animated-bg-light text-gray-600'} font-sans transition-colors duration-300 selection:bg-emerald-500/30 overflow-x-hidden`}>

      {/* Navigation */}
      <Navbar
        theme={theme}
        themeClasses={themeClasses}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="flex-1 space-y-10"
        >
          <div className="space-y-6">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${themeClasses.textTitle}`}>
              Hi, I'm Evan <span className="inline-block animate-bounce">👋</span>
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${themeClasses.textMuted}`}>
              I'm a Full-Stack JavaScript Developer with 1 year of experience building responsive and user-friendly web applications using React.js for the frontend and Node.js for the backend.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-emerald-500" />
              <span>Lucena City, Philippines</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Social Platforms links matching layout */}
          <div className="flex gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors w-8 h-8">
              <img src="/assets/github.png" alt="Github" className="w-full h-full object-contain" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors w-8 h-8">
              <img src="/assets/facebook.webp" alt="Facebook" className="w-full h-full object-contain" />
            </a>
            <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors w-8 h-8">
              <img src="/assets/figma-1.png" alt="Figma" className="w-full h-full object-contain" />
            </a>
          </div>
        </motion.div>

        {/* Hero Profile Photo Frame with accurate Offset Borders */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-80 h-96 md:w-96 md:h-[28rem] shrink-0"
        >
          {/* Offset Shadow Box */}
          <div className={`absolute -bottom-4 -right-4 w-full h-full border-4 ${themeClasses.profileOffset} z-0`} />

          {/* Main Profile Photo */}
          <img
            src="/assets/profile.jpg"
            alt="Evan"
            className="w-full h-full object-cover shadow-2xl relative z-10"
          />
        </motion.div>
      </section>

      {/* Import Separated Sections */}
      <About theme={theme} themeClasses={themeClasses} />
      <Skills theme={theme} themeClasses={themeClasses} />
      <Certifications theme={theme} themeClasses={themeClasses} />
      <Experience theme={theme} themeClasses={themeClasses} />
      <Work theme={theme} themeClasses={themeClasses} />
      <Contact theme={theme} themeClasses={themeClasses} />

    </div>
  );
}