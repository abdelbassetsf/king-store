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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const itemsCount = cartItems.reduce(
      (totalItems, cartItem) => totalItems + cartItem.quantity,
      0
    );
    setCartCount(itemsCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
