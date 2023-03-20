import { datas } from '../../Data'
import {Link} from 'react-router-dom'
const Products = () => {
    return (
        <div className='bg-white relative sm:flex md:justify-center sm:mt-16 mx-[30px] '>
            {datas.map(data => {
                return (
                    <div key={data.id} className='w-[100%] lg:w-[26%] lg:h-[240px] sm:mr-3 lg:mx-5 relative h-[150px] bg-[#F1F1F1] rounded-md my-[70px] '>
                        <img src={data.image} alt={data.product} className='w-[130px] lg:w-[160px] absolute top-[-30px] left-[50%] translate-x-[-50%] x ' /> 
                        <h3 className='uppercase text-center text-[14px] sm:text-[20px] font-bold pt-[80px] lg:pt-[120px]'>{data.product}</h3>    
                            <Link to={`/${data.product}`}>
                        <div onClick={window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}  className='flex justify-center mt-[10px]'>
                            <p className='text-[12px] sm:text-[14px] pr-1 opacity-50' >SHOP </p>
                        <div>
                        <img className='w-[7px] mt-1' src='../assets/shared/desktop/icon-arrow-right.svg' alt='arrow' /> 
                            
                        </div>
                            </div>
                            </Link>
                    </div>
)          })}
        </div>
    )
}
export default Products