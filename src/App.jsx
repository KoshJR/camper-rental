
import Layout from './components/Layout/Layout'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import FavoritesPage from './pages/FavoritesPage'

export const App = () => {


  return (
    <Layout>
      <Routes>
        <Route path='camper-rental/' element={<HomePage />} />
        <Route path='camper-rental/catalog' element={<CatalogPage/> } />
        <Route path='camper-rental/favorites' element={<FavoritesPage/> } />
     </Routes>
    </Layout>
  )
}

export default App
