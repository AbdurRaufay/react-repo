import React from 'react'
import { useTodosQuery } from '../queries/generated'

const TodoTable = () => {
    const {data,isLoading}=useTodosQuery()
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default TodoTable