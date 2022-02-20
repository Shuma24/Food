import { useContext } from 'react';
import { FoodContext } from '../context';
import { MealsItem } from './MealsItem'

function MealsList () {

   const { meals = [] } = useContext(FoodContext)

   if(!meals.length){
      return <h3>Error nothing loading</h3>
   }

   return (
      <div className='list'>
         {meals.map(item => <MealsItem key={item.idMeal} {...item}/>)}
      </div>
   )
}

export { MealsList }