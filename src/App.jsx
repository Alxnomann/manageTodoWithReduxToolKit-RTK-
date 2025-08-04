import React from 'react'
import AddTodo from './componets/AddTodo'
import Todo from './componets/Todo'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-10 pb-2">
          Manage Todo
        </h2>
        <AddTodo/>
        <Todo/>
        </div>
    </div>
  )
}

export default App