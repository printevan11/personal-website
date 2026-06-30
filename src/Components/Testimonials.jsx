import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Testimonials({ theme, themeClasses }) {
  const testimonials = [
    {
      text: "\"Job well done! I am really impressed with Sagar's speed and technical quality. He built a complex feature set ahead of schedule, with pixel perfect CSS match. Will hire him again for our next sprint.\"",
      author: 'John Doe',
      role: 'Founder - Acme Corp'
    },
    {
      text: '"Great working experience with Sagar. Very strong architecture skills and helpful during the requirement drafting stage. His full-stack capability helped us bridge gaps with backend developers."',
      author: 'John Doe',
      role: 'Product Manager'
    },
    {
      text: "Sagar's code was exceptionally clean and modular. He is a developer who truly cares about building digital products with real care. Highly recommended for any Next.js full-stack systems.",
      author: 'John Doe',
      role: 'Freelancer'
    }
  ];

  return (
    <section id="testimonials" className={`py-24 px-6 ${themeClasses.bgAlt} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
            Testimonials
          </span>
          <p className={`${themeClasses.textMuted} text-base`}>Nice things people have said about me:</p>
        </div>

        {/* Testimonial grid structure matching screenshot */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.card} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6`}
            >
              <p className={`text-sm leading-relaxed italic ${themeClasses.textMuted}`}>{test.text}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${themeClasses.badge} flex items-center justify-center text-xs`}>
                    <User size={14} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${themeClasses.textTitle}`}>{test.author}</h4>
                    <p className={`text-xs ${themeClasses.textMuted}`}>{test.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}