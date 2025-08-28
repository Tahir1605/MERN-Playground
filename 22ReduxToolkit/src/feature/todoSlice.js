import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo:[]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
          addTodo:(state , action) => {
                 state.todo.push({
                    id:Date.now(),
                    text:action.payload,
                    isEditable:false,
                    isCompleted:false
                 })
          },
          deleteTodo:(state , action) => {
            state.todo = state.todo.filter((item) => item.id !== action.payload)
          },
          toggleIsCompleted:(state , action) => {
            const todo = state.todo.find((item) => item.id === action.payload)
            if(todo)
            {
              todo.isCompleted = !todo.isCompleted;
            }
          },
          toggleIsEditable:(state , action) => {
            const todo = state.todo.find((item) => item.id === action.payload)
            if(todo){
              todo.isEditable = !todo.isEditable;
            }
          },
          updateTodoText:(state , action) => {
            const {id , newText} = action.payload
            const todo = state.todo.find((item) => item.id === id)
            if(todo)
            {
               todo.text = newText,
               todo.isEditable = false
            }
          }
    }
})

export const { addTodo , deleteTodo , toggleIsCompleted , toggleIsEditable , updateTodoText} = todoSlice.actions
export default todoSlice.reducer

