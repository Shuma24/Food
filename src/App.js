import { Route, Routes} from 'react-router-dom';
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Notfound } from './pages/Notfound'
import { ContextProvider } from './context'
import { Category } from './pages/Category'
import { Recipe } from './pages/Recipe'

function App() {
  return (
   <ContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='About' element={<About />}/>
          <Route path='Contacts' element={<Contacts />}/>
          <Route path='Category/:name' element={<Category />}/>
          <Route path='Recipe/:id' element={<Recipe />}/>
          <Route path='*' element={<Notfound />}/>
        </Route>
      </Routes>
   </ContextProvider>
  );
}

export default App;
