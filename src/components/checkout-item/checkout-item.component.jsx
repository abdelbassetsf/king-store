import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={removeItemFromCartHandler} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={addItemToCartHandler} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={clearItemFromCartHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
