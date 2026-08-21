import { useState } from "react";
import { Mail, Send, CheckCircle, Smile } from "lucide-react";
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
      className="relative py-24 bg-paper-cream doodle-texture overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <Smile size={16} className="text-sunny-yellow mx-auto mb-4" />
            <h2 className="font-serif text-4xl font-bold text-charcoal">
              Contact <span className="text-crayon-blue">Ryan</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-cloud-white border-2 border-crayon-blue/20 rounded-xl p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full bg-sky-light border border-crayon-blue/20 rounded-lg px-4 py-3 text-charcoal placeholder:text-pencil-gray/40 focus:outline-none focus:border-crayon-blue/60"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full bg-sky-light border border-crayon-blue/20 rounded-lg px-4 py-3 text-charcoal placeholder:text-pencil-gray/40 focus:outline-none focus:border-crayon-blue/60"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full bg-sky-light border border-crayon-blue/20 rounded-lg px-4 py-3 text-charcoal placeholder:text-pencil-gray/40 focus:outline-none focus:border-crayon-blue/60 resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full inline-flex items-center justify-center gap-2 bg-sunny-yellow hover:bg-crayon-orange text-charcoal py-3.5 rounded-full font-bold transition-all shadow-lg shadow-sunny-yellow/20"
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
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
