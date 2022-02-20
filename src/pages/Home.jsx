import { useContext, useEffect } from 'react';
import { FoodContext } from '../context';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList'
import { getAllFoods } from '../api/api'
import { Search } from '../components/Search'
import { useSearchParams } from 'react-router-dom'

function Home () {
   
   const {loading, setFoods, setFilteredFoods, foods} = useContext(FoodContext);
   const [searchParams, setSearchParams] = useSearchParams();
   const foodQuery = searchParams.get('food') || ''
   

   const handleSearch = (str) => {
      setFilteredFoods(
         foods.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
      )
   }

   useEffect(() => {
      getAllFoods().then(data => {
         setFoods(data.categories)
         setFilteredFoods(data.categories)
      })
      // eslint-disable-next-line
   }, [])
    
   return (
      <div className="home">
         <Search cb={handleSearch} setSearchParams = {setSearchParams} foodQuery={foodQuery}/>
         {loading ? <Preloader /> : <CategoryList foodQuery={foodQuery}/>}
      </div>
   )
}

export { Home }