import { Smile, Mail, Rocket } from "lucide-react";
import { author } from "../data/siteContent";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-off-white border-t-2 border-royal-purple/20 py-12 text-center relative overflow-hidden doodle-texture">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-royal-purple/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-light-purple/8 rounded-full blur-[100px]" />

      <div className="relative z-10">
        <Smile size={24} className="text-royal-purple mx-auto mb-4" />
        <p className="font-serif text-2xl font-bold text-dark">{author.name}</p>
        <p className="text-xs text-dark/50 italic mt-1">{author.title}</p>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <button
            onClick={scrollToTop}
            className="text-dark/50 hover:text-royal-purple transition-colors text-sm cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("books")}
            className="text-dark/50 hover:text-royal-purple transition-colors text-sm cursor-pointer"
          >
            Books
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-dark/50 hover:text-royal-purple transition-colors text-sm cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-dark/50 hover:text-royal-purple transition-colors text-sm cursor-pointer"
          >
            Contact
          </button>
        </div>

        <a
          href={`mailto:${author.email}`}
          className="text-dark/50 hover:text-royal-purple transition-colors text-sm mt-4 inline-block"
        >
          {author.email}
        </a>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="w-16 h-[1px] bg-royal-purple/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-royal-purple/40" />
          <div className="w-16 h-[1px] bg-royal-purple/20" />
        </div>

        {/* Stripe Payment Link */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-royal-purple via-light-purple to-royal-purple text-white text-lg md:text-xl font-bold py-6 px-12 md:px-16 rounded-full shadow-2xl shadow-royal-purple/30 transform transition-all duration-300 hover:scale-105 hover:shadow-royal-purple/50 animate-pulse border-2 border-light-purple/50"
          >
            <Rocket size={20} /> Launch & Go-Live Portal
          </a>
        </div>

        <p className="text-dark/30 text-xs mt-8">
          © {new Date().getFullYear()} {author.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
