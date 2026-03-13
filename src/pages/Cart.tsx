import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const taxRate = 0.14;
  const taxAmount = cartTotal * taxRate;
  const finalTotal = cartTotal + taxAmount;

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
          <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal mb-6">Your Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-brand-charcoal/5 max-w-3xl mx-auto">
            <div className="bg-brand-stone w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-charcoal/30">
              <ShoppingBag size={48} strokeWidth={1} />
            </div>
            <h2 className="font-serif text-3xl text-brand-charcoal mb-4">Your cart is empty</h2>
            <p className="text-brand-charcoal/60 font-light mb-8 max-w-md mx-auto">
              Looks like you haven't added any of our nourishing tallow products to your cart yet.
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-brand-olive hover:bg-brand-olive-dark text-white px-8 py-4 rounded-md font-medium uppercase tracking-widest transition-colors duration-300"
            >
              Continue Shopping <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.cartItemId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-brand-charcoal/5 flex flex-col sm:flex-row items-center gap-6"
                  >
                    <div className="w-32 h-32 rounded-xl overflow-hidden bg-brand-stone shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between h-full w-full">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-serif text-2xl text-brand-charcoal mb-1">{item.name}</h3>
                          {item.selectedOption && (
                            <p className="text-sm text-brand-charcoal/60 uppercase tracking-widest">
                              Option: {item.selectedOption}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-brand-charcoal/40 hover:text-red-500 transition-colors p-2"
                          aria-label="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border border-brand-charcoal/10 rounded-lg overflow-hidden bg-brand-stone/30">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-2 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-12 text-center font-medium text-brand-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-2 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-serif text-2xl text-brand-olive-dark">
                          CA${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-brand-stone p-8 rounded-3xl sticky top-28">
                <h2 className="font-serif text-3xl text-brand-charcoal mb-8">Order Summary</h2>
                
                <div className="space-y-4 mb-8 text-brand-charcoal/80 font-light">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>CA${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes (14%)</span>
                    <span>CA${taxAmount.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-brand-charcoal/10 pt-6 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="font-serif text-2xl text-brand-charcoal">Total</span>
                    <span className="font-serif text-4xl text-brand-olive-dark">CA${finalTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-brand-charcoal/50 mt-2 text-right">CAD</p>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white py-4 rounded-xl font-medium uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-brand-charcoal/50 text-sm">
                  <ShieldCheck size={16} />
                  <span>Secure Checkout with Stripe</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
