import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {FiShoppingCart} from "react-icons/fi"
import { useCartItemsQuery } from "../queries/generated";
const Navbar = () => {
 const [userId,setUserId]=useState("")
  useEffect(() => {
    var localUserId = localStorage.getItem("userId");
    if (localUserId !== null || localUserId !== undefined) {
      setUserId(localUserId);
    }
  }, []);
  const router = useRouter();
  const handleSubmitSeller = (e) => {
    e.preventDefault();
    router.push(`/registration/$[id]`);
  };
  const handleSubmitBuyer=(e)=>{
    e.preventDefault()
    router.push(`/registration/$[id]`);
  }
  const handleRoute=()=>{
    router.push("/AddTodo/$[AddTodo]")
  }
  const {data,isLoading}=useCartItemsQuery({userId})
const handleCartItems=()=>{
  router.push(`/addToCartItems/$[id]`)
}
  return (
    <nav class="bg-gray-800 w-full h-[80px]">
      <div class="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <ul class="flex w-full justify-between items-center">
              <li>
                  <button
                    onClick={handleSubmitSeller}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Sellers
                  </button>
              </li>
              <li>
                <button
                    onClick={handleSubmitBuyer}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Buyers
                  </button>
              </li>
              <li>
    
                <button
                    onClick={handleRoute}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Add ToDo
                  </button>
              </li>
              <li>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                   <p className="flex" onClick={handleCartItems}>
                  <FiShoppingCart /><strong className="relative -top-3 text-red-700">{data?.cartItems?.length}</strong>
                   </p>
                  </button>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
