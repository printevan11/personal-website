import { motion } from 'framer-motion';

export default function About({ theme, themeClasses }) {
  return (
    <section id="about" className={`py-24 px-6 ${themeClasses.bgAlt} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${themeClasses.badge}`}>
            About me
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Column with Offset Border */}
          <div className="lg:col-span-5 flex justify-center pb-8 lg:pb-0">
            <div className="relative w-72 h-96">
              <div className={`absolute bottom-[-16px] left-[-16px] w-full h-full border-8 ${themeClasses.profileOffset} -z-20`} />
              <img
                src="/assets/profile-1.jpg"
                alt="About Sagar"
                className={`w-full h-full object-cover border-8 ${themeClasses.imgBorder} shadow-2xl relative z-10`}
              />
            </div>
          </div>

          {/* Right Story details */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className={`text-3xl font-bold tracking-tight ${themeClasses.textTitle}`}>
              Curious about me? Here you have it:
            </h2>
            <div className={`space-y-4 text-sm leading-relaxed ${themeClasses.textMuted}`}>
              <p>
                I'm a UI/UX Engineer and Web Developer with over a year of professional experience building modern, user-centered web applications. I graduated with a Bachelor of Science in Information Technology from CSTC Sariaya, Quezon, and had the opportunity to complete my internship in Singapore as part of an IT Monitoring Team.
              </p>
              <p>
                I enjoy turning ideas into intuitive digital experiences by combining clean design with efficient development. I'm passionate about continuous learning, creating meaningful user experiences, and building high-quality web applications from concept to deployment.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on products end-to-end, from ideation all the way to development.
              </p>
              <p>
                Finally, some quick facts about me:
              </p>
            </div>

            {/* Grid of bullet specifications */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-semibold text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> B.S. in Information Technology
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> Full time Web Developer
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> UI UX Engineer
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span> IT Support
              </div>
            </div>

            <p className={`text-sm ${themeClasses.textMuted}`}>
              One last thing, I'm available for Work, so feel free to reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}