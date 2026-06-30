import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check } from 'lucide-react';

export default function Contact({ theme, themeClasses }) {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <>
      {/* Toast Notification for Copy feedback */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl font-medium"
          >
            <Check size={18} />
            <span>Copied {copiedText === 'email' ? 'Email Address!' : 'Phone Number!'}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
            Get in touch
          </span>
          <p className={`max-w-md mx-auto text-sm leading-relaxed ${themeClasses.textMuted}`}>
            What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
          </p>
        </div>

        {/* Big Interactive Contact Blocks */}
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3 text-xl md:text-3xl font-bold tracking-tight text-current">
              <Mail size={24} className="text-emerald-500" />
              <span>evanroitabar11@gmail.com</span>
              <button
                onClick={() => handleCopy('reachsagarshah@gmail.com', 'email')}
                className={`p-2 rounded-lg hover:bg-gray-500/10 transition-colors ${themeClasses.textTitle}`}
                title="Copy Email Address"
              >
                <Copy size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3 text-xl md:text-3xl font-bold tracking-tight text-current">
              <Phone size={24} className="text-emerald-500" />
              <span>+63 918 325 0603</span>
              <button
                onClick={() => handleCopy('+918980500565', 'phone')}
                className={`p-2 rounded-lg hover:bg-gray-500/10 transition-colors ${themeClasses.textTitle}`}
                title="Copy Phone Number"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer info & persistent social icons */}
        <div className="space-y-4 pt-8 border-t border-gray-500/10">
          <p className={`text-xs tracking-wider uppercase ${themeClasses.textMuted}`}>
            You may also find me on these platforms:
          </p>
          <div className="flex justify-center gap-6">
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
        </div>
      </section>
    </>
  );
}