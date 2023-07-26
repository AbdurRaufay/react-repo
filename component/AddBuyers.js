import React from "react";
import { useRouter } from 'next/router';

const AddBuyers = () => {
  const router = useRouter();

  const handleSubmit=(e)=>{
    e.preventDefault()
    router.push(`/registration/$[id]`);
  }
  return (
    <div>
      <button onClick={handleSubmit}  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add Buyers
      </button>
    </div>
  );
};

export default AddBuyers;
