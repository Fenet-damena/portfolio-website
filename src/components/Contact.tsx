"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const extractMessage = (payload: unknown): string | undefined => {
    if (!payload) return undefined;
    if (typeof payload === "string") return payload;
    if (typeof payload === "object" && payload !== null) {
      const obj = payload as Record<string, unknown>;
      if (typeof obj.error === "string") return obj.error;
      if (typeof obj.details === "string") return obj.details;
      if (typeof obj.message === "string") return obj.message;
    }
    return undefined;
  };

  async function parseResponseBody(res: Response): Promise<unknown> {
    const ct = res.headers.get("content-type") ?? "";
    try {
      if (ct.includes("application/json")) return await res.json();
      return await res.text();
    } catch (err) {
      return `Failed to parse response body: ${(err as Error).message}`;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/contact", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await parseResponseBody(res);

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const msg = extractMessage(payload);
        setStatus(
          msg ||
            `Failed to send message (status ${res.status}). Check server logs.`
        );
        console.error("Send failed:", res.status, payload);
      }
    } catch (err) {
      console.error("Contact submit network/error:", err);
      setStatus(
        "Network error. Please try again. If this persists, confirm server is running and CORS is configured."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "Fenetdamena74@gmail.com", color: "text-neon-purple" },
    { icon: MapPin, title: "Location", value: "Adama, Ethiopia", color: "text-neon-cyan" },
    { icon: Phone, title: "Phone", value: "+251 966217113", color: "text-neon-pink" },
  ] as const;

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6">Get in Touch</h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card p-6 rounded-xl flex items-center space-x-4 cursor-pointer"
              >
                <div className={`p-3 rounded-full glass-card ${info.color}`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{info.title}</h4>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 gradient-text">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 glass-card rounded-lg bg-background/50 border border-border focus:border-neon-purple outline-none transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 glass-card rounded-lg bg-background/50 border border-border focus:border-neon-purple outline-none transition-all duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-4 glass-card rounded-lg bg-background/50 border border-border focus:border-neon-purple outline-none transition-all duration-300 resize-none"
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-lg font-semibold hover:neon-glow transition-all duration-300 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>

            {status && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                {status}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}