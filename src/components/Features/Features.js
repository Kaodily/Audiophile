import { createContext } from "react"
import { useParams } from "react-router-dom"
import datas  from '../../data.json'
import Audiogear from "../Audiogear"
import Footer from "../Footer"
import Details from "./Details"
import Goback from "./Goback"
 
export const DataContext = createContext()
const Features = ({handleClick,cart}) => {
    const { product, features } = useParams()
    const filtered = datas.filter(data => data.name === features)
    return (
        <DataContext.Provider value={{filtered,handleClick}} >
            <Goback product={product} features={features} />
            <Details /> 
            <Audiogear />
            <Footer /> 

      </DataContext.Provider>
    )
}
export default Features