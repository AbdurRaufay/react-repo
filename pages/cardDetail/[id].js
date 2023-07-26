import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAddToCartMutation, useTodoQuery } from "@/queries/generated";

const CardDetail = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    var localUserId = localStorage.getItem("userId");
    if (localUserId !== null || localUserId !== undefined) {
      setUserId(localUserId);
    }
  }, []);

  const router = useRouter();
  const itemId = router.query.id;
  const { data, isLoading } = useTodoQuery({ todoId: itemId });
  const { mutateAsync } = useAddToCartMutation();
  const [quantity, setQuantity] = useState(1);

  const getPrice = () => {
    let price = data?.todo?.price || 0;
    if (quantity === 1) {
      return price;
    } 
    return price*quantity
  };

  const handleIncrement = () => {
      if (quantity < 20) {
        setQuantity((prevQuantity) => prevQuantity + 1);
      }
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCartItems = async () => {
 if(!userId){
  throw Error("Must be logged in before adding to cart")
 }
    try {
      const payload = {
        productId: itemId,
        quantity: quantity,
      };
       await mutateAsync(payload);
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };
  
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold mb-4 mt-10">Card Details</h1>
      <div className="w-[75%] rounded overflow-hidden shadow-lg mx-auto mt-40">
        <div className="px-6 py-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Title: {data?.todo?.title}
            </p>
            <p className="text-gray-600 text-lg mb-2 ">
              Price: ${getPrice()} 
            </p>
            <p className="text-gray-600 w-[90%] text-center">
              Description: {data?.todo?.description}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleDecrement}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            <span className="mx-4 text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
            <button
            disabled={isLoading}
              onClick={addToCartItems}
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;


