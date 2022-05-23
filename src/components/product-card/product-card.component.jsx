import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

import {
  ProductCartContainer,
  Name,
  Footer,
  Price
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
