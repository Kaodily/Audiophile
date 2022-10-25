import {Link} from 'react-router-dom'
const Goback = ({category}) => {
    return (
        <div className="px-12 font-medium text-[14px] sm:text-[18px] lg:mx-[130px] leading-6 opacity-50 pt-6 pb-3">
            <Link to={`/${category}`}>
            <p>Go Back</p>
            </Link>
        </div>
    )
}
export default Goback