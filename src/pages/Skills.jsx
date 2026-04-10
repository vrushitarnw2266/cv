import { motion } from "framer-motion";
import {
    Code,
    FileText,
    Zap,
    Database,
    Package,
    Server,
    Layout,
    Palette,
    Lightbulb,
    Cpu,
    Terminal,
    GitBranch,
    Github,
    Globe,
    Layers,
    Monitor,
    Shield,
    Workflow
} from "lucide-react";

const Skills = () => {
    const techIcons = {
        "HTML/CSS": { icon: FileText, color: "from-orange-500 to-red-500", glow: "rgba(249, 115, 22, 0.2)" },
        JavaScript: { icon: Code, color: "from-yellow-400 to-amber-500", glow: "rgba(251, 191, 36, 0.2)" },
        React: { icon: Layout, color: "from-blue-400 to-cyan-500", glow: "rgba(34, 211, 238, 0.2)" },
        "Tailwind CSS": { icon: Palette, color: "from-cyan-400 to-blue-600", glow: "rgba(6, 182, 212, 0.2)" },
        Bootstrap: { icon: Layers, color: "from-purple-500 to-indigo-600", glow: "rgba(168, 85, 247, 0.2)" },
        "Framer Motion": { icon: Zap, color: "from-pink-500 to-rose-500", glow: "rgba(236, 72, 153, 0.2)" },
        "Node.js": { icon: Server, color: "from-green-500 to-emerald-600", glow: "rgba(34, 197, 94, 0.2)" },
        "Express.js": { icon: Cpu, color: "from-slate-400 to-slate-600", glow: "rgba(100, 116, 139, 0.2)" },
        "REST APIs": { icon: Globe, color: "from-indigo-400 to-blue-500", glow: "rgba(129, 140, 248, 0.2)" },
        MongoDB: { icon: Database, color: "from-emerald-500 to-green-700", glow: "rgba(16, 185, 129, 0.2)" },
        "Git & GitHub": { icon: GitBranch, color: "from-orange-600 to-red-700", glow: "rgba(234, 88, 12, 0.2)" },
        "VS Code": { icon: Monitor, color: "from-blue-600 to-indigo-700", glow: "rgba(37, 99, 235, 0.2)" },
        NPM: { icon: Package, color: "from-red-600 to-rose-700", glow: "rgba(225, 29, 72, 0.2)" },
        Postman: { icon: Lightbulb, color: "from-amber-400 to-orange-500", glow: "rgba(251, 191, 36, 0.2)" },
    };

    const categories = [
        {
            title: "Frontend Architecture",
            subtitle: "User Interface & Experience",
            icon: Layout,
            skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Framer Motion"],
            color: "text-[var(--accent-blue)]",
            bg: "bg-[var(--accent-blue)]/10"
        },
        {
            title: "Backend Core",
            subtitle: "Systems & Server Logic",
            icon: Server,
            skills: ["Node.js", "Express.js", "REST APIs"],
            color: "text-emerald-400",
            bg: "bg-emerald-400/10"
        },
        {
            title: "Data Sovereignty",
            subtitle: "Scalable Storage Solutions",
            icon: Database,
            skills: ["MongoDB"],
            color: "text-indigo-400",
            bg: "bg-indigo-400/10"
        },
        {
            title: "Development Flow",
            subtitle: "Tooling & Optimization",
            icon: Workflow,
            skills: ["Git & GitHub", "VS Code", "NPM", "Postman"],
            color: "text-rose-400",
            bg: "bg-rose-400/10"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
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
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[var(--accent-blue)]/5 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--accent-purple)]/5 rounded-full blur-[160px]" />
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
                            The Toolkit
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">
                        Advanced <br/> <span className="gradient-text">Competencies.</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        A deliberate selection of modern technologies and tools that I leverage to build scalable, high-performance digital products.
                    </p>
                </div>

                {/* Bento Categories */}
                <div className="space-y-24">
                    {categories.map((cat, i) => (
                        <div key={i} className="space-y-12">
                            <motion.div variants={itemVariants} className="flex items-end justify-between border-b border-[var(--border-color)] pb-8 px-4">
                                <div className="space-y-4">
                                    <div className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center`}>
                                        <cat.icon size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black tracking-tight">{cat.title}</h2>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)]">
                                            {cat.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {cat.skills.map((skill) => {
                                    const info = techIcons[skill];
                                    const Icon = info?.icon || Code;
                                    return (
                                        <motion.div
                                            key={skill}
                                            variants={itemVariants}
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            className="bento-card group p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-[var(--accent-blue)]/20 shadow-none border-[var(--border-color)]"
                                        >
                                            {/* Hover Glow */}
                                            <div 
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                                style={{ background: `radial-gradient(circle at center, ${info?.glow}, transparent 70%)` }}
                                            />

                                            <div className={`w-14 h-14 rounded-2xl glass flex items-center justify-center bg-gradient-to-br ${info?.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                                <Icon size={28} />
                                            </div>
                                            
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Performance Guarantees */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-40 pt-20 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {[
                        { title: "Scalable Core", desc: "Building systems that grow with your user base without compromise.", icon: Shield },
                        { icon: Zap, title: "Optimized Load", desc: "Prioritizing performance and critical path rendering for speed." },
                        { icon: Monitor, title: "Platform Agnostic", desc: "Ensuring parity and excellence across all devices and browsers." }
                    ].map((f, i) => (
                        <div key={i} className="space-y-4 px-4 overflow-hidden group">
                            <f.icon className="text-[var(--accent-blue)] mb-4" size={32} />
                            <h3 className="text-xl font-black tracking-tight group-hover:gradient-text transition-all">{f.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Skills;

