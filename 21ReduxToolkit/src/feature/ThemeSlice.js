import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem("theme") === 'true';

const initialState = {
    value:savedTheme
}

export const themeSlice = createSlice({
       name:'theme',
       initialState,
       reducers:{
        changeTheme : (state) => {
            state.value = !state.value;
            localStorage.setItem("theme",state.value);
        }
       }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer