import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryHeading } from './category.styles.jsx';

import { selectCategoriesMap } from '../../store/categories/category.select';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <Fragment>
      <CategoryHeading>{category.toUpperCase()}</CategoryHeading>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
