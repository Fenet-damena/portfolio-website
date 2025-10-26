"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function getErrorMessage(err: unknown): string {
  if (typeof err === "string") return err;
  if (err instanceof Error) return err.message;
  if (typeof err === "object" && err !== null) {
    const o = err as Record<string, unknown>;
    if (typeof o.text === "string") return o.text;
    if (typeof o.message === "string") return o.message;
    if (typeof o.error === "string") return o.error;
  }
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

export default function ContactDesign() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    try {
      emailjs.init("LhX_JrZNc7NTFrrgc");
    } catch {
      // ignore if init not needed
    }
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const result = await emailjs.sendForm(
        "service_3jt3rsl",
        "template_7ftsar7",
        form.current,
        "LhX_JrZNc7NTFrrgc"
      );

      toast.success("Message sent successfully! 🎉", { id: toastId });
      console.log("Email sent:", result);
      form.current.reset();
    } catch (error: unknown) {
      const msg = getErrorMessage(error);
      toast.error("Failed to send email. Please try again later.", { id: toastId });
      console.error("Email send error:", msg);
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "Fenetdamena74@gmail.com", color: "text-neon-purple" },
    { icon: MapPin, title: "Location", value: "Adama, Ethiopia", color: "text-neon-cyan" },
    { icon: Phone, title: "Phone", value: "+251 966217113", color: "text-neon-pink" },
  ] as const;

  return (
    <section id="contact" className="py-20 relative">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      <div className="container mx-auto px-6">
        <h2 className="text-4xl mb-6 font-bold gradient-text">Let's Connect</h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Ready to collaborate or discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className={`glass-card p-6 rounded-xl flex items-center space-x-4 cursor-pointer ${info.color}`}
              >
                <info.icon className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <p className="text-black">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg border bg-white/80 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg border bg-white/80 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full p-4 rounded-lg border bg-white/80 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <button
                type="submit"
                disabled={isSending}
                className={`w-full p-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-lg hover:opacity-90 transition ${isSending ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}