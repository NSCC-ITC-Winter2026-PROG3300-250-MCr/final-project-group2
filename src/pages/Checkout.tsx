import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'pickup'>('delivery');

  const taxRate = 0.14;
  const taxAmount = cartTotal * taxRate;
  const finalTotal = cartTotal + taxAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/payment/success');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-brand-cream min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">Checkout</h1>
          <p className="text-brand-charcoal/60 font-light">Please enter your details to complete your order.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-charcoal/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Delivery Mode Toggle */}
            <div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Fulfillment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDeliveryMode('delivery')}
                  className={`py-4 rounded-xl border-2 font-medium transition-all duration-200 ${
                    deliveryMode === 'delivery'
                      ? 'border-brand-olive bg-brand-olive/10 text-brand-charcoal'
                      : 'border-brand-charcoal/20 text-brand-charcoal/50 hover:border-brand-charcoal/40'
                  }`}
                >
                  Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryMode('pickup')}
                  className={`py-4 rounded-xl border-2 font-medium transition-all duration-200 ${
                    deliveryMode === 'pickup'
                      ? 'border-brand-olive bg-brand-olive/10 text-brand-charcoal'
                      : 'border-brand-charcoal/20 text-brand-charcoal/50 hover:border-brand-charcoal/40'
                  }`}
                >
                  Pick Up
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    id="contact"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                    placeholder="jane@example.com or (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address — only shown for delivery */}
            {deliveryMode === 'delivery' && (
              <div>
                <h2 className="font-serif text-2xl text-brand-charcoal mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                      placeholder="123 Main St"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                      placeholder="Toronto"
                    />
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                      placeholder="ON"
                    />
                  </div>
                  <div>
                    <label htmlFor="postal" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="postal"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                      placeholder="M5V 2N4"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-brand-charcoal/80 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-charcoal/20 focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-colors bg-brand-stone/30"
                      placeholder="Canada"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Pickup location note */}
            {deliveryMode === 'pickup' && (
              <div className="bg-brand-stone p-6 rounded-2xl border border-brand-charcoal/10">
                <h2 className="font-serif text-2xl text-brand-charcoal mb-2">Pick Up Location</h2>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                  Your order will be ready for pick up in <span className="font-medium text-brand-charcoal">Antigonish, Nova Scotia</span>. We will contact you with further details once your order is confirmed.
                </p>
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-brand-stone p-6 rounded-2xl border border-brand-charcoal/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-brand-charcoal/80">Subtotal</span>
                <span className="font-medium">CA${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-brand-charcoal/10">
                <span className="text-brand-charcoal/80">Taxes (14%)</span>
                <span className="font-medium">CA${taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-serif text-xl text-brand-charcoal">Total</span>
                <span className="font-serif text-2xl text-brand-olive-dark">CA${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white py-4 rounded-xl font-medium uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Processing...' : `Pay CA$${finalTotal.toFixed(2)}`}
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-brand-charcoal/50 text-sm">
              <ShieldCheck size={16} />
              <span>Secure Checkout with Stripe</span>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
