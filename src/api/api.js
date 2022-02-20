import { API_URL } from './config'

const getAllFoods = async () => {
   const response = await fetch(API_URL + 'categories.php')
   return await response.json()
}

const getFoodsForId = async (foodId) => {
   const response = await fetch(API_URL + 'lookup.php?i=' +foodId)
   return await response.json()
}


const getFoodsCategory = async (name) => {
   const response = await fetch(API_URL + 'filter.php?c=' + name)
   return await response.json()
}

export { getAllFoods, getFoodsForId, getFoodsCategory }
