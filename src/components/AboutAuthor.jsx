import { Smile, Heart, Star, Sun, Users } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function AboutAuthor() {
  return (
    <section
      id="about"
      className="relative py-24 bg-sky-light doodle-texture overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Smile size={16} className="text-sunny-yellow" />
              <span className="text-xs tracking-[0.3em] uppercase text-pencil-gray/50 font-bold">
                About Ryan
              </span>
              <Smile size={16} className="text-sunny-yellow" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
              Ryan <span className="text-crayon-blue">Nevins</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal animation="slideRight" delay={0.2}>
            <div className="space-y-5">
              <p className="text-charcoal/85 leading-relaxed text-base">
                {author.bio}
              </p>
              <div className="bg-cloud-white border-2 border-sunny-yellow/30 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sun size={18} className="text-crayon-orange" />
                  <span className="text-xs font-bold text-charcoal">
                    Shine Kids Foundation
                  </span>
                </div>
                <p className="text-xs text-pencil-gray">{author.foundation}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideLeft" delay={0.4}>
            <div className="space-y-3">
              {author.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 bg-cloud-white/80 border border-crayon-blue/15 rounded-lg px-5 py-3.5"
                >
                  <Star
                    size={16}
                    className="text-sunny-yellow fill-sunny-yellow flex-shrink-0"
                  />
                  <span className="text-sm text-charcoal/70 font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
