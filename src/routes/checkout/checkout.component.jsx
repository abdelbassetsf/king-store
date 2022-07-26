import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.select';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice
} from './checkout.styles.jsx';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Descreption</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalPrice>Total: ${cartTotal}</TotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;
