import { motion } from 'framer-motion';

export default function Experience({ theme, themeClasses }) {
  const experiences = [
    {
      role: 'UI UX Engineer & Web Developer',
      company: 'Nerve Technologies',
      period: 'Aug 2025 - Present',
      tasks: [
        'Designed and developed responsive web applications and user interfaces for multiple client projects, improving usability and user engagement',
        'Collaborated with cross-functional teams to deliver web solutions aligned with business goals, accessibility standards, and branding requirements.',
        'Conducted usability testing and implemented design and frontend improvements that enhanced website performance and user experience'
      ]
    },
    {
      role: 'IT Monitoring Team Intern',
      company: 'Knowles Training Institute Singapore',
      period: 'March 2025 - July 2025',
      tasks: [
        'Provided administrative support as part of the Support Team, overseeing live virtual training sessions, validating attendance, monitoring participant engagement, and ensuring smooth delivery by documenting technical issues and submitting timely reports',
        'Coordinated closely with the training department to align and streamline session schedules, contributing to improved operational flow and training efficiency. Assisted in large-scale domain transfers across multiple national-level accounts, including domain configuration and DNS setup to ensure successful transitions.',
      ]
    },
    {
      role: 'Creative Production Assistant',
      company: 'Deal Flow Media',
      period: 'April 2026 - May 2026',
      tasks: [
        'Supports the Social Media Manager in the day-to-day production of digital content. Responsibilities include video editing, image editing, and assisting in the development and execution of social media content across all platforms. Works closely with the Social Media Manager to ensure all creative output is on-brand, on time, and ready to publish.',
      ]
    }
  ];

  return (
    <section id="experience" className={`py-24 px-6 ${themeClasses.bgAlt} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
            Experience
          </span>
          <p className={`${themeClasses.textMuted} text-base`}>Here is a quick summary of my most recent experiences:</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${themeClasses.border} ${themeClasses.card} shadow-sm flex flex-col md:flex-row justify-between gap-6 hover:shadow-md transition-all duration-300`}
            >
              {/* Brand Logo column */}
              <div className="w-28 shrink-0 flex flex-col items-center gap-2">
                {exp.company === 'Nerve Technologies' && (
                  <img src="/assets/nerve-logo.png" alt="Nerve" className="w-20 h-auto object-contain" />
                )}
                {exp.company === 'Knowles Training Institute Singapore' && (
                  <img src="/assets/knowles.png" alt="Knowles" className="w-20 h-auto object-contain" />
                )}
                {exp.company === 'Deal Flow Media' && (
                  <span className="text-emerald-500 font-extrabold text-xl">DFM</span>
                )}
                <span className={`text-xs font-medium ${themeClasses.textMuted}`}>{exp.company}</span>
              </div>

              {/* Role Description list */}
              <div className="flex-1 space-y-4">
                <h3 className={`text-xl font-bold ${themeClasses.textTitle}`}>{exp.role}</h3>
                <ul className={`list-disc list-outside pl-4 space-y-2 text-sm leading-relaxed ${themeClasses.textMuted}`}>
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>

              {/* Period/Duration Column */}
              <div className={`text-sm font-medium whitespace-nowrap shrink-0 ${themeClasses.textMuted}`}>
                {exp.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}