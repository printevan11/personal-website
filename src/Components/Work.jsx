import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Work({ theme, themeClasses }) {
  const projects = [
    {
      id: 1,
      title: 'Modimal - Women Clothing',
      desc: 'A platform for speed dating or micro-investing. With an intuitive interface, deep integrations, and advanced analytics, it is the only tool you need to stay on top of your portfolio.',
      img: '/assets/modimal.png',
      tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vite'  ],
      link: 'https://modimalclothing.vercel.app/'
    },
    {
      id: 2,
      title: 'Pet-Grooming Website',
      desc: 'A sleek visual workspace for distributed software teams to plan, collaborate, and execute roadmap milestones seamlessly.',
      img: '/assets/pet.png',
      tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vite'],
      link: 'https://petgroomingwebsite.vercel.app/'
    },
    {
      id: 3,
      title: 'Tabernacle - Worship Tool',
      desc: 'An automated compliance auditing software that helps modern early-stage startups get SOC-2 certified in weeks instead of months.',
      img: '/assets/tabernacle.png',
      tags: ['React', 'Typescript', 'Tailwindcss', 'Nest.js', 'PostgreSQL', 'Docker'],
      link: 'https://printevan11.github.io/tabernacleworshiptoolv4/'
    },

    {
      id: 4,
      title: 'NailCheck: An Android-Based Mobile Application for Detecting Fingernail Abnormalities Through Digital Image Processing Using Convolutional Neural Network Algorithm',
      desc: 'An automated compliance auditing software that helps modern early-stage startups get SOC-2 certified in weeks instead of months.',
      img: '/assets/nail.jpg',
      tags: ['React', 'Typescript', 'Tailwindcss', 'Nest.js', 'PostgreSQL', 'Docker'],
      link: 'https://drive.google.com/file/d/1gfOZRB9-rfD-cX_ydSWPZ6m1KNoJSHhX/view'
    },

    
    {
      id: 5 ,
      title: 'Accident / Incident Report - MDRRMO Sariaya',
      desc: 'An automated compliance auditing software that helps modern early-stage startups get SOC-2 certified in weeks instead of months.',
      img: '/assets/mddrmo.png',
      tags: ['React', 'HTML', 'CSS', 'Java Script', 'Tailwindcss', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://incident-report-system.vercel.app/'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
          Work
        </span>
        <p className={`${themeClasses.textMuted} text-base`}>Some of the noteworthy projects I have built:</p>
      </div>

      {/* Project Alternating Listing Grid */}
      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-12 rounded-3xl overflow-hidden border ${themeClasses.border} ${themeClasses.card} shadow-sm hover:shadow-lg transition-all duration-300`}
          >
            {/* Product preview / mock visualization */}
            <div className={`lg:col-span-6 p-8 bg-gray-500/5 flex items-center justify-center ${
              idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
            }`}>
              <div className={`w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl border ${themeClasses.border}`}>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Specification layout panel */}
            <div className={`lg:col-span-6 p-10 flex flex-col justify-center space-y-6 ${
              idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
            }`}>
              <h3 className={`text-2xl font-bold ${themeClasses.textTitle}`}>{project.title}</h3>
              <p className={`text-sm leading-relaxed ${themeClasses.textMuted}`}>{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold ${themeClasses.badge}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 hover:text-emerald-500 font-semibold text-sm ${themeClasses.textTitle}`}>
                  <ExternalLink size={18} /> Visit Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}