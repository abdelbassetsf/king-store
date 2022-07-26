import { createSelector } from 'reselect';

export const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((totalItems, cartItem) => totalItems + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, { price, quantity }) => total + price * quantity, 0)
);
