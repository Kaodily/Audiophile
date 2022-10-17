import {Link} from 'react-router-dom'
const Goback = ({product,features}) => {
    return (
        <div className="px-12 font-medium text-[14px] leading-6 opacity-50 py-4">
            <Link to={`/${product}`}>
            <p>Go Back</p>
            </Link>
        </div>
    )
}
export default Goback