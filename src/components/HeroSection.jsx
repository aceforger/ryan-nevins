import { useState, useEffect } from "react";
import { Smile, ArrowRight, Star, Heart, Sparkles } from "lucide-react";
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
      className="relative min-h-screen flex items-center overflow-hidden bg-off-white doodle-texture pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-off-white to-soft-lavender" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-royal-purple)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--color-light-purple)_0%,transparent_50%)]" />

      {/* Vintage frame */}
      <div className="absolute top-20 md:top-24 bottom-6 left-4 right-4 md:left-6 md:right-6 border-2 border-royal-purple/15 rounded-lg pointer-events-none" />
      <div className="absolute top-24 md:top-28 bottom-10 left-8 right-8 md:left-10 md:right-10 border border-royal-purple/10 rounded-md pointer-events-none" />

      {/* Corner flourishes */}
      <svg
        className="absolute top-16 md:top-20 left-4 md:left-6 w-16 h-16 opacity-25"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#6B3FA0" opacity="0.4" />
      </svg>
      <svg
        className="absolute top-16 md:top-20 right-4 md:right-6 w-16 h-16 opacity-25 -scale-x-100"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#6B3FA0" opacity="0.4" />
      </svg>
      <svg
        className="absolute bottom-2 left-4 md:left-6 w-16 h-16 opacity-25 -scale-y-100"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#6B3FA0" opacity="0.4" />
      </svg>
      <svg
        className="absolute bottom-2 right-4 md:right-6 w-16 h-16 opacity-25 -scale-x-100 -scale-y-100"
        viewBox="0 0 64 64"
      >
        <path
          d="M2,62 L2,8 Q2,2 8,2 L62,2"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="2.5"
        />
        <path
          d="M8,56 L8,14 Q8,8 14,8 L56,8"
          fill="none"
          stroke="#6B3FA0"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="8" r="3" fill="#6B3FA0" opacity="0.4" />
      </svg>

      {/* Vintage stars */}
      <div className="absolute top-1/4 left-1/4 text-royal-purple/15 text-lg">
        ✦
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-royal-purple/15 text-lg">
        ✦
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-royal-purple/10 border-2 border-royal-purple/30 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles size={14} className="text-royal-purple" />
              <span className="text-xs tracking-[0.3em] uppercase text-dark font-bold">
                Shine Kids · Poetry · Art
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-4 leading-tight"
            >
              Ryan <span className="text-royal-purple">Nevins</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-serif text-xl md:text-2xl text-dark/70 italic mb-6"
            >
              {author.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-dark/70 leading-relaxed text-base max-w-md mx-auto lg:mx-0 mb-8"
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
                className="inline-flex items-center justify-center gap-2 bg-royal-purple hover:bg-deep-purple text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-xl shadow-royal-purple/20 hover:scale-105 cursor-pointer"
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
                  className="text-royal-purple fill-royal-purple"
                />
                <span className="text-xs text-dark/60">Award Winning Poet</span>
              </div>
              <div className="w-[1px] h-6 bg-royal-purple/20" />
              <div className="flex items-center gap-1.5">
                <Heart
                  size={14}
                  className="text-deep-purple fill-deep-purple"
                />
                <span className="text-xs text-dark/60">Youth Advocate</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Rotating Book */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 bg-royal-purple/15 rounded-full blur-[80px]" />

            <div className="relative w-64 md:w-72 lg:w-80 h-96 md:h-[420px] lg:h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBook ? currentBook.id : currentBookIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl border-4 border-royal-purple/40"
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

            {/* Title badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBook ? currentBook.id : currentBookIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white border-2 border-royal-purple/40 text-dark rounded-full px-6 py-3 shadow-xl whitespace-nowrap"
              >
                <span className="text-xs font-bold">
                  {currentBook ? currentBook.title : "Shine Kids"}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <button
                onClick={prevBook}
                className="w-8 h-8 rounded-full bg-royal-purple/15 hover:bg-royal-purple/35 flex items-center justify-center text-dark cursor-pointer border border-royal-purple/30"
                aria-label="Previous book"
              >
                ←
              </button>
              <div className="flex gap-2">
                {allBooks.map((book, index) => (
                  <button
                    key={book.id}
                    onClick={() => setCurrentBookIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentBookIndex === index ? "bg-royal-purple scale-125" : "bg-royal-purple/30 hover:bg-royal-purple/60"}`}
                    aria-label={`Show ${book.title}`}
                  />
                ))}
              </div>
              <button
                onClick={nextBook}
                className="w-8 h-8 rounded-full bg-royal-purple/15 hover:bg-royal-purple/35 flex items-center justify-center text-dark cursor-pointer border border-royal-purple/30"
                aria-label="Next book"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
