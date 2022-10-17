import { createContext } from "react"
import { useParams } from "react-router-dom"
import { datas } from '../../Data'
import Audiogear from "../Audiogear"
import Footer from "../Footer"
import Details from "./Details"
import Goback from "./Goback"
 
export const DataContext = createContext()
const Features = () => {
    const {product,features} = useParams()
    const filtered = datas.filter(data => data.product === product)
    const type = filtered.map(item => item.type)
    let item;
    for (let each of type) {
              item  = each
    }
    const data = item.filter(data => data.name.includes(features))
    return (
        <DataContext.Provider value={{data}}>
            <Goback product={product} features={features} />
            <Details />
            <Audiogear />
            <Footer />

      </DataContext.Provider>
    )
}
export default Features