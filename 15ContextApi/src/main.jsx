import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext';
createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App /> 
    </ThemeContextProvider>
);
