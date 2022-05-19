import { useState, createContext, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    item => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, productToRemove);
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  cartTotal: 0,
  cartCount: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = productToRemove => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = productToClear => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalItems, cartItem) => totalItems + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalCount = cartItems.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );
    setCartTotal(newTotalCount);
  }, [cartItems]);

  const value = {
    cartItems,
    isCartOpen,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
