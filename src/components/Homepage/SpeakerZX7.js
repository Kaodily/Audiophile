import {Link} from 'react-router-dom'
const SpeakerZX7 = () => {
              return (
            <div className="speakerzx7 h-[250px] mt-6 mx-[30px] sm:col-span-4 pt-24 px-9 rounded-md text-black  ">
            <h3 className='font-bold text-[20px] tracking-widest'>ZX7 SPEAKER</h3>
                      <Link to ={'/speakers/zx7-speaker'}>
            <button className='uppercase w-[130px]  sm:w-[180px] sm:h-[60px] sm:text-[14px] text-[12px] mt-3 h-[40px] border-2 border-black'>See product</button>
                      </Link>
        </div>
    )
}
export default SpeakerZX7