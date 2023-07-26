// import { useRouter } from "next/router";

// export default function Card({title,description,price}) {
//   //  const router=useRouter()
//   // const handleDetails=()=>{
//   //  router.push(`/cardDetail/${itemId}`)
//   // }
//   return (
//     <div class="max-w-sm rounded mt-4  h-52  shadow-sm shadow-cyan-500/50 w-[250px] ">
//       <div className="w-[95%] px-6">
//       <p className="font-bold text-xl mb-2 mt-2 text-indigo-600">Title: {title} </p>
//       <p class="text-gray-700 text-base">Rs. {price}</p>
//       <p class="text-gray-700 text-lg w-[220px] h-[30px] mt-3 font-semibold overflow-hidden">Description: {description}</p>
//       <div className="mt-10 px-4">
//       <button  class="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Details</button>
//   </div>
//   </div>
// </div>

//   );
// }


// components/Card.js
import { useRouter } from "next/router";

const Card = ({ title, description, price, itemId }) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/cardDetail/${itemId}`);
  };
  return (
    <div className="max-w-sm rounded mt-4 h-52 shadow-sm shadow-cyan-500/50 w-[250px]">
      <div className="w-[95%] px-6">
        <p className="font-bold text-xl mb-2 mt-2 text-indigo-600">Title: {title} </p>
        <p className="text-gray-700 text-base">Rs. {price}</p>
        <p className="text-gray-700 text-lg w-[220px] h-[30px] mt-3 font-semibold overflow-hidden">
          Description: {description}
        </p>
        <div className="mt-10 px-4">
          <button
            onClick={handleDetails}
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
