import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const {
    idCategory, strCategory, strCategoryThumb, strCategoryDescription,
  } = category;
  return (

    <Link to={`meal/${idCategory}`} style={{ marginTop: 5 }}>
      <h2>
        Category:
        {strCategory}
      </h2>
      <img style={{ width: 500, height: 40 }} alt={strCategory} src={strCategoryThumb === null ? 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' : strCategoryThumb} />
      <p>
        {strCategoryDescription}
      </p>
    </Link>

  );
};
Category.propTypes = {
  category: PropTypes.objectOf(Array).isRequired,
};

export default Category;
