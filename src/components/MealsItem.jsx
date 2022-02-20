import { Link } from 'react-router-dom'

function MealsItem (props) {

   const {
      strMeal,
      strMealThumb,
      idMeal,
   } = props;

   return (
      <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
          <span className="card-title category-title">{strMeal}</span>
        </div>
        <div className="card-action">
          <Link to={`/Recipe/${idMeal}`}>WATCH RECIPE</Link>
        </div>
    </div>
   )
}


export { MealsItem }