import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { XCircle, ArrowLeft } from 'lucide-react';

export default function PaymentFailure() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32 bg-brand-cream min-h-[80vh] flex items-center justify-center"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="bg-white p-16 rounded-3xl shadow-sm border border-brand-charcoal/5"
        >
          <div className="text-red-500 flex justify-center mb-8">
            <XCircle size={80} strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-6">Payment Failed</h1>
          <p className="text-brand-charcoal/70 font-light text-lg mb-12 leading-relaxed">
            We're sorry, but your payment could not be processed at this time. 
            Please check your payment details and try again, or contact your bank for assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-olive-dark text-white px-8 py-4 rounded-md font-medium uppercase tracking-widest transition-colors duration-300"
            >
              <ArrowLeft size={18} /> Return to Cart
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-brand-charcoal/20 text-brand-charcoal hover:bg-brand-stone px-8 py-4 rounded-md font-medium uppercase tracking-widest transition-colors duration-300"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
