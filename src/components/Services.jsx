export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-14">
          <p className="text-xs font-medium text-sky-500 tracking-widest uppercase mb-3">What I do</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Services</h2>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Service 1: Web Development */}
          <article className="card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-sky-500/10 transition-colors">
              {/* Icon Monitor/Web */}
              <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/>
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">Full-Stack Web &amp; Mobile Dev</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Building responsive, adaptive, and fast web applications. Seamless integration between database management systems, reliable backend performance, and modern frontend interfaces.
            </p>
          </article>

          {/* Service 2: Robotics & IoT (Dibuat gelap sebagai highlight bawaan template) */}
          <article className="card-h group bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-sky-500 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 rounded-xl mb-6 group-hover:bg-sky-500/20 transition-colors">
              {/* Icon Code/Embed System */}
              <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Robotics &amp; Embedded Systems</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Development of prototypes for simple mechanical and robotic systems based on microcontrollers. Possesses specialized expertise in assembly, control system configuration, and the operation of unmanned aerial vehicles (UAV).
            </p>
          </article>

          {/* Service 3: UI/UX & Prototyping */}
          <article className="card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-sky-500 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-sky-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-sky-500/10 transition-colors">
              {/* Icon Prototyping/Figma Chart */}
              <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
              </svg>
            </div>
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">UI/UX &amp; Prototyping</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Designing intuitive and interactive user flows in Figma before moving on to the production phase. Ensuring that mechanical or digital design transitions prioritize ease of use.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}