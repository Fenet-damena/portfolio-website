"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, CheckCircle, XCircle, Loader2 } from "lucide-react";

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

type Status = { type: "idle" } | { type: "sending" } | { type: "success"; text: string } | { type: "error"; text: string };

export default function ContactDesign() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    try {
      emailjs.init("LhX_JrZNc7NTFrrgc");
    } catch {
      // ignore
    }
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    setStatus({ type: "sending" });

    try {
      const result = await emailjs.sendForm(
        "service_3jt3rsl",
        "template_7ftsar7",
        form.current,
        "LhX_JrZNc7NTFrrgc"
      );

      console.log("Email send result:", result);
      setStatus({ type: "success", text: "Message sent successfully!" });
      form.current.reset();
    } catch (error: unknown) {
      const msg = getErrorMessage(error);
      console.error("Email send error:", msg);
      setStatus({ type: "error", text: "Failed to send email. Please try again later." });
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
      <div className="container mx-auto px-6">
        <h2 className="text-4xl mb-6 font-bold gradient-text">Let's Connect</h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Ready to collaborate or discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
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

          {/* Message Form */}
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
              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full p-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-lg hover:opacity-90 transition ${isSending ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {/* inline status under button with icon */}
                <div className="mt-3 min-h-[1.25rem] flex items-center justify-center">
                  {status.type === "sending" && (
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending…</span>
                    </div>
                  )}
                  {status.type === "success" && (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span>{status.text}</span>
                    </div>
                  )}
                  {status.type === "error" && (
                    <div className="flex items-center space-x-2 text-red-600">
                      <XCircle className="w-5 h-5" />
                      <span>{status.text}</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}