import { createContext, useReducer } from 'react';
import { reducer } from './reducer';



export const FoodContext = createContext()

const initialState = {
   foods: [],
   loading: true,
   meals: [],
   recipe: {},
   filteredFoods: [],
}

export const ContextProvider = ({children}) => {

   const [value, dispatch] = useReducer(reducer, initialState);
   
   value.setFoods = (data) => {
      dispatch({type: 'SET_FOODS', payload: data})
   }

   value.setMeals = (data) => {
      dispatch({type: 'SET_MEALS', payload: data})
   }

   value.setRecipe = (data) => {
      dispatch({type: 'SET_RECIPE', payload: data})
   }

   value.setFilteredFoods = (data) => {
      dispatch({type: 'SET_FILTERED_FOODS', payload: data})
   }
   
   return (
      <FoodContext.Provider value={value}>
         {children}
      </FoodContext.Provider>
   )
}
