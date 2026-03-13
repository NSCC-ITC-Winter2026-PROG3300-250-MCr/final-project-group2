import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, ShieldCheck, Sparkles, ArrowRight, Leaf, Droplet, Hexagon, Flower2 } from 'lucide-react';

const heroImages = [
  "https://primary.jwwb.nl/pexels/67/6738807.jpeg?enable-io=true&fit=bounds&width=1920&height=1920",
  "https://primary.jwwb.nl/pexels/77/7796749.jpeg?enable-io=true&fit=bounds&width=1920&height=1920",
  "https://primary.jwwb.nl/pexels/49/4938327.jpeg?enable-io=true&fit=bounds&width=1920&height=1920"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={heroImages[currentSlide]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              alt="Natural Skincare Products"
              className="w-full h-full object-cover object-center absolute inset-0"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/60 to-transparent z-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6"
            >
              Nourish Your Skin Naturally
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl font-light mb-8 text-brand-cream/90 max-w-lg"
            >
              100% Grass-Fed Tallow Skincare. Pure & Organic Ingredients handcrafted in Antigonish, NS.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/store"
                className="inline-flex items-center gap-2 bg-brand-olive-dark hover:bg-brand-olive text-white px-8 py-4 rounded-md font-medium uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-brand-stone py-8 border-y border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-charcoal/10">
            <div className="flex flex-col items-center justify-center gap-3 py-4 md:py-0">
              <Droplets className="text-brand-olive" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-brand-charcoal">100% Grass-Fed Tallow</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 py-4 md:py-0">
              <ShieldCheck className="text-brand-olive" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-brand-charcoal">Chemical Free</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 py-4 md:py-0">
              <Sparkles className="text-brand-olive" size={32} strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-brand-charcoal">Nourishing & Rejuvenating</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tallow */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-6">Why Choose Tallow Skincare?</h2>
            <p className="text-brand-charcoal/70 font-light text-lg leading-relaxed">
              Discover the ancient beauty secret of nutrient-rich tallow for soft, healthy, and radiant skin. 
              Rich in vitamins A, D, E and K, tallow closely resembles the natural fats and oils found in our own skin, 
              making it incredibly effective at moisturizing and protecting the skin's lipid barrier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-center mt-16">
            <div className="order-2 md:order-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5">
                <h3 className="font-serif text-2xl text-brand-olive-dark mb-4">Deeply Moisturizing</h3>
                <p className="text-brand-charcoal/70 font-light leading-relaxed">
                  Omega-9 helps moisturize and soften the skin, while Palmitic Acid protects the skin's lipid barrier, providing smoother, more resilient skin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5">
                <h3 className="font-serif text-2xl text-brand-olive-dark mb-4">Rich in Vitamins</h3>
                <p className="text-brand-charcoal/70 font-light leading-relaxed">
                  Loaded with Vitamins A, D, E & K to help develop healthy skin cells, repair damage, protect from free radicals, and improve skin texture.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/skincare/800/800" alt="Natural Skincare" className="rounded-2xl w-full h-64 object-cover shadow-md" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/natural/800/800" alt="Organic Ingredients" className="rounded-2xl w-full h-64 object-cover shadow-md mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-brand-stone relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://picsum.photos/seed/botanical/1920/1080" alt="Botanical background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-serif text-3xl md:text-4xl italic text-brand-charcoal leading-relaxed mb-8">
            "Nature provides the most powerful ingredients for our skin. By harnessing the nourishing properties of grass-fed tallow and organic botanicals, we restore your skin's natural radiance without harsh chemicals."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-olive"></div>
            <span className="font-medium uppercase tracking-widest text-brand-charcoal/80 text-sm">Our Philosophy</span>
            <div className="h-px w-12 bg-brand-olive"></div>
          </div>
        </div>
      </section>

      {/* Ingredients Highlight */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">Our Ingredients</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-brand-charcoal/20"></div>
              <span className="uppercase tracking-widest text-brand-charcoal/60 text-sm font-medium">All Natural & Pure</span>
              <div className="h-px w-24 bg-brand-charcoal/20"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { name: 'Grass-Fed Tallow', image: 'https://picsum.photos/seed/tallow/200/200' },
              { name: 'Organic Oils', image: 'https://picsum.photos/seed/oil/200/200' },
              { name: 'Beeswax', image: 'https://picsum.photos/seed/beeswax/200/200' },
              { name: 'Essential Oils', image: 'https://picsum.photos/seed/essential/200/200' },
            ].map((ingredient, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 group">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-brand-olive transition-all duration-300">
                  <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <span className="font-serif text-xl text-brand-charcoal">{ingredient.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
