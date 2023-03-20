import { useNavigate} from 'react-router-dom'
const Goback = () => {
const navigate = useNavigate()

const handleClick = () => {
    navigate(-1)
}
    return (
        <div onClick={handleClick} className="px-8 font-medium text-[14px] sm:text-[18px] lg:mx-[100px] leading-6 opacity-50 pt-6 pb-3">
            <p>Go Back</p>
        </div>
    )
}
export default Goback