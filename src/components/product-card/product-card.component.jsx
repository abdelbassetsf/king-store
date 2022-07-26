import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { addItemToCart } from '../../store/cart/cart.action';

import { selectCartItems } from '../../store/cart/cart.select';

import {
  ProductCartContainer,
  Name,
  Footer,
  Price
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add To Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
