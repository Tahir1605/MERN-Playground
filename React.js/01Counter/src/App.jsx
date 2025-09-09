import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    if (counter > 19) {
      setCounter(20)
    }
    else {
      setCounter(counter + 1)
    }
  }
  const decrement = () => {
    if (counter < 2) {
      setCounter(1)
    }
    else {
      setCounter(counter - 1)
    }
  }
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-4xl font-bold">Counter App</h1>
        <h2 className="text-white text-3xl font-bold">Counter : {counter} </h2>
        <div className="flex flex-col gap-4">
          <button className="px-2 cursor-pointer py-1.5 rounded-md text-white text-xl font-bold bg-green-500 transition-all hover:bg-green-600" onClick={increment}>Increment</button>
          <button className="px-2 cursor-pointer py-1.5 rounded-md text-white text-xl font-bold bg-red-500 transition-all hover:bg-red-600" onClick={decrement}>Decrement</button>
        </div>
        <h2 className="text-white text-3xl font-bold">Counter : {counter} </h2>
      </div>
    </div>
  )
}

export default App