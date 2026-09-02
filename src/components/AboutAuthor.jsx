import { Smile, Heart, Star, Sun, Users, Award, User } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function AboutAuthor() {
  return (
    <section
      id="about"
      className="relative py-24 bg-off-white doodle-texture overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-royal-purple/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-light-purple/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Smile size={16} className="text-royal-purple" />
              <span className="text-xs tracking-[0.3em] uppercase text-dark/50 font-bold">
                About Ryan
              </span>
              <Smile size={16} className="text-royal-purple" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
              Ryan <span className="text-royal-purple italic">Nevins</span>
            </h2>
            <div className="w-24 h-[2px] bg-royal-purple mx-auto mt-5" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile column */}
          <ScrollReveal animation="slideRight" delay={0.1}>
            <div className="space-y-6">
              {/* Profile photo with SVG fallback */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-royal-purple/30 shadow-2xl"
              >
                {/* Try to load image, fallback to SVG if missing */}
                <img
                  src="/images/profile.png"
                  alt={author.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* SVG placeholder (hidden by default) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-royal-purple/20 to-light-purple/30 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="48" fill="#E8DDF5" />
                    {/* Head */}
                    <circle
                      cx="50"
                      cy="40"
                      r="15"
                      fill="#6B3FA0"
                      opacity="0.5"
                    />
                    {/* Body */}
                    <path
                      d="M20,85 C20,65 35,55 50,55 C65,55 80,65 80,85 Z"
                      fill="#6B3FA0"
                      opacity="0.5"
                    />
                    {/* Hair */}
                    <path
                      d="M35,35 Q50,18 65,35 Q65,28 50,22 Q35,28 35,35 Z"
                      fill="#4A1A7A"
                      opacity="0.6"
                    />
                    {/* Smile */}
                    <path
                      d="M42,45 Q50,52 58,45"
                      stroke="#4A1A7A"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Eyes */}
                    <circle cx="44" cy="38" r="2" fill="#4A1A7A" />
                    <circle cx="56" cy="38" r="2" fill="#4A1A7A" />
                  </svg>
                </div>
                {/* Decorative inner ring */}
                <div className="absolute inset-2 rounded-full border-2 border-white/40 pointer-events-none" />
              </motion.div>

              {/* Quick info */}
              <div className="text-center space-y-2">
                <p className="font-serif text-xl font-bold text-dark">
                  {author.name}
                </p>
                <p className="text-xs text-dark/50 italic">{author.title}</p>
              </div>

              {/* Foundation badge */}
              <div className="bg-white border-2 border-royal-purple/20 rounded-lg p-5 text-center">
                <Sun size={20} className="text-royal-purple mx-auto mb-2" />
                <p className="text-xs font-bold text-dark">
                  Shine Kids Foundation
                </p>
                <p className="text-[10px] text-dark/50 mt-1">
                  {author.foundation}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio column */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="space-y-5">
              <p className="text-dark/80 leading-relaxed text-base">
                {author.bio}
              </p>

              {/* Mission card */}
              <div className="bg-white border border-royal-purple/15 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={16} className="text-royal-purple" />
                  <span className="text-xs font-bold text-dark uppercase tracking-wider">
                    Mission
                  </span>
                </div>
                <p className="text-xs text-dark/60 leading-relaxed">
                  Ryan's dream is to make "Shine Kids" into a foundation so he
                  can help kids follow their dreams and believe in themselves.
                </p>
              </div>

              {/* Volunteer card */}
              <div className="bg-white border border-royal-purple/15 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users size={16} className="text-royal-purple" />
                  <span className="text-xs font-bold text-dark uppercase tracking-wider">
                    Volunteer Work
                  </span>
                </div>
                <p className="text-xs text-dark/60 leading-relaxed">
                  He has helped many kids through his volunteer work with
                  organizations such as the St. Kevin Care and Share program,
                  Special Olympics, and working with kids on an individual
                  basis.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Achievements column */}
          <ScrollReveal animation="slideLeft" delay={0.5}>
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-dark flex items-center gap-2 mb-4">
                <Award size={16} className="text-royal-purple" />
                Achievements
              </h3>

              {author.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-white border border-royal-purple/15 rounded-lg px-5 py-3.5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-royal-purple/10 flex items-center justify-center flex-shrink-0">
                    <Star
                      size={14}
                      className="text-royal-purple fill-royal-purple"
                    />
                  </div>
                  <span className="text-sm text-dark/70 font-medium">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
