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

      <div className="space-y-10">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={`p-6 rounded-2xl ${themeClasses.card} border ${themeClasses.border}`}
          >
            <h3 className={`text-base font-semibold mb-5 ${themeClasses.textTitle} text-center text-emerald-500 uppercase tracking-wider`}>
              {category.title}
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillItemAnim}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center p-1 ${themeClasses.card} border ${themeClasses.border} shadow-sm`}>
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}