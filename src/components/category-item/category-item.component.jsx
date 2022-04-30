import './categories.styles.scss';

const CategoryItem = ({ title, imageUrl }) => (
  <div className='category-container'>
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    {/* Category content */}
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>
);

export default CategoryItem;
