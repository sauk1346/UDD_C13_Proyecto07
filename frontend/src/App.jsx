import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

function App() {
  return (
    <div classNAme="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/smartphone' element={<ShopCategory category="smartphone" />}/>
          <Route path='/laptop' element={<ShopCategory category="laptop" />}/>
          <Route path='/tablet' element={<ShopCategory category="tablet" />}/>
          <Route path='/smartwatch' element={<ShopCategory category="smartwatch" />}/>
          <Route path='/product:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>


        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App
