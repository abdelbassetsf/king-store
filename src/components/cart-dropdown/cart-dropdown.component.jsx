import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../store/cart/cart.select';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('checkout');

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage className='empty-message'>
          No Products in cart
        </EmptyMessage>
      )}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
