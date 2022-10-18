import {Link} from 'react-router-dom'
const SpeakerZX9 = () => {
    return (
        <div className="pattern h-[500px] bg-[#D87D4A] mx-[30px] py-8 rounded-md text-white text-center ">
            <img src='../assets/shared/desktop/image-category-thumbnail-speakers.png' className='w-[250px] mx-auto pt-3' alt="speakerzx9" />
            <h2 className='text-center text-[22px] mt-[-30px] font-bold tracking-widest px-[100px] '>ZX9 SPEAKER</h2>
            <p className='px-[20px] text-[14px] py-5 opacity-50'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to ={'/speakers/ZX9 Speaker'}>
            <button className='uppercase w-[150px] text-[12px] mt-3 h-[40px] bg-black'>See product</button>
            </Link>

        </div>
    )
}
export default SpeakerZX9