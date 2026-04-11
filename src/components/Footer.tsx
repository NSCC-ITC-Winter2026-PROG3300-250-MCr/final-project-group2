import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

/**
 * Footer component for Tallow Bliss Skin Care.
 *
 * Renders the site-wide footer containing the brand logo link, a short
 * brand description, an email contact icon, a quick links navigation
 * column, and a copyright notice with the current year.
 *
 * @returns {JSX.Element} The rendered Footer
 */

export default function Footer() {
  return (
    <footer className="bg-brand-stone border-t border-brand-charcoal/10 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column — logo, description, and email contact link */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6 group">
              <span className="font-serif text-2xl font-bold text-brand-olive-dark tracking-wide uppercase">
                Tallow Bliss Skincare
              </span>
            </Link>
            <p className="text-brand-charcoal/70 mb-6 max-w-md font-light leading-relaxed">
              Nourish your skin naturally with our handcrafted, small-batch skincare products. Made with 100% grass-fed beef tallow and natural ingredients in Antigonish, NS.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:Tallowbliss_skincare@outlook.com"
                className="text-brand-charcoal/60 hover:text-brand-olive transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links column — primary site navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-brand-charcoal">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/store" className="text-brand-charcoal/70 hover:text-brand-olive transition-colors text-sm uppercase tracking-wider">Store</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-brand-charcoal/70 hover:text-brand-olive transition-colors text-sm uppercase tracking-wider">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-charcoal/70 hover:text-brand-olive transition-colors text-sm uppercase tracking-wider">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar — displays the current year dynamically */}
        <div className="pt-8 border-t border-brand-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-charcoal/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Tallow Bliss Skin Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
