
import { Link } from 'react-router-dom'
import { products } from '../constants/models/product'



const FeatureCard = ({icon,id,description}:products) => {
  return (
    <div className='w-[200px] border-solid border-gray-950 bg-white'>
        <div className="p-1">
            <img src={icon} style={{height:"300px" ,width:"200px"}} alt="" />
            <br />
            <p className='font-poppins flex justify-center text-gray-700 font-semibold'>{description}</p>
            <div className="mt-1 flex justify-center items-center">
            <Link to="/shop">
            <button className="bg-primary text-white text font-medium p-2 rounded-xl">
               VIEW MORE
              </button>
              </Link>
            </div>
        </div>

    </div>
  )
}

export default FeatureCard