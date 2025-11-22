import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/StudentContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <ContextProvider>
    <App />
  </ContextProvider>
    
)
