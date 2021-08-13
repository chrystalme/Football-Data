import axios from 'axios';
import { recipesCategory } from '../helpers/endpoints';

const fetchRecipes = () => (dispatch) => {
  const [recipes, setRecipes] = useState({});
  
  useEffect(() => axios.get(recipesCategory)
    .then((res) => res.json())
    .then(res => setRecipes({recipes: res}))
    .catch(() => set)
    );
};

export default fetchRecipes;
