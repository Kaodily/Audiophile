import {Fragment} from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/ProductDetails/Product';
import Home from './components/Homepage/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Features from './components/Features/Features';


function App() {
  return (
    <BrowserRouter>
     <Fragment>
      <Header />
        <Routes>
          <Route path='/' 
            element={<Home />} />
            <Route path='/:product' 
          element={<Product />} />
            <Route path='/:product/:features' 
          element={<Features />} />
     </Routes>
      </Fragment>
      </BrowserRouter>
  );
}

export default App;
