import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Navbar component for Tallow Bliss Skin Care.
 *
 * Renders the sticky site-wide header containing an announcement banner,
 * the brand logo, desktop navigation links, a cart icon with item count
 * badge, and a mobile hamburger menu. Active route links are highlighted
 * using the current location pathname. The mobile menu animates open and
 * closed using Framer Motion and closes automatically on link selection.
 *
 * @returns {JSX.Element} The rendered Navbar
 */
export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  /** Whether the mobile navigation menu is currently open */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Navigation link definitions for the main site menu.
   * Each entry contains a display name and its target route path.
   */
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
  ];

  /**
   * Determines whether a given route path matches the current location.
   *
   * @param path - The route path to check against the current URL
   * @returns True if the path matches the current pathname, false otherwise
   */
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-charcoal/10">

      {/* Announcement banner — displays site-wide notices */}
      <div className="bg-brand-charcoal text-white text-center py-1.5 md:py-2.5 px-4 text-xs md:text-sm font-medium tracking-wide">
        Temporarily closed due to unforeseen circumstances.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">

          {/* Brand logo — links to the home page */}
          <Link to="/" className="flex items-center group">
            <span className="font-serif text-xl md:text-3xl font-bold text-brand-olive-dark tracking-wide uppercase">
              Tallow Bliss Skincare
            </span>
          </Link>

          {/* Desktop navigation — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-olive ${
                  isActive(link.path) ? 'text-brand-olive' : 'text-brand-charcoal/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">

            {/* Cart icon — shows item count badge when cart is non-empty */}
            <Link
              to="/cart"
              className="relative p-2 text-brand-charcoal hover:text-brand-olive transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart size={24} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-brown text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle button — switches between hamburger and close icons */}
            <button
              className="md:hidden p-2 text-brand-charcoal hover:text-brand-olive transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu — animates in/out, closes on link click */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-charcoal/10 overflow-hidden"
          >
            <div className="px-4 pt-1 pb-3 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-base font-medium uppercase tracking-widest border-b border-brand-charcoal/5 ${
                    isActive(link.path) ? 'text-brand-olive' : 'text-brand-charcoal/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
