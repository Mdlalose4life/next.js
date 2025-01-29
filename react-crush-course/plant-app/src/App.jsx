import './App.css'
import MainHeader from './components/layout/MAinheader'
import { Route, Routes } from 'react-router-dom'
import AllPlants from './pages/AllPlants'
import FavouritePlants from './pages/FavouritePlant'
import NewPlant from './pages/NewPlants'
import AboutPage from './pages/About'


function App() {

  return (
    <div>
      <MainHeader/>
        <Routes>
          <Route path='/' element={<AllPlants/>} />
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/FavoritePlant' element={<FavouritePlants/>}/>
          <Route path='/Newplant' element={<NewPlant/>}/>
        </Routes>
    </div>
  )
}

export default App
