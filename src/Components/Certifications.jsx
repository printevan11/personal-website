import { motion } from 'framer-motion';

export default function Certifications({ theme, themeClasses }) {
  const certifications = [
    {
      title: 'Knowles Training Institute Internship',
      issuer: 'Knowles',
      date: '2025',
      image: 'src/assets/cert1.jpg'
    },
    {
      title: 'UI Interface Design - TESDA',
      issuer: 'TESDA',
      date: '2025',
      image: 'src/assets/cert2.jpg'
    },
    {
      title: 'Introduction to Java',
      issuer: 'SoloLearn',
      date: '2024',
      image: 'src/assets/cert3.jpg'
    },
    {
      title: 'Introduction to HTML',
      issuer: 'SoloLearn',
      date: '2024',
      image: 'src/assets/cert4.jpg'
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const certItemAnim = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
          Certifications
        </span>
        <p className={`${themeClasses.textMuted} text-base`}>Professional certifications I've earned:</p>
      </div>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={certItemAnim}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`flex flex-col items-center gap-3 ${themeClasses.card} rounded-xl border ${themeClasses.border} p-4 hover:shadow-lg transition-all duration-300`}
          >
            {/* Certificate Image */}
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-700">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Certificate Name */}
            <div className="text-center space-y-1">
              <h3 className={`text-sm font-bold ${themeClasses.textTitle}`}>
                {cert.title}
              </h3>
              <p className={`text-xs ${themeClasses.textMuted}`}>
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}