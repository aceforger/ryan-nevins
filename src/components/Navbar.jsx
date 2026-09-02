import { useState, useEffect } from "react";
import { Menu, X, Smile, Mail, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { author, navLinks } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-purple-900/10 border-b border-royal-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="h-[4px] w-full bg-gradient-to-r from-royal-purple via-light-purple to-royal-purple" />

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative w-11 h-11 rounded-full border-2 border-royal-purple flex items-center justify-center bg-soft-lavender group-hover:border-deep-purple transition-colors">
            <Smile
              size={20}
              className="text-royal-purple group-hover:text-deep-purple transition-colors"
            />
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-bold text-dark leading-none">
              Ryan <span className="text-royal-purple">Nevins</span>
            </span>
            <p className="text-[8px] md:text-[9px] text-royal-purple/70 uppercase tracking-[0.25em] mt-0.5 font-bold">
              Poet & Artist
            </p>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1 bg-white/70 border border-royal-purple/20 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="px-4 py-2 font-serif text-sm font-bold text-dark/70 hover:text-white hover:bg-royal-purple rounded-full transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href={`mailto:${author.email}`}
          className="hidden md:flex items-center gap-2 bg-royal-purple hover:bg-deep-purple text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:shadow-lg hover:shadow-royal-purple/30"
        >
          <Mail size={14} />
          Contact
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-dark p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="bg-white border-2 border-royal-purple/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link, index) => (
                  <button
                    key={link.sectionId}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="flex items-center gap-3 font-serif text-base font-bold text-dark hover:text-royal-purple py-3 px-4 rounded-xl hover:bg-soft-lavender transition-colors w-full text-left cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-full bg-royal-purple/15 flex items-center justify-center text-[10px] text-royal-purple font-bold">
                      {index + 1}
                    </span>
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="border-t border-royal-purple/20 px-4 py-4">
                <a
                  href={`mailto:${author.email}`}
                  className="flex items-center justify-center gap-2 font-serif text-base font-bold text-white py-3 px-4 rounded-xl bg-royal-purple"
                >
                  <Mail size={16} />
                  Contact Ryan
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
