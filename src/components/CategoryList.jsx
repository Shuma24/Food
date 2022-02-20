import { useContext } from 'react';
import { FoodContext } from '../context';
import { CategoryItem } from './CategoryItem'

function CategoryList ({foodQuery}) {
   const { filteredFoods = [] } = useContext(FoodContext)

   if(!filteredFoods.length){
      return <h3>Error nothing loading</h3>
   }

   return (
      <div className="list">
         {filteredFoods.filter(
            item => item.strCategory.toLowerCase().includes(foodQuery.toLowerCase())
         ).map(item => <CategoryItem key={item.idCategory} {...item}/>)}
      </div>
   )
}


export { CategoryList }