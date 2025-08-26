import React from 'react'
import Login from './components/Login'
import User from './components/User'

const App = () => {
  return (
    <div className='h-screen bg-gray-800 flex justify-center items-center flex-col gap-5'>
      <Login/>
      <User/>
    </div>
  )
}

export default App