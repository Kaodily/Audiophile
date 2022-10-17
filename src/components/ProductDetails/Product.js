import { useParams } from 'react-router-dom'
import Introduction from "./Introduction"
import Productdetails from "./Productdetails"
import {datas} from '../../Data'
import { createContext } from 'react'
import Products from '../Products'
import Audiogear from '../Audiogear'
import Footer from '../Footer'

 export const DataContext = createContext()
   const Product = () => {
    const {product} = useParams()
    const data = datas.filter(data => data.product === product)
    return (
        <DataContext.Provider value ={{data}}>
         <Introduction  />
            <Productdetails />
            <Products />
            <Audiogear />
            <Footer />
        </DataContext.Provider>
    )
}
export default Product