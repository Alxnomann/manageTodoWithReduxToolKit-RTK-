import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'

function AddTodo() {
      const  [input, setInput] = useState('')
      const dispatch  = useDispatch()
      const handlesubmit=(e)=>{
          e.preventDefault()
          if(input.trim()){
            dispatch(addTodo(input))
             setInput("") 
       }
       
      }
return (
		<form onSubmit={handlesubmit} className="flex gap-3 mt-8 mb-8">
		  <div className="relative flex-grow">
			<input
			  type="text"
			  className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-3 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-lg"
			  placeholder="What needs to be done?"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                  
			
			/>
			{input && (
			  <button
				type="button"
				onClick={() => setInput('')}
				className="absolute right-14 top-3 text-gray-400 hover:text-gray-200"
			  >

                    </button>
                  )}
		  </div>
		  <button
			type="submit"
			disabled={!input.trim()}
			className={`flex items-center gap-1 text-white bg-indigo-600 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg shadow-lg transition-colors ${!input.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <PlusCircleIcon className="h-5 w-5" />
			Add
		  </button>
		</form>
  )
}

export default AddTodo