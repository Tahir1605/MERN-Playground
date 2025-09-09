import { useEffect, useState } from "react"
import Timer from "../components/Timer";

const App = () => {
  const [counter, setCounter] = useState(0);

  // combination 1 -> it is run on every render

  // useEffect(() => {
  //   alert("It will run every render")
  // })

  // combination 2 -> it is run on first render

  // useEffect(() => {
  //    alert('i will run on first render')
  // },[])

  // combination 3 -> it is run only when counter updated


  // useEffect(()=>{
  //   alert('i will run when count will be updated')

  // },[counter])

  // here can be multiple dependencies like -> [counter,count,....etc]


  // combination 5 -> let's write cleanup code

  // useEffect(()=>{
  //   alert('i will run when count will be updated')

  //   return () => {
  //     alert('count is unmounted')
  //   }

  // },[counter])



  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }


  return (
    <div className="flex flex-col gap-10 justify-center items-center bg-gray-900 h-screen">
      <h1 className="text-2xl text-white font-semibold">Counter App For useffect Example</h1>
      <button className="bg-green-500 px-5 py-2 rounded-md text-white font-semibold cursor-pointer" onClick={increment}>Increment</button>
      <button className="bg-green-500 px-5 py-2 rounded-md text-white font-semibold cursor-pointer" onClick={decrement}>Decrement</button>
      <p className="text-xl text-white font-semibold">Counter : {counter}</p>
      <Timer/>
    </div>
  )
}
export default App