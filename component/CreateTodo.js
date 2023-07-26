import { useRouter } from 'next/router'
import React from 'react'

const CreateTodo = () => {
  const router =useRouter()
  const handleRoute=()=>{
    router.push("/AddTodo/$[AddTodo]")
  }
  return (
    <div>
         <button onClick={handleRoute} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Todo
      </button>
    </div>
  )
}

export default CreateTodo