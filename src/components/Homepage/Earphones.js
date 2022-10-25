import {Link} from 'react-router-dom'
export const Earphones = () => {
    return (
        <div className="earphones h-[200px] sm:col-span-2 lg:ml-[130px] mt-6 mx-[30px] sm:mx-[0] sm:mr-[10px] sm:ml-[30px] pt-24 px-9 rounded-md text-black  ">
       </div>
    )
}
export const EarphonesInformation = () => {
    return (
        <div className="h-[200px] mt-6 mx-[30px] rounded-md px-8 sm:col-span-2 lg:mr-[130px] sm:mx-[0] sm:ml-[10px] sm:mr-[30px] sm:py-9  py-12 text-black bg-[#F1F1F1]  ">
            <h3 className='font-bold text-[20px] tracking-widest'>YX1 EARPHONES</h3>
         <Link to ={'/earphones/yx1-earphones'}>
                <button className='uppercase w-[130px] sm:w-[180px] text-[12px] sm:text-[14px] mt-12 h-[40px] sm:h-[60px] border-2 border-black'>See product</button>
                </Link>
       </div>
    )
}