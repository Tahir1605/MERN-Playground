import React from 'react'
import { useCounterContext } from './context/CounterContext'

const App = () => {
  const {counter,increment,decrement} = useCounterContext();
  return (
    <div className='h-screen bg-gray-800 flex justify-center items-center flex-col gap-5'>
       <h1 className='text-3xl text-white font-semibold'>Counter App Using Context Api</h1>
       <button className='text-white text-xl px-5 py-1.5 bg-green-500 rounded-lg cursor-pointer' onClick={increment} >Increment</button>
       <button className='text-white text-xl px-5 py-1.5 bg-green-500 rounded-lg cursor-pointer' onClick={decrement}>Decrement</button>
       <h2 className='text-2xl text-white font-semibold'>Counter Value : {counter} </h2>
    </div>
  )
}

export default App