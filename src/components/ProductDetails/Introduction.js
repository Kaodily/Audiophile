import { useContext } from "react"
import { DataContext } from "./Product"

const Introduction = () => {
  const { product} = useContext(DataContext)
    return (
        <div className="h-[70px] bg-black text-white text-center py-5">
       <h2 className="text-[20px] uppercase" >{product}</h2>
        </div>
    )
}
export default Introduction