import { datas } from '../Data'
import {Link} from 'react-router-dom'
import arrow from './../assets/shared/desktop/icon-arrow-right.svg'
const Products = () => {
    return (
        <div className='bg-white relative mx-[30px] '>
            {datas.map(data => {
                return (
                    <div key={data.id} className='w-[100%] relative h-[150px] bg-[#F1F1F1] rounded-md my-[70px] '>
                        <img src={data.image} alt={data.product} className='w-[130px]  absolute top-[-30px] left-[50%] translate-x-[-50%] mix-blend-multiply ' /> 
                        <h3 className='uppercase text-center text-[12px] font-bold pt-[80px]'>{data.product}</h3>    
                            <Link to={`/${data.product}`}>
                        <div className='flex justify-center mt-[10px]'>
                            <p className='text-[12px] pr-1 opacity-50' >SHOP </p>
                        <div>
                        <img className='w-[7px] mt-1' src={arrow} alt={arrow} /> 
                            
                    </div>
                            </div>
                            </Link>
                    </div>
)          })}
        </div>
    )
}
export default Products