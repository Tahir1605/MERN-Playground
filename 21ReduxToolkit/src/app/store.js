import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../feature/ThemeSlice'
export const store = configureStore({
    reducer:{
        theme:themeReducer
    }
})