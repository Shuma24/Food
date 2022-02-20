import { useContext, useEffect } from 'react';
import { FoodContext } from '../context';
import { Preloader } from '../components/Preloader';
import { useParams, useNavigate } from 'react-router-dom';
import { getFoodsForId } from '../api/api';

function Recipe () {
   const { recipe, setRecipe, loading } = useContext(FoodContext)
   const { id } = useParams();
   const navigate = useNavigate();
   const back = () => navigate(-1);

   useEffect(() => {
      getFoodsForId(id).then((data) => {
         setRecipe(data.meals[0])
      })
      // eslint-disable-next-line
   }, [id])

   return (
      <>
      {
         loading ? <Preloader /> : 
         <div className='recipe'>
            <img className='recipe__img' src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1 className='recipe__title'>{recipe.strMeal}</h1>
            <h6 className='recipe__category'>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6 className='recipe__country'>Country: {recipe.strArea}</h6> : null}
            <p className='recipe__text'>{recipe.strInstructions}</p>
            <table className='centered'>
               <thead>
                  <tr>
                     <th>Ingredient</th>
                     <th>Measure</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     Object.keys(recipe).map(key => {
                        if(key.includes('Ingredient') && recipe[key]){
                           return (
                              <tr key={key}>
                                 <td>{recipe[key]}</td>
                                 <td>
                                    {
                                       recipe[`strMeasure${key.slice(13)}`]
                                    }
                                 </td>
                              </tr>
                           )
                        }
                        return null
                     })
                  }
               </tbody>
            </table>
            {recipe.strYoutube ? 
            <div className="row">
               <h5 className='recipe__videotitle'>Video Recipe</h5>
               <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
            </div> 
            : null}
         </div>
      }
      <button onClick={back} className='btn'>GO BACK</button>
      </>
   )
}

export { Recipe }