import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Database,
  Layers,
  ArrowUpRight,
  Terminal,
  Cpu,
  Globe
} from "lucide-react";

import { stats, personalInfo } from "../data/portfolioData";

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const coreCompetencies = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      text: "Crafting pixel-perfect, responsive interfaces using React, Framer Motion, and Tailwind CSS.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Terminal,
      title: "Backend Development",
      text: "Architecting scalable server-side solutions with Node.js, Express, and robust API design.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Globe,
      title: "Full Stack Systems",
      text: "End-to-end development bridging complex frontends with efficient database architectures.",
      color: "from-amber-500 to-orange-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[var(--accent-blue)] selection:text-[var(--bg-primary)]">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none noise-bg overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--accent-blue)]/10 rounded-full blur-[160px]" 
        />
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-purple)]/5 rounded-full blur-[160px]" 
        />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,var(--border-color)_1px,transparent_0)] bg-[size:40px_40px] opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 pt-40 pb-32"
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-40">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-5 py-2 rounded-full glass text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-blue)] flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-blue)]"></span>
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] lg:max-w-4xl mx-auto">
              Designing <span className="gradient-text">Digital</span> Excellence.
            </h1>
            <div className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] h-8">
              <Typewriter
                options={{
                  strings: ["Full Stack Engineer", "UI Architecture", "Modern Web Experiences"],
                  autoStart: true,
                  loop: true,
                  cursorClassName: "text-[var(--accent-blue)]"
                }}
              />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl mx-auto text-[var(--text-secondary)] text-lg mb-12 leading-relaxed"
          >
            I'm <span className="text-[var(--text-primary)] font-bold">Vrushita Panchal</span>. 
            Focused on building high-performance, scalable web applications with clean architecture and pixel-perfect design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/work"
              className="group px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[var(--accent-blue)]/10"
            >
              Explore Portfolio
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 glass rounded-full font-black text-xs uppercase tracking-widest hover:bg-[var(--hover-bg)] active:scale-95 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-40">
          {[
            { label: "Execution", value: stats.projectsCompleted, detail: "Projects launched" },
            { label: "Experience", value: stats.yearsExperience, detail: "Year in industry" },
            { label: "Commitment", value: stats.openSourceContributions, detail: "Contributions" },
            { label: "Reliability", value: "100%", detail: "Client success" }
          ].map((stat, i) => (
            <div key={i} className="bento-card p-8 group">
              <div className="mb-4 w-10 h-1 h-px bg-[var(--border-color)] group-hover:bg-[var(--accent-blue)] transition-colors duration-500" />
              <p className="text-4xl font-bold mb-1 tracking-tighter">
                {stat.value}
                <span className="text-[var(--accent-blue)]">+</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[var(--text-secondary)] mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-[var(--text-secondary)]/60 italic leading-tight">
                {stat.detail}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Core Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40">
          {coreCompetencies.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bento-card p-10 flex flex-col items-start gap-6 group hover:border-[var(--accent-blue)]/20 shadow-none border-[var(--border-color)]"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                <item.icon size={28} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors">
                Learn how I work <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Let's Talk CTA */}
        <motion.div 
          variants={itemVariants}
          className="bento-card p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Animated Background Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-blue)]/10 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-purple)]/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to build <br/> something <span className="gradient-text">exceptional?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;