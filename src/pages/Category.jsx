import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { FoodContext } from '../context';
import { getFoodsCategory } from '../api/api'
import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';



function Category () {
   const {loading, setMeals} = useContext(FoodContext);
   const { name } = useParams();
   const navigate = useNavigate()

   const back = () => navigate(-1);

   useEffect(() => {
      getFoodsCategory(name).then(data => {
         setMeals(data.meals)
      })
      // eslint-disable-next-line
   }, [name])

   return (
      <>
      <button onClick={back} className='btn'>GO BACK</button>
      {loading ? <Preloader /> : <MealsList />}
      </>
   )
}

export { Category }