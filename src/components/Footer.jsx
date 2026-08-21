import { Smile, Mail, Rocket } from "lucide-react";
import { author } from "../data/siteContent";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-sky-light border-t-2 border-sunny-yellow/30 py-12 text-center relative overflow-hidden doodle-texture">
      <div className="relative z-10">
        <Smile size={24} className="text-sunny-yellow mx-auto mb-4" />
        <p className="font-serif text-2xl font-bold text-charcoal">
          {author.name}
        </p>
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <button
            onClick={scrollToTop}
            className="text-pencil-gray/50 hover:text-crayon-blue transition-colors text-sm cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("books")}
            className="text-pencil-gray/50 hover:text-crayon-blue transition-colors text-sm cursor-pointer"
          >
            Books
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-pencil-gray/50 hover:text-crayon-blue transition-colors text-sm cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-pencil-gray/50 hover:text-crayon-blue transition-colors text-sm cursor-pointer"
          >
            Contact
          </button>
        </div>
        <a
          href={`mailto:${author.email}`}
          className="text-pencil-gray/50 hover:text-crayon-blue transition-colors text-sm mt-4 inline-block"
        >
          {author.email}
        </a>
        <div className="mt-8 flex justify-center">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sunny-yellow via-crayon-orange to-sunny-yellow text-charcoal text-lg md:text-xl font-bold py-6 px-12 md:px-16 rounded-full shadow-2xl shadow-sunny-yellow/30 transform transition-all duration-300 hover:scale-105 hover:shadow-sunny-yellow/50 animate-pulse border-2 border-crayon-orange/50"
          >
            <Rocket size={20} /> Launch & Go-Live Portal
          </a>
        </div>
        <p className="text-charcoal/30 text-xs mt-8">
          © {new Date().getFullYear()} {author.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
