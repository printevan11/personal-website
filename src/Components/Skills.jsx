import { motion } from 'framer-motion';

export default function Skills({ theme, themeClasses }) {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const skillItemAnim = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const categories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML', img: '/assets/html.png' },
        { name: 'CSS', img: '/assets/css.jpg' },
        { name: 'JavaScript', img: '/assets/javascript.jpg' },
        { name: 'jQuery', img: '/assets/jquery.png' },
        { name: 'React', img: '/assets/react-1.png' },
        { name: 'Vue', img: '/assets/vue.png' },
        { name: 'Bootstrap', img: '/assets/boot.webp' },
        { name: 'Tailwind CSS', img: '/assets/tailwind.png' }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', img: '/assets/node.png' },
        { name: 'Express', img: '/assets/express.png' },
        { name: 'PostgreSQL', img: '/assets/postres.jpg' },
        { name: 'MongoDB', img: '/assets/mongo.png' }
      ]
    },
    {
      title: 'Build Tools',
      skills: [
        { name: 'Vite', img: '/assets/vite-2.png' },
        { name: 'Git', img: '/assets/git.png' }
      ]
    },
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', img: '/assets/figma.png' },
        { name: 'Zeplin', img: '/assets/zeplin.png' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
          Skills
        </span>
        <p className={`${themeClasses.textMuted} text-base`}>The skills, technologies and tools I am good at:</p>
      </div>

      <div className="space-y-12">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className={`text-lg font-bold mb-6 ${themeClasses.textTitle} border-l-4 border-emerald-500 pl-3`}>
              {category.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillItemAnim}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center p-2 shadow-md border ${themeClasses.border} bg-transparent transition-colors duration-300`}>
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}