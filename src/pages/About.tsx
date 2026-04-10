import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, ShieldCheck } from 'lucide-react';

/**
 * About page component for Tallow Bliss Skin Care.
 *
 * Displays the brand's origin story, mission, and core values.
 * Features animated sections using Framer Motion, including a hero image,
 * a narrative text block, and a three-column values grid.
 *
 * @returns {JSX.Element} The rendered About page
 */
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-brand-cream min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Hero image with decorative heart icon overlay */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-white shadow-xl">
              <img
                src="https://primary.jwwb.nl/public/z/v/z/temp-raemrvluitpezdrbzzse/polish_20250327_215937612-standard.jpg"
                alt="Tallow Bliss Skincare"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-olive text-brand-cream p-8 rounded-full shadow-lg hidden md:block">
              <Heart size={48} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Brand story and mission narrative */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal mb-8">Our Journey</h1>
            <div className="space-y-6 text-brand-charcoal/80 font-light text-lg leading-relaxed">
              <p>
                Our journey started with two close friends from a small town, united by a shared passion for crafting natural, healthier skincare solutions.
              </p>
              <p>
                As a small business, we take pride in delivering personalized care and meticulous attention to detail. Guided by quality and integrity, we ensure that every product we create reflects our unwavering commitment to excellence at a fair price.
              </p>
              <p>
                Tallow Bliss Skin Care is dedicated to providing high-quality skin care products that are handcrafted with love and care in Antigonish, N.S. Our formulations are designed to promote healthy and radiant skin, using natural ingredients that nourish and protect.
              </p>
              <p>
                We believe in the power of clean beauty and strive to create products that are effective and safe for all skin types.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section — three cards highlighting brand pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-32">

          {/* Value card: Small Town Roots */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-brand-charcoal/5"
          >
            <div className="bg-brand-stone w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-olive-dark">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Small Town Roots</h3>
            <p className="text-brand-charcoal/60 font-light">
              Founded by two close friends with a shared passion for natural wellness and community care.
            </p>
          </motion.div>

          {/* Value card: Handcrafted with Love */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-brand-charcoal/5"
          >
            <div className="bg-brand-stone w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-olive-dark">
              <Heart size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Handcrafted with Love</h3>
            <p className="text-brand-charcoal/60 font-light">
              Every product is meticulously crafted in small batches in Antigonish, NS to ensure the highest quality.
            </p>
          </motion.div>

          {/* Value card: Clean Beauty */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-brand-charcoal/5"
          >
            <div className="bg-brand-stone w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-olive-dark">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-brand-charcoal mb-4">Clean Beauty</h3>
            <p className="text-brand-charcoal/60 font-light">
              Committed to using only natural, safe, and effective ingredients that nourish and protect your skin.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}