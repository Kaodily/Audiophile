import { useParams } from 'react-router-dom'
import Introduction from "./Introduction"
import Productdetails from "./Productdetails"
import data from '../../data.json'
import { createContext } from 'react'
import Products from '.././Utiliies/Products'
import Audiogear from '.././Utiliies/Audiogear'
import Footer from '.././Utiliies/Footer'

 export const DataContext = createContext()
    const Product = () => {
      const {category} = useParams()
      const datas = data.filter(data => data.category ===  category)
    return (
        <DataContext.Provider value ={{datas,category}} >
          <Introduction  />
          <Productdetails /> 
            <Products /> 
            <Audiogear />
            <Footer /> 
        </DataContext.Provider>
    )
}
export default Product