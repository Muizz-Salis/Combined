
import { Navigate, Route, Routes } from 'react-router-dom'
import ListOfStudent from './components/ListOfStudent'
import Register from './components/Register'
import Nav from './components/Nav'
import Home from './components/Home'
import Signin from './components/Signin'
import Dashhboard from './components/Dashhboard'
import NotFound from './components/NotFound'
import ProductList from './components/ProductList'
import Products from './components/Products'
import ShowApi from './components/ShowApi'
import ListOfProducts from './components/ListOfProducts'
import Users from './components/Users'
import Mui from './components/Mui'
import Cards from './components/Cards'



const App = () => {

// let token = '12345';
let authToken = localStorage.getItem("token")
console.log(authToken);

  return (
   <>
<Routes>
   <Route path='/' element={<Nav/>}>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* <Route path="/users/showApi" element={<ShowApi/>}/> */}
      <Route path="/signin" element={<Signin/>}/>
      <Route path='/mui' element={<Mui />}/>
      <Route path='/cards'  element={<Cards/>}/>
   
   <Route path="/Products" element={<Products />}>
      <Route path="/Products/:product" element={<ListOfProducts/>}/>
   </Route>
   </Route>

   <Route path="/dashboard" element={authToken? <Dashhboard/>:<Navigate to ="/signin"/>}/>


      <Route path="*" element={<NotFound/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/user/:username" element={<ShowApi/>}/>

</Routes>


   </>
  )
}

export default App
