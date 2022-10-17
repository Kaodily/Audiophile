import { useContext, useState } from "react"
import { DataContext } from "./Features"

const Details = () => {
    const { data } = useContext(DataContext)
    const [count, setCount] = useState(0)
    const increaseHandleClick = () => {
        setCount(prev => prev + 1)
    }
    const decreaseHandleClick = () => {
       count <= 0 ? setCount(0) :  setCount(prev => prev - 1)
    }
    return (
        <div>
            {data.map(product => {
                return (
                    <div key={product.id}>
                    <div  className="mx-[20px] rounded-md px-8 py-3 text-black ">
                    <img src={product.image} alt="product.name" />
                        </div>
                        <div className="text-left">
                        <h2 className="font-bold text-[20px] w-[180px] ml-9 py-4  tracking-widest uppercase">{product.name}</h2>
                       <p className="px-9 leading-6 font-medium text-[14px] opacity-50">
                     {product.details}
                      </p>
                            <p className="text-[12px] font-bold py-4 px-9"> $ {product.price}</p>
                            <div className="flex pl-9">
                                <button className="w-[130px] h-[40px] font-medium flex justify-around py-2 bg-[#F1F1F1]"><span onClick={decreaseHandleClick} className="text-center">-</span>{count}<span onClick={increaseHandleClick}>+</span></button>
                                <button className="uppercase w-[150px] font-medium text-[14px] mx-2 text-white h-[40px] bg-[#D87D4A]">ADD TO CART</button>
                            </div>
                        <h4 className="font-bold text-[14px] w-[180px] ml-9 py-4  tracking-widest uppercase">Features</h4>
                        <p className="px-9 leading-6 font-medium text-[14px] opacity-50">{ product.features}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[14px] w-[180px] ml-9 py-4  tracking-widest uppercase">In the box</h4>
                            {product.content.map((content,index) => {
                                return (
                                    <div key={index} className='flex list-none pl-9' >
                                        <p className="font-medium text-[14px] text-[#D87D4A] ">{content.quantity}x</p>
                                        <li className="pl-3 lading-6 font-medium text-[14px] opacity-50">{content.item}</li>
                                   </div> 
                                )
                            })}
                        </div>
                        <div  className="mx-[20px] rounded-md px-8 py-20 text-black  ">
                            {product.images.map((image,index) => <img key= {index} className='rounded-md mb-4' src={image} alt={image} />)}
                        </div>
                    </div>
              )
          })}
        </div>
    )
}
export default Details