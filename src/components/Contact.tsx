import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactDesign() {
  const contactInfo = [
    { icon: Mail, title: "Email", value: "Fenetdamena74@gmail.com", color: "text-neon-purple" },
    { icon: MapPin, title: "Location", value: "Adama, Ethiopia", color: "text-neon-cyan" },
    { icon: Phone, title: "Phone", value: "+251 966217113", color: "text-neon-pink" },
  ] as const;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl mb-6 font-bold gradient-text">Let's Connect</h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Ready to collaborate or discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            {contactInfo.map(info => (
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
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border bg-white/80 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border bg-white/80 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 rounded-lg border bg-white/80 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
