import React, { useState } from 'react'
import { products } from '../constants/models/product'
import { useAppDispatch } from '../store/store';
import { addItem } from '../store/cartSlice';


const ProductCard = ({icon,quantity,price,description,id}:products) => {
  const dispatch = useAppDispatch()
    const [count, setcount] = useState<number>(1);
    const increaseCount=()=>{setcount(count =>count+1)}
    const decreaseCount=()=>{setcount(count =>count-1)}

    const addItemstoCart = ()=>{
      
      const payload={icon,quantity:count,description,price,id}
      dispatch(addItem(payload))

    }
  return (
    <div className='w-[200px] border-solid border-gray-950 bg-white'>
    <div className="p-1">
        <img src={icon} style={{height:"300px" ,width:"200px"}} alt="" />
        <br />
        <p className='font-poppins flex justify-center text-gray-700 font-semibold'>{description}</p>
        <div className="mt-1">
            <div className="flex flex-wrap justify-center items-center">
            <button  disabled={count===0}  className= {` text-white text font-medium w-[40%] rounded-xl ${count === 0 ?'bg-gray-500':'bg-primary'}`}  onClick={decreaseCount}>-</button><span className='mx-2 text-2xl text-gray-700'>{count}</span><button className='bg-primary text-white text font-medium w-[40%] rounded-xl' onClick={increaseCount}>+</button> 
            </div>
        </div>
        <div className="mt-1 flex flex-row justify-center items-center">
        <button className="bg-primary text-white text font-medium  w-full rounded-xl" onClick={addItemstoCart}>
               ADD TO CART
              </button>
        </div>
    </div>

</div>
  )
}

export default ProductCard