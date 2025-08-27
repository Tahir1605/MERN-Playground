import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action) => {
            if(state.value > 19)
            {
                state.value = 20;
            }
            else
            {
                state.value+=1;
            }
        },
        decrement:(state,action) => {
            if(state.value < 2)
            {
                state.value = 1;
            }
            else
            {
                state.value-=1;
            }
        },
        reset:(state,action) => {
            state.value = 0;
        }
    }
})

export const {increment , decrement , reset} = counterSlice.actions
export default counterSlice.reducer