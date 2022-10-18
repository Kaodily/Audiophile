import { useParams } from 'react-router-dom'
import Introduction from "./Introduction"
import Productdetails from "./Productdetails"
import products from '../../data.json'
import { createContext } from 'react'
import Products from '../Products'
import Audiogear from '../Audiogear'
import Footer from '../Footer'

 export const DataContext = createContext()
    const Product = () => {
    const { product } = useParams()
      const datas = products.filter(data => data.category === product)
      console.log(datas)
    return (
        <DataContext.Provider value ={{datas,product}} >
          <Introduction  />
          <Productdetails /> 
            <Products /> 
            <Audiogear />
            <Footer /> 
        </DataContext.Provider>
    )
}
export default Product