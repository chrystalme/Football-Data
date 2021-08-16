import React from 'react';
import PropTypes from 'prop-types';

const RecipeCategory = ({ category }) => (
  <div key={category.idCategory}>
    <h2>{category.strCategory}</h2>
    <figure>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <div>
        <blockquote>
          <p>
            {category.strCategoryDescription}
          </p>
        </blockquote>
      </div>
    </figure>
  </div>
);

RecipeCategory.propTypes = {
  category: PropTypes.objectOf(Array).isRequired,
};

export default RecipeCategory;
