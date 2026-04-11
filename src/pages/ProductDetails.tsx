import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowLeft, Plus, Minus, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

/**
 * Product Details page component for Tallow Bliss Skin Care.
 *
 * Displays the full detail view for a single product looked up by its
 * URL parameter ID. Features a main product image with an optional
 * thumbnail gallery, product description and warnings, variant option
 * selection, a quantity picker, and an Add to Cart button with brief
 * confirmation feedback. Renders a not-found state if the product ID
 * does not match any entry in the product catalogue.
 *
 * @returns {JSX.Element} The rendered ProductDetails page, or a not-found message
 */
export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="py-32 bg-brand-cream min-h-[80vh] flex items-center justify-center text-center">
        <div>
          <h1 className="font-serif text-4xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/store" className="text-brand-olive hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Store
          </Link>
        </div>
      </div>
    );
  }

  /** The name of the currently selected product variant option */
  const [selectedOption, setSelectedOption] = useState(product.options?.[0]?.name || '');

  /** The number of units the user intends to add to the cart */
  const [quantity, setQuantity] = useState(1);

  /** The URL of the currently displayed product image */
  const [activeImage, setActiveImage] = useState(product.image);

  /** Whether the item was just added to the cart — drives the brief confirmation state */
  const [added, setAdded] = useState(false);

  /** The full option data object matching the currently selected option name */
  const selectedOptionData = product.options?.find((opt) => opt.name === selectedOption);

  /**
   * Whether the current product or selected variant is out of stock.
   * True if the selected option explicitly marks inStock as false,
   * or if no option is selected and the base product is out of stock.
   */
  const isOutOfStock =
    selectedOptionData?.inStock === false || (!selectedOptionData && product.inStock === false);

  /**
   * Handles the Add to Cart button click.
   * Adds the current product, quantity, and selected option to the cart,
   * then briefly sets the added confirmation state for 2 seconds.
   * Does nothing if the product or selected variant is out of stock.
   */
  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addToCart(product, quantity, selectedOption);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-24 bg-brand-cream min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/store" className="inline-flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-olive transition-colors mb-8 text-sm uppercase tracking-widest font-medium">
          <ArrowLeft size={16} /> Back to Store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Product image gallery — main image with optional thumbnail row */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-stone border border-brand-charcoal/5">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Thumbnail strip — only rendered when the gallery has more than one image */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === img ? 'border-brand-olive' : 'border-transparent hover:border-brand-charcoal/20'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product information and purchase controls */}
          <div className="flex flex-col">
            <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">{product.name}</h1>
            <p className="font-serif text-3xl text-brand-olive-dark mb-6">CA${product.price.toFixed(2)}</p>
            
            <div className="prose prose-brand text-brand-charcoal/70 font-light leading-relaxed mb-8">
              <p>{product.description}</p>
              <p>Handcrafted in small batches with 100% grass-fed beef tallow and natural ingredients to nourish and protect your skin.</p>
              <p>{product.warning}</p>
            </div>

            <div className="h-px w-full bg-brand-charcoal/10 mb-8"></div>

            {/* Variant option selector — only rendered for products with multiple options */}
            {product.options && (
              <div className="mb-8">
                <label className="block text-sm uppercase tracking-widest text-brand-charcoal/70 mb-3 font-medium">
                  Select Option
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.options.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={() => setSelectedOption(opt.name)}
                      disabled={opt.inStock === false}
                      className={`px-6 py-3 rounded-md text-sm transition-all duration-300 border ${
                        selectedOption === opt.name
                          ? 'bg-brand-olive text-white border-brand-olive shadow-md'
                          : 'bg-white text-brand-charcoal border-brand-charcoal/10 hover:border-brand-olive/50'
                      }`}
                    >
                      {opt.inStock === false ? `${opt.name} - Out of Stock` : opt.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity picker — enforces a minimum of 1 */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-widest text-brand-charcoal/70 mb-3 font-medium">
                Quantity
              </label>
              <div className="flex items-center border border-brand-charcoal/10 rounded-lg overflow-hidden bg-white w-max">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-stone transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-16 text-center font-medium text-brand-charcoal text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-stone transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart button — shows out-of-stock or added confirmation states */}
            <button
              onClick={handleAddToCart}
              disabled={added || isOutOfStock}
              className={`w-full py-4 rounded-xl font-medium uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg ${
                added 
                  ? 'bg-brand-olive-dark text-white' 
                  : 'bg-brand-brown hover:bg-brand-brown-dark text-white'
              }`}
            >
              {isOutOfStock ? (
                <>
                  <ShoppingBag size={20} /> Out of Stock
                </>
              ) : added ? (
                <>
                  <Check size={20} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={20} /> Add to Cart
                </>
              )}
            </button>
            
            {/* Product trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-brand-charcoal/60 font-light">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive"></div>
                100% Natural Ingredients
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive"></div>
                Handcrafted in NS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive"></div>
                Grass-Fed Tallow
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-olive"></div>
                Chemical Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
