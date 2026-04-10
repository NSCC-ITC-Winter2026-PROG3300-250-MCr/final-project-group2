import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';

/**
 * Represents a product that has been added to the shopping cart.
 * Extends the base {@link Product} type with cart-specific fields.
 */
export interface CartItem extends Product {
  /** Unique identifier for this specific cart entry, incorporating product ID, option, and timestamp */
  cartItemId: string;
  /** Number of units of this item in the cart */
  quantity: number;
  /** The selected product variant option, if applicable */
  selectedOption?: string;
}

/**
 * Shape of the cart context value exposed to consumers via {@link useCart}.
 */
interface CartContextType {
  /** The current array of items in the cart */
  cart: CartItem[];
  /**
   * Adds a product to the cart. If the same product and option already
   * exists, increments its quantity instead of adding a duplicate entry.
   *
   * @param product - The product to add
   * @param quantity - The number of units to add
   * @param selectedOption - The selected variant option name, if applicable
   */
  addToCart: (product: Product, quantity: number, selectedOption?: string) => void;
  /**
   * Removes a specific cart item by its unique cart item ID.
   *
   * @param cartItemId - The unique ID of the cart item to remove
   */
  removeFromCart: (cartItemId: string) => void;
  /**
   * Updates the quantity of a specific cart item.
   * Automatically removes the item if the new quantity is zero or below.
   *
   * @param cartItemId - The unique ID of the cart item to update
   * @param quantity - The new quantity to set
   */
  updateQuantity: (cartItemId: string, quantity: number) => void;
  /** Removes all items from the cart */
  clearCart: () => void;
  /** The sum of (price × quantity) for all items in the cart, before tax */
  cartTotal: number;
  /** The total number of individual units across all cart items */
  cartCount: number;
}

/**
 * React context for cart state. Undefined outside of a {@link CartProvider}.
 * Consumers should access this via the {@link useCart} hook rather than directly.
 */
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * CartProvider component.
 *
 * Wraps the application (or a subtree) and provides cart state and actions
 * to all descendant components via React context. Cart state is persisted
 * to localStorage under the key `tallowbliss_cart` and rehydrated on mount.
 *
 * @param children - The child nodes to render within the provider
 * @returns {JSX.Element} The rendered CartContext provider wrapping its children
 */
export const CartProvider = ({ children }: { children: ReactNode }) => {
  /**
   * Cart state, initialised from localStorage if a saved cart exists,
   * otherwise defaults to an empty array.
   */
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('tallowbliss_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  /**
   * Persists the current cart state to localStorage whenever it changes.
   */
  useEffect(() => {
    localStorage.setItem('tallowbliss_cart', JSON.stringify(cart));
  }, [cart]);

  /**
   * Adds a product to the cart. If an item with the same product ID and
   * selected option already exists, its quantity is incremented. Otherwise
   * a new cart entry is created with a unique cartItemId.
   *
   * @param product - The product to add
   * @param quantity - The number of units to add
   * @param selectedOption - The selected variant option name, if applicable
   */
  const addToCart = (product: Product, quantity: number, selectedOption?: string) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedOption === selectedOption
      );

      if (existingItemIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            ...product,
            cartItemId: `${product.id}-${selectedOption || 'default'}-${Date.now()}`,
            quantity,
            selectedOption,
          },
        ];
      }
    });
  };

  /**
   * Removes a specific item from the cart by its unique cart item ID.
   *
   * @param cartItemId - The unique ID of the cart item to remove
   */
  const removeFromCart = (cartItemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  /**
   * Updates the quantity of a specific cart item.
   * If the new quantity is zero or below, the item is removed from the cart.
   *
   * @param cartItemId - The unique ID of the cart item to update
   * @param quantity - The new quantity to set
   */
  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  /** Clears all items from the cart */
  const clearCart = () => {
    setCart([]);
  };

  /** Pre-tax sum of all item prices multiplied by their quantities */
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  /** Total unit count across all cart items */
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

/**
 * Custom hook for consuming the cart context.
 *
 * Provides access to cart state and all cart actions from any component
 * within the {@link CartProvider} tree.
 *
 * @throws {Error} If called outside of a CartProvider
 * @returns {CartContextType} The current cart context value
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
