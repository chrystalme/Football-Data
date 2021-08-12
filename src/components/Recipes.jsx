import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        console.log(res.data.categories)
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return(
    <div>
    {
    Object.entries(categories).forEach(([key, value]) => {
        value.forEach((item, i) => {
    <h3>item.idCategory</h3>
  });
    });
}
    </div>
  )
}

export default Recipe;