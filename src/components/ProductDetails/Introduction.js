import { useContext } from "react"
import { DataContext } from "./Product"

const Introduction = () => {
  const { data } = useContext(DataContext)
    return (
        <div className="h-[70px] bg-black text-white text-center py-5">
       {data.map(data => <h2 className="text-[20px] uppercase" key={data.id}>{data.product}</h2>)}
        </div>
    )
}
export default Introduction