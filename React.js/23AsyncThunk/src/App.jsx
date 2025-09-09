import {useDispatch , useSelector} from 'react-redux';
import { fetchTodos } from './feature/todoSlice';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log(state);

  if(state.todo.isLoading)
  {
    return(
      <div className='flex justify-center py-5 h-screen bg-gray-900'>
           <h1 className='text-2xl text-white font-bold'>Loading...</h1>
      </div>
    )
  }
  
  return(
    <div className='flex justify-center py-5 h-screen bg-gray-900'>
      <div>
      <button className='px-4 py-1.5 rounded-md text-white bg-green-400 text-xl font-bold cursor-pointer'
       onClick={() => dispatch(fetchTodos())}
      >Get Todo</button>

      {
        state.todo.data && state.todo.data.slice(0,10).map((item) => (
          <li key={item.id} className='text-xl text-white font-semibold'>
             {item.title}
          </li>
        ))
      }
      </div>
    </div>
  )
}
export default App