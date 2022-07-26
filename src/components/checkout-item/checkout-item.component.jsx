import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.select';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemFromCartHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
