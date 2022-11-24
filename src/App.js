import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Header from './Components/Home/Header/Header'
import Home from './Components/Home/Home'
import InventoryDetails from './Components/Home/InventoryDetails/InventoryDetails'
import Manage from './Components/Home/ManageInventory/Manage'
import Boots from './Components/Home/Products/Boots'
import Gloves from './Components/Home/Products/Gloves'
import Helmet from './Components/Home/Products/Helmet'
import Jacket from './Components/Home/Products/Jacket'
import Login from './Components/LogIn/Login'
import Signup from './Components/LogIn/Signup'
import Footer from './Components/Shared/Footer/Footer'
import RequireAuth from './RequireAuth'

function App () {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manage' element={
          <RequireAuth>
           <Manage></Manage>
          </RequireAuth>  
        }></Route>
        <Route path='/jacket' element={<Jacket></Jacket>}></Route>
        <Route path='/helmet' element={<Helmet></Helmet>}></Route>
        <Route path='/boots' element={<Boots></Boots>}></Route>
        <Route path='/gloves' element={<Gloves></Gloves>}></Route>
        <Route
          path='/inventory/:inventoryId'
          element={<InventoryDetails></InventoryDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
