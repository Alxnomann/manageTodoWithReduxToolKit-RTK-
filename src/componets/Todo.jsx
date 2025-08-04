import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateTodo,deleteTodo } from '../feature/todo/todoSlice'
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/outline'



function Todo() {
      const todos =  useSelector((state)=>state.todos)
      const dispatch = useDispatch()
  return (
        <div className="max-w-2xl mx-auto">
      {todos.length > 0 ? (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center bg-gray-700 px-5 py-4 rounded-lg shadow hover:bg-gray-750 transition-colors group"
              key={todo.id}
            >
              <div className="text-white text-lg truncate pr-2">{todo.text}</div>
              <div className="flex gap-2">
                <button
                onClick={()=>{
                  const newText = prompt("Edit task",todo.text)
                  if(newText && newText.trim()){
                        dispatch(updateTodo({id:todo.id,newText}))
                  }
                }}
                  // onClick={() => {
                  //   const newText = prompt("Edit task", todo.text)
                  //   if (newText && newText.trim()) {
                  //     dispatch(updateTodo({ id: todo.id, newText }))
                  //   }
                  // }}
                  className="p-2 text-gray-400 hover:text-indigo-300 hover:bg-gray-700 rounded-full transition-colors"
                  title="Edit"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                 onClick={()=>dispatch(deleteTodo(todo.id))}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-full transition-colors"
                  title="Delete"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-10">
          <div className="text-gray-400 text-lg">No tasks yet</div>
          <div className="text-gray-500 mt-2">Add a task above to get started</div>
        </div>
      )}
    </div>
      
  )
}

export default Todo