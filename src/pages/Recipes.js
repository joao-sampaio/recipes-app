import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../contex/myContext';
import Header from '../components/Header';

// {
//   "strMeal": " Bubble & Squeak",
//   "strMealThumb": "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
//   "idMeal": "52885"
// }

const MAX_RECIPES = 12;

function Recipes() {
  const history = useHistory();
  const { data } = useContext(context);

  function getCards() {
    // console.log(data)
    const recipes = data.recipes.slice(0, MAX_RECIPES);
    // console.log(recipes.length)
    if (history.location.pathname === '/foods') {
      const temp = recipes.map((r, index) => (
        <div
          className="recipe-card"
          key={ r.strMeal }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            alt={ r.strMeal }
            className="recipe-img"
            data-testid={ `${index}-card-img` }
            src={ r.strMealThumb }
          />
          <h4 data-testid={ `${index}-card-name` }>{r.strMeal}</h4>
        </div>
      ));
      return temp;
    } if (history.location.pathname === '/drinks') {
      const temp = recipes.map((r, index) => (
        <div key={ r.strDrink } data-testid={ `${index}-recipe-card` }>
          <img
            alt={ r.strDrink }
            data-testid={ `${index}-card-img` }
            src={ r.strDrinkThumb }
          />
          <h4 data-testid={ `${index}-card-name` }>{r.strDrink}</h4>
        </div>
      ));
      return temp;
    }
  }

  // const [showRecipes] = useState(true);
  // const { data, setData } = useContext(context)

  return (
    <main>
      <Header />
      {getCards()}
    </main>
  );
}

export default Recipes;
