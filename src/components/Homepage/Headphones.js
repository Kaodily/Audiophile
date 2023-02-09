import '../../index.css';
import { Link } from 'react-router-dom';
const Headphones = () => {
    return (
        <article className="article h-[580px] sm:h-[700px] text-center lg:text-left py-[180px] text-white"  >
           <div className="lg:w-[40%] lg:pl-[10%]">
           <p className='text-[14px] tracking-widest  opacity-50'>NEW PRODUCT</p>
            <h1 className='uppercase text-[24px] sm:px-[190px] lg:max-w-3xl sm:text-[36px] lg:pl-[0] lg:pr-[0]  px-[80px] tracking-widest py-[20px]'>
                XX99 Mark II HeadphoneS</h1>
            <p className='px-[50px] text-[14px] sm:text-[16px] lg:max-w-3xl sm:px-[120px] lg:px-[0] opacity-50'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link to ={'/headphones/xx99-mark-two-headphones'}>
            <button className='uppercase w-[150px] sm:w-[180px]  font-medium text-[14px] sm:text-[16px] mt-[30px] h-[40px] sm:h-[60px] bg-[#D87D4A]'>See product</button>
            </Link>
           </div>
        </article>
    )
}
export default Headphones