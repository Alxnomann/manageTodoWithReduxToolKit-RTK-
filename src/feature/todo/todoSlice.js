import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
      todos:[
            {      id:1,
                  text:"Learning a ReduxToolKit(RTK)"
                  
            },
              {      id:2,
                  text:"Learning a Reacr js"
                  
            },
              {      id:3,
                  text:"Learning a Web Devlopment"
                  
            }
      ]
}

export const todoSlice = createSlice({
      name:'todo',
      initialState,
      reducers:{
            addTodo:(state,action)=>{
              if(action.payload&&action.payload.trim()!==''){
                  const todo={
                        id:nanoid(),
                        //A payload is access able via the action object to paticular obj data
                        text:action.payload
                        
                   }
                    state.todos.push(todo);
                  
              }
              
            },
            deleteTodo:(state,action)=>{
                  state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
            },
            updateTodo:(state,action)=>{
                  const {id,newText}=action.payload;
                  state.todos=state.todos.map((todo)=>todo.id == id ? {...todo,text:newText}:todo)
            }
      }
})
export const {addTodo,updateTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer;