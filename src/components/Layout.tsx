import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component for Tallow Bliss Skin Care.
 *
 * Provides the shared page shell used across all routes, composing the
 * {@link Navbar} at the top, a flexible main content area, and the
 * {@link Footer} at the bottom. Ensures the footer is always pushed to
 * the bottom of the viewport even on short pages via a flex column layout.
 *
 * @param children - The page content to render in the main content area
 * @returns {JSX.Element} The rendered Layout wrapper
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
