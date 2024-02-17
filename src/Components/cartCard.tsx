

const cartCard = ({icon,price,description,quantity}:{icon:string,price:string,description:string,quantity:number}) => {
  return (
    <div className='w-full p-2 flex flex-wrap object-contain'>
    <div style={{border:"1px solid"}} className=' w-full flex border-solid border-gray-600'>
     <div className="p-2 ">
        <img src={icon} style={{height:"100%",width:"50px"}} alt="" />
     </div>
     <div className="p-2 ml-2 flex flex-col">
    <p className='font-sans text-xl text-gray-800'>{description}</p>

    <p className='font-sans text-xl text-gray-500'>Price : {price}</p>
    <p className='font-sans text-xl text-gray-500'>Qunatity: {quantity}</p>
    
     </div>
    </div>
    </div>
  )
}

export default cartCard