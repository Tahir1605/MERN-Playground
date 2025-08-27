import {useDispatch , useSelector} from 'react-redux';
import { increment , decrement , reset } from './features/counter/counterSlice';
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleIncrement = () => {
        dispatch(increment())
  }
  const handleDecrement = () => {
        dispatch(decrement())
  }
  const handleReset = () => {
    dispatch(reset())
  }
  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5 w-[30%]">
        <h1 className="text-3xl font-bold text-center text-white">Counter App using Redux toolkit</h1>
        <button className="text-xl text-white font-semibold px-4 py-1.5 rounded-md cursor-pointer ring-2 bg-green-500" onClick={handleIncrement}>Increment</button>
        <button className="text-xl text-white font-semibold px-4 py-1.5 rounded-md cursor-pointer ring-2 bg-red-500" onClick={handleDecrement}>Decrement</button>
        <button className="text-xl text-white font-semibold px-4 py-1.5 rounded-md cursor-pointer ring-2 bg-blue-500" onClick={handleReset}>Reset</button>
        <h2 className="text-3xl font-bold text-center text-white">Counter : {count}</h2>
      </div>
    </div>
  )
}
export default App