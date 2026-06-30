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

  const skills = [
    { name: 'HTML', img: 'src/assets/html.png' },
    { name: 'CSS', img: 'src/assets/css.jpg' },
    { name: 'JavaScript', img: 'src/assets/javascript.jpg' },
    { name: 'jQuery', img: 'src/assets/jquery.png' },
    { name: 'React', img: 'src/assets/react-1.png' },
    { name: 'Vue', img: 'src/assets/vue.png' },
    { name: 'Bootstrap', img: 'src/assets/boot.webp' },
    { name: 'Node.js', img: 'src/assets/node.png' },
    { name: 'Express', img: 'src/assets/express.png' },
    { name: 'PostgreSQL', img: 'src/assets/postres.jpg' },
    { name: 'MongoDB', img: 'src/assets/mongo.png' },
    { name: 'Tailwind CSS', img: 'src/assets/tailwind.png' },
    { name: 'Vite', img: 'src/assets/vite-2.png' },
    { name: 'Figma', img: 'src/assets/figma.png' },
    { name: 'Zeplin', img: 'src/assets/zeplin.png' },
    { name: 'Git', img: 'src/assets/Git.png' }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
          Skills
        </span>
        <p className={`${themeClasses.textMuted} text-base`}>The skills, technologies and tools I am good at:</p>
      </div>

      {/* Complex Grid of Skills containing crisp visual vector SVGs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center"
      >
        {skills.map((skill) => (
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
      </motion.div>
    </section>
  );
}