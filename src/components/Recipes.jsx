import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {
  
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios.get('www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => {
        console.table(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
  return(
    <div></div>
  )
}

export default Recipe;