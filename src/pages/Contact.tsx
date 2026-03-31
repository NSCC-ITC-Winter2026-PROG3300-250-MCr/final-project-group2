import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';
import { validateEmail, validateName, validateMessage } from '../validation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      alert('Please enter a valid name (at least 2 characters).');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validateMessage(formData.message)) {
      alert('Please enter a message of at least 10 characters.');
      return;
    }

    // If all validation passes:
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-brand-cream min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal mb-6">Contact Us</h1>
          <p className="text-brand-charcoal/70 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question or need assistance? Contact us using the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand-stone p-12 rounded-3xl"
          >
            <h2 className="font-serif text-3xl text-brand-charcoal mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-brand-olive-dark shadow-sm">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-charcoal mb-1">Email Us</h3>
                  <a href="mailto:Tallowbliss_skincare@outlook.com" className="text-brand-charcoal/70 hover:text-brand-olive transition-colors font-light">
                    Tallowbliss_skincare@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-brand-olive-dark shadow-sm">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-xl text-brand-charcoal mb-1">Location</h3>
                  <p className="text-brand-charcoal/70 font-light mb-4">
                    Handcrafted in Antigonish, N.S.
                  </p>
                  <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-brand-charcoal/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89167.33088251392!2d-62.06733979313654!3d45.62001552093539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5c4a450125b271%3A0x628001e791242337!2sAntigonish%2C%20NS!5e0!3m2!1sen!2sca!4v1710210000000!5m2!1sen!2sca"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Antigonish, NS Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-12 rounded-3xl shadow-sm border border-brand-charcoal/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal/70 mb-2 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-stone/30 border border-brand-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal/70 mb-2 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-stone/30 border border-brand-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal/70 mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-brand-stone/30 border border-brand-charcoal/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-olive hover:bg-brand-olive-dark text-white py-4 rounded-lg font-medium uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
