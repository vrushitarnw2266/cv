import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, User, MessageSquare, Send, Code, Briefcase, Zap, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully! ✨");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("An error occurred while sending the message. Please check your credentials or network!");
    } finally {
      setIsSending(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden flex flex-col justify-center items-center px-6 py-12 md:py-32 transition-colors duration-300">

      {/* Background Gradients (Consistent with Home/About/Skills) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none transition-opacity duration-500">
        <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start"
      >

        {/* ========== LEFT SIDE (Contact Info & Reasons to Connect) ========== */}
        <motion.div variants={fadeInUp} className="space-y-12">
          <div>
            <span className="px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm tracking-wider uppercase text-[var(--accent-blue)] font-medium backdrop-blur-sm mb-6 inline-block">
              Let's Connect
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
                Get in Touch
              </span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-lg">
              Have an idea, project, or collaboration in mind?
              I’m always open to discussing new opportunities or creative concepts.
              Your message matters.
            </p>
          </div>


          {/* Key Areas Connection */}
          <div className="space-y-8">
            {[
              { icon: Code, color: "text-yellow-400", title: "Project Collaboration", desc: "Discussing innovative ideas or starting a greenfield project." },
              { icon: Briefcase, color: "text-red-400", title: "Career Opportunities", desc: "Inquiries regarding full-time roles or contract positions." },
              { icon: Zap, color: "text-green-400", title: "Technical Networking", desc: "Always open to connecting with fellow developers and learning together." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className={`mt-1 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Contact & Socials */}
          <div className="pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Connect Directly</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:vrushitapanchal@gmail.com" className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors group">
                <div className="p-2 bg-[var(--bg-secondary)] rounded-lg group-hover:bg-[var(--accent-blue)]/10 transition-colors">
                  <Mail size={20} />
                </div>
                vrushitapanchal@gmail.com
              </a>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/vrushitarnw22" },
                  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-blue)] hover:scale-110 transition-all duration-300">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

        {/* ========== RIGHT SIDE (FORM) ========== */}
        <motion.div
          variants={fadeInUp}
          className="bg-[var(--bg-secondary)] backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-[var(--border-color)]"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2 uppercase tracking-tight">Send a Message</h2>
            <p className="text-[var(--text-secondary)] text-sm">I'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  pattern="^[A-Za-z][A-Za-z\s]+$"
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-blue-500/50 focus:bg-[var(--bg-primary)]/40 focus:outline-none transition-all placeholder-[var(--text-secondary)]/30 font-medium"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  pattern="^[A-Za-z][A-Za-z][A-Za-z0-9._%+-]*[0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-blue-500/50 focus:bg-[var(--bg-primary)]/40 focus:outline-none transition-all placeholder-[var(--text-secondary)]/30 font-medium"
                />
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  pattern="^[6-9][0-9]{9}$"
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-blue-500/50 focus:bg-[var(--bg-primary)]/40 focus:outline-none transition-all placeholder-[var(--text-secondary)]/30 font-medium"
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <MessageSquare size={18} className="absolute left-4 top-6 text-[var(--text-secondary)] group-focus-within:text-blue-400 transition-colors" />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="How can I help you?"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] focus:border-blue-500/50 focus:bg-[var(--bg-primary)]/40 focus:outline-none transition-all placeholder-[var(--text-secondary)]/30 resize-none font-medium"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSending
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
                }`}
            >
              {isSending ? (
                <>Sending... <Loader2 className="animate-spin" size={18} /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;