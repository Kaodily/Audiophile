import {createContext, Fragment, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/ProductDetails/Product';
import Home from './components/Homepage/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Features from './components/Features/Features';

export const CartContext = createContext()
function App() {
  // const [cart, setCart] = useState(null)
  const [isCart,setIsCart] = useState(false)
  const cartHandleClick = () => {
      setIsCart(prev =>!prev)
  }

  return (
    <CartContext.Provider value={{isCart,cartHandleClick}}>
       <BrowserRouter>
     <Fragment>
      <Header />
        <Routes>
          <Route path='/' 
            element={<Home />} />
            <Route path='/:product' 
          element={<Product />} />
            <Route path='/:product/:features' 
            element={<Features handleClick={cartHandleClick} cart={isCart} />} />
     </Routes>
      </Fragment>
      </BrowserRouter>
   </CartContext.Provider>
  );
}

export default App;
