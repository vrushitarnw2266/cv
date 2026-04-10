import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, stats } from "../data/portfolioData";

const Loader = () => {
    const [percent, setPercent] = useState(0);
    const [stage, setStage] = useState(0);

    const stages = [
        "Initializing Core",
        "Loading Assets",
        "Assembling UI",
        "Finalizing Experience"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 8) + 2;
                return Math.min(prev + increment, 100);
            });
        }, 120);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const currentStage = Math.floor((percent / 100) * stages.length);
        if (currentStage !== stage && currentStage < stages.length) {
            setStage(currentStage);
        }
    }, [percent, stage]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } 
            }}
            className="fixed inset-0 z-[9999] bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden selection:bg-none"
        >
            {/* Background elements to match site theme */}
            <div className="absolute inset-0 noise-bg opacity-40 pointer-events-none" />
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-blue)]/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-purple)]/5 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 w-full max-w-2xl px-12">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    
                    {/* The Monolith - A geometric animated block */}
                    <div className="relative">
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                            className="w-32 h-44 bg-[var(--bg-secondary)] border border-[var(--border-color)] relative rounded-sm overflow-hidden group shadow-2xl"
                        >
                            {/* Inner animated filling */}
                            <motion.div
                                initial={{ height: "0%" }}
                                animate={{ height: `${percent}%` }}
                                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[var(--accent-blue)]/20 via-[var(--accent-purple)]/10 to-transparent"
                            />
                            
                            {/* Scanning line */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[1px] bg-[var(--accent-blue)]/30 z-10 shadow-[0_0_15px_var(--accent-blue)]"
                            />

                            <div className="absolute inset-0 flex items-center justify-center text-[var(--accent-blue)]/20 text-xs font-black">
                                VP-OS
                            </div>
                        </motion.div>

                        {/* Monolith Glow */}
                        <div className="absolute inset-0 -z-10 blur-3xl bg-[var(--accent-blue)]/10" />
                    </div>

                    {/* Metadata & Progress */}
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <div className="space-y-2">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-blue)]"
                            >
                                Establishing Context
                            </motion.p>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-[var(--text-primary)]">
                                {personalInfo.name.split(' ')[0]} <span className="text-[var(--text-secondary)]">.</span>
                            </h1>
                        </div>

                        <div className="space-y-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stage}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-4 justify-center md:justify-start"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                                    <span className="text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)]">
                                        {stages[stage]}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress bar and numeric percentage */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">System Load</span>
                                    <span className="text-2xl font-black italic text-[var(--text-primary)] leading-none italic">{percent}%</span>
                                </div>
                                <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full bg-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)]"
                                        style={{ width: `${percent}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Technical mini stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4 opacity-40">
                            <div className="space-y-1">
                                <p className="text-[8px] font-black uppercase tracking-widest">Protocol</p>
                                <p className="text-xs font-bold text-[var(--text-primary)]">VP_CORE_v2.0</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[8px] font-black uppercase tracking-widest">Environment</p>
                                <p className="text-xs font-bold text-[var(--text-primary)]">Production_Ready</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-white/10 hidden md:block" />
            <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-white/10 hidden md:block" />
        </motion.div>
    );
};

export default Loader;