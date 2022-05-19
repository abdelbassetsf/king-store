import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <ul className='checkout-header'>
        <li className='header-block'>
          <span>Product</span>
        </li>
        <li className='header-block'>
          <span>Descreption</span>
        </li>
        <li className='header-block'>
          <span>Quantity</span>
        </li>
        <li className='header-block'>
          <span>Price</span>
        </li>
        <li className='header-block'>
          <span>Remove</span>
        </li>
      </ul>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
