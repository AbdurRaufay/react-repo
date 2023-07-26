import React from 'react'
import { useRouter } from 'next/router';

const AddSellers = () => {
  
  return (
    <div>
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add Sellers
      </button>
    </div>
  )
}

export default AddSellers