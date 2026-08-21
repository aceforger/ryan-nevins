import { useState, useEffect } from "react";
import { Smile, ArrowRight, Star, Sun, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { author, allBooks } from "../data/siteContent";

export default function HeroSection() {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookIndex((prev) => (prev + 1) % allBooks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentBook = allBooks[currentBookIndex];
  const scrollToBooks = () => {
    const el = document.getElementById("books");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const prevBook = () => {
    setCurrentBookIndex(
      (prev) => (prev - 1 + allBooks.length) % allBooks.length,
    );
  };

  const nextBook = () => {
    setCurrentBookIndex((prev) => (prev + 1) % allBooks.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-sky-light doodle-texture pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-light via-cloud-white to-paper-cream" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-sunny-yellow)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-crayon-blue)_0%,transparent_50%)]" />

      {/* ===== RETRO ELEGANT FRAME ===== */}
      <div className="absolute top-20 md:top-24 bottom-6 left-4 right-4 md:left-6 md:right-6 border-2 border-antique-brown/15 rounded-lg pointer-events-none" />
      <div className="absolute top-24 md:top-28 bottom-10 left-8 right-8 md:left-10 md:right-10 border border-antique-brown/10 rounded-md pointer-events-none" />

      {/* Corner flourishes - top left */}
      <svg
        className="absolute top-16 md:top-20 left-4 md:left-6 w-16 h-16 opacity-30"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#5A4032"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#5A4032" opacity="0.4" />
        <path
          d="M14,20 Q20,14 26,20 Q20,26 14,20 Z"
          fill="#5A4032"
          opacity="0.3"
        />
      </svg>

      {/* Corner flourishes - top right */}
      <svg
        className="absolute top-16 md:top-20 right-4 md:right-6 w-16 h-16 opacity-30 -scale-x-100"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#5A4032"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#5A4032" opacity="0.4" />
        <path
          d="M14,20 Q20,14 26,20 Q20,26 14,20 Z"
          fill="#5A4032"
          opacity="0.3"
        />
      </svg>

      {/* Corner flourishes - bottom left */}
      <svg
        className="absolute bottom-2 left-4 md:left-6 w-16 h-16 opacity-30 -scale-y-100"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#5A4032"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#5A4032" opacity="0.4" />
      </svg>

      {/* Corner flourishes - bottom right */}
      <svg
        className="absolute bottom-2 right-4 md:right-6 w-16 h-16 opacity-30 -scale-x-100 -scale-y-100"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#5A4032"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#5A4032" opacity="0.4" />
      </svg>

      {/* Wavy lines - left */}
      <svg
        className="absolute left-6 top-1/3 w-10 h-24 opacity-15"
        viewBox="0 0 40 100"
      >
        <path
          d="M5,10 Q15,20 5,30 Q15,40 5,50 Q15,60 5,70 Q15,80 5,90"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1.5"
        />
        <path
          d="M12,5 Q22,15 12,25 Q22,35 12,45 Q22,55 12,65 Q22,75 12,85 Q22,95 12,100"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1"
        />
      </svg>

      {/* Wavy lines - right */}
      <svg
        className="absolute right-6 top-1/3 w-10 h-24 opacity-15"
        viewBox="0 0 40 100"
      >
        <path
          d="M35,10 Q25,20 35,30 Q25,40 35,50 Q25,60 35,70 Q25,80 35,90"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1.5"
        />
        <path
          d="M28,5 Q18,15 28,25 Q18,35 28,45 Q18,55 28,65 Q18,75 28,85 Q18,95 28,100"
          fill="none"
          stroke="#5A4032"
          strokeWidth="1"
        />
      </svg>

      {/* Vintage stars */}
      <div className="absolute top-1/4 left-1/4 text-antique-brown/15 text-lg">
        ✦
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-antique-brown/15 text-lg">
        ✦
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-sunny-yellow/20 border-2 border-sunny-yellow/40 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles size={14} className="text-crayon-orange" />
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal font-bold">
                Shine Kids · Poetry · Art
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-4 leading-tight"
            >
              Ryan <span className="text-crayon-blue">Nevins</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-serif text-xl md:text-2xl text-pencil-gray italic mb-6"
            >
              {author.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-charcoal/70 leading-relaxed text-base max-w-md mx-auto lg:mx-0 mb-8"
            >
              Former professional baseball player, Golden Gloves boxer, and
              award-winning poet helping kids follow their dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={scrollToBooks}
                className="inline-flex items-center justify-center gap-2 bg-crayon-blue hover:bg-crayon-green text-cloud-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-xl shadow-crayon-blue/20 hover:scale-105 cursor-pointer"
              >
                <Smile size={16} />
                Explore Books
                <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-1.5">
                <Star
                  size={14}
                  className="text-sunny-yellow fill-sunny-yellow"
                />
                <span className="text-xs text-pencil-gray">
                  Award Winning Poet
                </span>
              </div>
              <div className="w-[1px] h-6 bg-crayon-blue/20" />
              <div className="flex items-center gap-1.5">
                <Heart size={14} className="text-crayon-red fill-crayon-red" />
                <span className="text-xs text-pencil-gray">Youth Advocate</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Rotating Book with Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 bg-sunny-yellow/20 rounded-full blur-[80px]" />

            <div className="relative w-64 md:w-72 lg:w-80 h-96 md:h-[420px] lg:h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBook ? currentBook.id : currentBookIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl border-4 border-sunny-yellow/50"
                >
                  {currentBook && (
                    <img
                      src={currentBook.coverFront}
                      alt={currentBook.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Book title badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBook ? currentBook.id : currentBookIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-15 left-1/2 -translate-x-1/2 bg-cloud-white border-2 border-crayon-blue/40 text-charcoal rounded-full px-6 py-3 shadow-xl whitespace-nowrap"
              >
                <span className="text-xs font-bold">
                  {currentBook ? currentBook.title : "Shine Kids"}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Controls - Prev, Dots, Next */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {/* Prev button */}
              {/* <button
                onClick={prevBook}
                className="w-8 h-8 rounded-full bg-crayon-blue/15 hover:bg-crayon-blue/35 flex items-center justify-center text-charcoal cursor-pointer transition-colors border border-crayon-blue/30"
                aria-label="Previous book"
              >
                <span className="text-sm">←</span>
              </button> */}

              {/* Dots */}
              <div className="flex gap-2">
                {allBooks.map((book, index) => (
                  <button
                    key={book.id}
                    onClick={() => setCurrentBookIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      currentBookIndex === index
                        ? "bg-crayon-blue scale-125"
                        : "bg-crayon-blue/30 hover:bg-crayon-blue/60"
                    }`}
                    aria-label={`Show ${book.title}`}
                  />
                ))}
              </div>

              {/* Next button */}
              {/* <button
                onClick={nextBook}
                className="w-8 h-8 rounded-full bg-crayon-blue/15 hover:bg-crayon-blue/35 flex items-center justify-center text-charcoal cursor-pointer transition-colors border border-crayon-blue/30"
                aria-label="Next book"
              >
                <span className="text-sm">→</span>
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
