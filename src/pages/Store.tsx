import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Plus, Minus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState(product.options?.[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedOptionData = product.options?.find((opt) => opt.name === selectedOption);

  const isOutOfStock =
    selectedOptionData?.inStock === false || (!selectedOptionData && product.inStock === false);

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addToCart(product, quantity, selectedOption);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-charcoal/5 group hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-brand-stone block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="p-8 flex flex-col h-full">
        <Link to={`/product/${product.id}`}>
          <h2 className="font-serif text-2xl text-brand-charcoal mb-2 hover:text-brand-olive transition-colors">{product.name}</h2>
        </Link>
        <p className="text-brand-charcoal/60 font-light text-sm mb-6 flex-grow">{product.shortDescription || product.description}</p>
        
        <div className="flex items-end justify-between mb-6">
          <span className="font-serif text-2xl text-brand-olive-dark">CA${product.price.toFixed(2)}</span>
        </div>

        {product.options && (
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2 font-medium">
              Select Option
            </label>
            <select
              className="w-full bg-brand-stone/50 border border-brand-charcoal/10 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-brand-olive focus:ring-1 focus:ring-brand-olive text-brand-charcoal"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {product.options.map((opt) => (
                <option key={opt.name} value={opt.name} disabled={opt.inStock === false}>
                  {opt.inStock === false ? `${opt.name} - Out of Stock` : opt.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-xs uppercase tracking-widest text-brand-charcoal/50 mb-2 font-medium">
            Quantity
          </label>
          <div className="flex items-center border border-brand-charcoal/10 rounded-lg overflow-hidden bg-white w-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 md:p-2 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-stone transition-colors flex-1 flex justify-center"
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center font-medium text-brand-charcoal text-sm">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 md:p-2 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-stone transition-colors flex-1 flex justify-center"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added || isOutOfStock}
          className={`w-full py-3 rounded-md font-medium uppercase tracking-widest text-sm transition-colors duration-300 flex items-center justify-center gap-2 mt-auto ${
            added 
              ? 'bg-brand-olive-dark text-white' 
              : 'bg-brand-olive hover:bg-brand-olive-dark text-white'
          }`}
        >
          {isOutOfStock ? (
            <>
              <ShoppingBag size={18} /> Out of Stock
            </>
          ) : added ? (
            <>
              <Check size={18} /> Added
            </>
          ) : (
            <>
              <ShoppingBag size={18} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default function Store() {
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
          <h1 className="font-serif text-5xl md:text-6xl text-brand-charcoal mb-6">Our Store</h1>
          <p className="text-brand-charcoal/70 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to our Store page where you can find a variety of handcrafted skin care products. 
            Each product is carefully crafted with our grass-fed beef tallow and natural ingredients 
            to provide you with the best skincare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}