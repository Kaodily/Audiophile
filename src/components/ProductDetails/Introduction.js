import { useContext } from "react"
import { ProductContext } from "./Product"

const Introduction = () => {
  const {category} = useContext(ProductContext)
    return (
        <div className="h-[70px] sm:h-[90px] sm:py-6 bg-black text-white text-center py-5">
       <h2 className="text-[20px] sm:text-[24px] uppercase" >{category}</h2>
        </div>
    )
}
export default Introduction