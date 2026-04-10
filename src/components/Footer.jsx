import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 mb-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <Link to="/" className="text-2xl font-black tracking-tighter gradient-text">
              Panchal.
            </Link>
            <p className="max-w-xs text-[var(--text-secondary)] text-sm leading-relaxed">
              Crafting high-end digital experiences with a focus on performance, accessibility, and modern aesthetics.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/vrushitarnw2266" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vrushita-panchal" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:vrushitapanchal2366@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:border-[var(--accent-blue)]/50 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm font-medium text-[var(--text-secondary)]">
              © {new Date().getFullYear()} Vrushita Panchal
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
          <Link to="/" className="hover:text-[var(--accent-blue)] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[var(--accent-blue)] transition-colors">About</Link>
          <Link to="/work" className="hover:text-[var(--accent-blue)] transition-colors">Work</Link>
          <Link to="/contact" className="hover:text-[var(--accent-blue)] transition-colors">Contact</Link>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent-blue)]/5 rounded-full blur-[120px] -z-10" />
    </footer>
  );
};

export default Footer;

