import { useState } from 'react'

function Search ({cb, setSearchParams, foodQuery }) {

   const [value, setValue] = useState(foodQuery)

   const hadnleKey = (e) => {
      if(e.key === 'Enter'){
         handleSubmit()
      }
   }


   const handleSubmit = () => {
      cb(value)

      const query = value
      const params = {}
      if(query.length){
         params.food = query
      }
      setSearchParams(params)
   }

   return (
      <div className="row">
         <div className="input-field col s12">
            <input 
               type="search" 
               className="search" 
               id="search-field"
               placeholder="Search"
               onKeyDown={hadnleKey}
               onChange={(e) => setValue(e.target.value)}
               value={value}
            />
            <button 
               className="btn search-button"
               onClick={handleSubmit}
               >
                  Search
            </button>
         </div>
      </div>
   )
}

export { Search }