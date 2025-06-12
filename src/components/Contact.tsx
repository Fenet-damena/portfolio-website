
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "fenetdamena74@gmail.com",
      color: "text-neon-purple"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Adama, Ethiopia",
      color: "text-neon-cyan"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+251 9XX XXX XXX",
      color: "text-neon-pink"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:fenetdamena74@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success toast
      toast({
        title: "Email Sent Successfully!",
        description: "Your message has been sent to fenetdamena74@gmail.com",
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6">
              Get in Touch
            </h3>
            
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

          {/* Contact Form */}
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
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 glass-card rounded-lg bg-background/50 border border-border focus:border-neon-purple outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 glass-card rounded-lg bg-background/50 border border-border focus:border-neon-purple outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 glass-card rounded-lg bg-background/50 border border-border focus:border-neon-purple outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white rounded-lg font-semibold hover:neon-glow transition-all duration-300 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
