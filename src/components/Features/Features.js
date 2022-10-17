import { useParams } from "react-router-dom"
import { datas } from '../../Data'
import { DataContext } from "../ProductDetails/Product"

const Features = () => {
    const {features} = useParams()
    const data = datas.map(data => data.type)
   
    console.log(data)
    return (
        <section>
<h1>hello</h1>
        </section>
    )
}
export default Features