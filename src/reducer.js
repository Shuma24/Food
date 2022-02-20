export function reducer (state, {type, payload}) {

   switch (type) {
     
      case 'SET_FILTERED_FOODS':
         return {
            ...state,
            filteredFoods: payload || [],
            loading: false,
         }

      case 'SET_FOODS':
         return {
            ...state,
            foods: payload || [],
            loading: false,
         }

      case 'SET_MEALS':
         return {
            ...state,
            meals: payload || [],
            loading: false,
         }

      case 'SET_RECIPE':
         return {
            ...state,
            recipe: payload || {},
            loading: false,
         }
      
         
      default: 
         return state    
   }

}
