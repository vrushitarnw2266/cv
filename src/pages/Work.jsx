import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, Code, ChevronRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";

const Work = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[var(--accent-blue)] selection:text-[var(--bg-primary)]">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none noise-bg overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--accent-blue)]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[var(--accent-purple)]/5 rounded-full blur-[160px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-32"
      >
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[var(--accent-blue)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-blue)]">
              The Archive
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">
            Selected <br/> <span className="gradient-text">Productions.</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            A curated collection of digital products where I've led the engineering from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-32 mb-40">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-12 lg:items-center group"
            >
              {/* Image Showcase */}
              <div className="lg:w-3/5 aspect-video bento-card border-none overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--text-primary)]">
                       {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/5 space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-blue)]">
                    Project {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg glass ${
                    project.status === 'Completed' ? 'text-emerald-500' : 'text-amber-500'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter group-hover:gradient-text transition-all duration-500">
                    {project.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                   <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">Core Features</p>
                   <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {project.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)]">
                          <div className="w-1 h-1 rounded-full bg-[var(--accent-blue)]" />
                          {f}
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[var(--accent-blue)] hover:text-white transition-all duration-300"
                  >
                    Launch <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
           variants={itemVariants}
           className="bento-card p-12 md:p-20 text-center relative overflow-hidden group hover:border-[var(--accent-blue)]/20"
        >
           <Code className="mx-auto mb-8 text-[var(--accent-blue)] scale-150" />
           <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Want to see the <br/> full <span className="gradient-text">codebase?</span>
           </h2>
           <p className="max-w-xl mx-auto text-[var(--text-secondary)] mb-12">
              All my public projects, experiments, and contributions are open for inspection on GitHub. Let's push some commits.
           </p>
           <a
             href="https://github.com/vrushitarnw2266"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black text-sm uppercase tracking-widest hover:scale-110 transition-transform"
           >
             Go to GitHub
           </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;

