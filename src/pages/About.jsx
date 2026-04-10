import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Briefcase,
  UserCheck,
  Lightbulb,
  Rocket,
  BookOpen,
} from "lucide-react";

import { experience, education } from "../data/portfolioData";

const About = () => {

  const features = [
    {
      icon: Lightbulb,
      title: "Problem Solving",
      desc: "Enjoy solving logical challenges and building efficient solutions for real-world applications.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Focused on writing readable, maintainable, and scalable code using modern development practices.",
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      desc: "Always learning new technologies and tools to improve development skills and stay updated.",
    },
    {
      icon: UserCheck,
      title: "Team Collaboration",
      desc: "Comfortable working in team environments and contributing effectively to shared goals.",
    },
    {
      icon: Cpu,
      title: "Frontend Development",
      desc: "Strong understanding of React, JavaScript, HTML, and CSS for building responsive web interfaces.",
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      desc: "Committed to improving skills and gaining experience through practical development work.",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };


  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden flex flex-col items-center py-24 px-6 md:px-12 transition-colors duration-300">

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl w-full text-center"
      >

        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm tracking-wider uppercase text-[var(--accent-blue)] font-medium backdrop-blur-sm">
            About Me
          </span>
        </motion.div>


        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-10"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[var(--text-primary)] to-[var(--text-secondary)]">
            About
          </span>
        </motion.h1>


        {/* Summary */}
        <motion.div variants={itemVariants} className="relative mb-20 group">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50"></div>

          <div className="relative bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] p-8 md:p-12 rounded-2xl max-w-4xl mx-auto shadow-2xl">

            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed text-left md:text-center">

              I'm <span className="text-[var(--text-primary)] font-semibold">Vrushita Panchal</span>, a
              Frontend Developer passionate about building responsive and
              user-friendly web applications.

              I mainly work with
              <span className="text-[var(--accent-blue)]"> React, JavaScript, HTML, and CSS </span>

              I'm continuously learning new technologies and expanding my skills
              toward full-stack development while focusing on writing
              maintainable and efficient code.

            </p>

          </div>

        </motion.div>



        {/* Features */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-24"
        >

          {features.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[var(--bg-secondary)] backdrop-blur-md p-6 rounded-xl border border-[var(--border-color)] hover:bg-[var(--bg-secondary)]/80 transition-all duration-300 group shadow-lg"
            >

              <div className="p-3 bg-[var(--accent-blue)]/10 rounded-lg text-[var(--accent-blue)] mb-4 w-fit">
                <item.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {item.title}
              </h3>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </motion.div>



        {/* Experience */}
        <motion.div variants={itemVariants} className="w-full mb-24">

          <div className="mb-12 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-[var(--accent-blue)]" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                Experience
              </h2>
            </div>

            <p className="text-[var(--text-secondary)]">
              Experience gained through internships and practical development work.
            </p>
          </div>


          <div className="space-y-8">

            {experience.map((exp) => (

              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 backdrop-blur-md hover:bg-[var(--bg-secondary)]/80 transition-all duration-300"
              >

                <div className="flex flex-col md:flex-row md:justify-between mb-6">

                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>

                    <p className="text-[var(--accent-blue)] font-semibold">
                      {exp.company}
                    </p>

                    <p className="text-[var(--text-secondary)] text-sm">
                      {exp.duration}
                    </p>
                  </div>


                  <span className="mt-4 md:mt-0 px-4 py-2 bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-full text-[var(--accent-blue)] text-sm">
                    {exp.location}
                  </span>

                </div>


                <p className="text-[var(--text-secondary)] mb-4">
                  {exp.description}
                </p>


                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-[var(--text-secondary)] text-sm">
                      <span className="text-[var(--accent-blue)]">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>


                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] border border-[var(--accent-blue)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>



        {/* Education */}
        <motion.div variants={itemVariants} className="w-full">

          <div className="mb-12 text-left">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-[var(--accent-purple)]" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                Education
              </h2>
            </div>
          </div>


          <div className="space-y-6">

            {education.map((edu, idx) => (

              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 backdrop-blur-md hover:bg-[var(--bg-secondary)]/80 transition-all"
              >

                <div className="flex flex-col md:flex-row md:justify-between mb-4">

                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>

                    <p className="text-[var(--accent-purple)] font-semibold">
                      {edu.field}
                    </p>

                    <p className="text-[var(--text-secondary)] text-sm">
                      {edu.institution}
                    </p>
                  </div>


                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-[var(--text-secondary)] text-sm">
                      {edu.year}
                    </p>

                    <p className="text-[var(--accent-blue)] font-semibold">
                      CGPA: {edu.cgpa}
                    </p>
                  </div>

                </div>


                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">

                  {edu.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/20"
                    >
                      {h}
                    </span>
                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </motion.div>

    </div>
  );
};

export default About;