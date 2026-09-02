import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Star,
  BadgeCheck,
  X,
  Quote,
  ArrowRight,
  ShoppingBag,
  ExternalLink,
  Feather,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { allBooks } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

function ReviewCard({ review }) {
  return (
    <div className="bg-white/90 border border-royal-purple/20 rounded-lg p-4 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < review.rating
                  ? "text-royal-purple fill-royal-purple"
                  : "text-soft-lavender"
              }
            />
          ))}
        </div>
        {review.verified && (
          <BadgeCheck size={14} className="text-light-purple flex-shrink-0" />
        )}
      </div>
      <h5 className="font-serif text-sm font-bold text-dark">{review.title}</h5>
      <p className="text-[10px] text-dark/60">
        {review.name} · {review.date}
      </p>
      <p className="text-xs text-dark/70 leading-relaxed">{review.text}</p>
    </div>
  );
}

function FeaturedBookCard({ book, onViewDetails }) {
  return (
    <ScrollReveal animation="fadeUp">
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white border-2 border-royal-purple/30 rounded-xl overflow-hidden transition-all shadow-xl hover:border-royal-purple/50"
      >
        <div className="grid md:grid-cols-5">
          {/* Book cover - large featured */}
          <div className="md:col-span-2 relative">
            <div className="relative h-full min-h-64 overflow-hidden bg-soft-lavender">
              <img
                src={book.coverFront}
                alt={book.title}
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
              {/* Featured badge */}
              <div className="absolute top-4 left-4 bg-royal-purple text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Featured Book
              </div>
            </div>
          </div>

          {/* Book info */}
          <div className="md:col-span-3 p-6 md:p-8 space-y-4 text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark leading-tight">
              {book.title}
            </h3>
            <p className="text-sm text-dark/60 italic">{book.subtitle}</p>
            <div className="w-16 h-[2px] bg-royal-purple" />
            <p className="text-dark/80 leading-relaxed text-sm md:text-base">
              {book.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {book.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-3 py-1 bg-royal-purple/10 border border-royal-purple/20 text-royal-purple text-xs font-medium rounded-full"
                >
                  {theme}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-royal-purple/15 flex items-center justify-between mt-40">
              <div className="flex items-center gap-1.5">
                <Star
                  size={14}
                  className="text-royal-purple fill-royal-purple"
                />
                <span className="text-sm text-dark/50">
                  {book.reviews.length} reviews
                </span>
              </div>
              <button
                onClick={() => onViewDetails(book)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-royal-purple hover:text-deep-purple transition-colors cursor-pointer"
              >
                View Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function OtherBookCard({ book, onViewDetails, index }) {
  return (
    <ScrollReveal animation="fadeUp" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white border border-royal-purple/20 rounded-lg overflow-hidden transition-all shadow-md hover:border-royal-purple/40 h-full flex flex-col"
      >
        {/* Small cover */}
        <div className="relative w-full h-60 overflow-hidden bg-soft-lavender">
          <img
            src={book.coverFront}
            alt={book.title}
            className="w-full h-full object-contain p-2"
          />
        </div>

        {/* Info */}
        <div className="p-4 space-y-2 flex-grow text-left">
          <h4 className="font-serif text-base font-bold text-dark leading-tight line-clamp-1">
            {book.title}
          </h4>
          <p className="text-[10px] text-dark/50 italic line-clamp-1">
            {book.subtitle}
          </p>
          <div className="flex flex-wrap gap-1">
            {book.themes.slice(0, 2).map((theme) => (
              <span
                key={theme}
                className="px-2 py-0.5 bg-royal-purple/10 border border-royal-purple/20 text-royal-purple text-[9px] font-medium rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>
          <div className="pt-2 border-t border-royal-purple/10 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star size={10} className="text-royal-purple fill-royal-purple" />
              <span className="text-[10px] text-dark/50">
                {book.reviews.length}
              </span>
            </div>
            <button
              onClick={() => onViewDetails(book)}
              className="text-[10px] font-bold text-royal-purple hover:text-deep-purple transition-colors cursor-pointer"
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function BookModal({ book, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl border-2 border-royal-purple/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-royal-purple/20 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <Feather size={18} className="text-royal-purple" />
            <span className="text-xs uppercase tracking-wider text-dark/50 font-bold">
              Book Details
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-dark/50 hover:text-royal-purple transition-colors cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-48 flex-shrink-0">
              <div className="rounded-lg overflow-hidden border-2 border-royal-purple/30">
                <img
                  src={book.coverFront}
                  alt={book.title}
                  className="w-full h-full object-cover aspect-[2/3]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-dark">
                {book.title}
              </h2>
              <p className="text-dark/60 italic">{book.subtitle}</p>
              <div className="w-12 h-[2px] bg-royal-purple" />
              <p className="text-dark/80 leading-relaxed text-sm">
                {book.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-3 py-1.5 bg-royal-purple/10 border border-royal-purple/20 text-royal-purple text-xs font-medium rounded-full"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-royal-purple/15 space-y-3">
                <p className="text-xs font-bold text-royal-purple uppercase tracking-wider">
                  Purchase This Book
                </p>
                <div className="flex flex-wrap gap-3">
                  {book.purchaseLinks && book.purchaseLinks.length > 0 ? (
                    book.purchaseLinks.map((link) => {
                      const Icon =
                        link.icon === "shoppingBag"
                          ? ShoppingBag
                          : ExternalLink;
                      return (
                        <motion.a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 bg-royal-purple hover:bg-deep-purple text-white px-5 py-2.5 rounded-full font-bold text-xs transition-all shadow-lg shadow-royal-purple/20"
                        >
                          <Icon size={14} /> {link.name}
                        </motion.a>
                      );
                    })
                  ) : (
                    <p className="text-xs text-dark/50 italic">
                      Purchase information coming soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-royal-purple/15">
            <h3 className="font-serif text-xl font-bold text-dark mb-6 flex items-center gap-2">
              <Quote size={16} className="text-royal-purple" /> Reviews (
              {book.reviews.length})
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {book.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BooksSection() {
  const [selectedBook, setSelectedBook] = useState(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (selectedBook) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: "instant",
        });
      }, 0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBook]);

  const featuredBook = allBooks[0];
  const otherBooks = allBooks.slice(1);

  return (
    <section
      id="books"
      className="relative py-24 bg-cream doodle-texture overflow-hidden scroll-mt-20"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Feather size={14} className="text-royal-purple" />
              <span className="text-xs tracking-[0.3em] uppercase text-dark/50 font-bold">
                The Collection
              </span>
              <Feather size={14} className="text-royal-purple" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark">
              Books by <span className="text-royal-purple italic">Ryan</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured Book */}
        <FeaturedBookCard book={featuredBook} onViewDetails={setSelectedBook} />

        {/* Other Books */}
        <div className="mt-16">
          <ScrollReveal animation="fadeUp">
            <p className="text-center text-xs tracking-[0.3em] uppercase text-dark/50 font-bold mb-8">
              More Books by Ryan
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBooks.map((book, index) => (
              <OtherBookCard
                key={book.id}
                book={book}
                onViewDetails={setSelectedBook}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedBook && (
          <BookModal
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
