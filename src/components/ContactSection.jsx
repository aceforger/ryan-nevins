import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle,
  Smile,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-cream doodle-texture overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-royal-purple/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-light-purple/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <Smile size={16} className="text-royal-purple" />
              <span className="text-xs tracking-[0.3em] uppercase text-dark/50 font-bold">
                Get in Touch
              </span>
              <Smile size={16} className="text-royal-purple" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-dark">
              Contact <span className="text-royal-purple italic">Ryan</span>
            </h2>
            <div className="w-20 h-[2px] bg-royal-purple mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left - Contact Info */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-dark">
                Contact Information
              </h3>

              {/* Email */}
              <motion.a
                href={`mailto:${author.email}`}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white border border-royal-purple/15 rounded-lg hover:border-royal-purple/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-royal-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal-purple/20 transition-colors">
                  <Mail size={18} className="text-royal-purple" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 uppercase tracking-wider font-bold mb-1">
                    Email
                  </p>
                  <p className="text-sm text-dark/70 font-medium">
                    {author.email}
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white border border-royal-purple/15 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-royal-purple/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-royal-purple" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 uppercase tracking-wider font-bold mb-1">
                    Location
                  </p>
                  <p className="text-sm text-dark/70 font-medium">
                    New York City, NY
                  </p>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white border border-royal-purple/15 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-royal-purple/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-royal-purple" />
                </div>
                <div>
                  <p className="text-xs text-dark/50 uppercase tracking-wider font-bold mb-1">
                    Availability
                  </p>
                  <p className="text-sm text-dark/70 font-medium">
                    Open for collaborations
                  </p>
                </div>
              </motion.div>

              {/* Quote */}
              <div className="bg-white border-2 border-royal-purple/20 rounded-lg p-6">
                <p className="text-xs text-dark/60 italic leading-relaxed">
                  "No matter who you are, you are God's special child. You have
                  the ability to reach for your dreams and achieve anything.
                  Never give up!"
                </p>
                <p className="text-xs text-royal-purple font-bold mt-3">
                  — Ryan Nevins
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Contact Form */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border-2 border-royal-purple/20 rounded-xl p-8 space-y-6 shadow-xl shadow-royal-purple/5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-dark/60 uppercase tracking-wider mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-soft-lavender/50 border border-royal-purple/20 rounded-lg px-4 py-3 text-dark placeholder:text-dark/40 focus:outline-none focus:border-royal-purple/60 focus:ring-2 focus:ring-royal-purple/10 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-dark/60 uppercase tracking-wider mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-soft-lavender/50 border border-royal-purple/20 rounded-lg px-4 py-3 text-dark placeholder:text-dark/40 focus:outline-none focus:border-royal-purple/60 focus:ring-2 focus:ring-royal-purple/10 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-dark/60 uppercase tracking-wider mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full bg-soft-lavender/50 border border-royal-purple/20 rounded-lg px-4 py-3 text-dark placeholder:text-dark/40 focus:outline-none focus:border-royal-purple/60 focus:ring-2 focus:ring-royal-purple/10 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold transition-all shadow-lg ${
                  status === "success"
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-royal-purple hover:bg-deep-purple text-white shadow-royal-purple/20 hover:scale-[1.02]"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "sending" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send size={16} />
                  </motion.div>
                ) : status === "success" ? (
                  <CheckCircle size={16} />
                ) : (
                  <Send size={16} />
                )}
                {status === "idle"
                  ? "Send Message"
                  : status === "sending"
                    ? "Sending..."
                    : "Message Sent!"}
              </button>

              {/* Success message */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-600 font-medium"
                >
                  Thank you! Ryan will get back to you soon.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
