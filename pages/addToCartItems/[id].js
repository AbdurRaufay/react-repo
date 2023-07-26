import {useEffect,useState} from 'react'
import { useCartItemsQuery } from '../../queries/generated'

const AddToCartItems = () => {
     const [userId, setUserId] = useState("");
    useEffect(() => {
        var localUserId = localStorage.getItem("userId");
        if (localUserId !== null || localUserId !== undefined) {
          setUserId(localUserId);
        }
      }, []);
          const {data,isLoading}=useCartItemsQuery({userId})
  return (
    <div>
    <h1 className='text-center  mt-20 mb-6 text-2xl font-bold'>Add To Cart Items</h1>
    <div className='flex justify-center items-center '>
    <div class="flex flex-wrap  justify-center items-center w-full gap-6">
    {data?.cartItems?.map((item, index) => (
      <div class="w-[350px] p-6 bg-white rounded-lg shadow-md" key={index}>
        <h2 class="text-2xl font-semibold mb-2">{item?.title}</h2>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xl font-semibold ">Total Price: $ <strong className='text-red-500'>{item?.price}</strong></span>
        </div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xl font-semibold">Quantity: {item?.quantity}</span>
        </div>
      </div>
    ))}
  </div>
  </div>
  </div>
  
  )
}

export default AddToCartItems