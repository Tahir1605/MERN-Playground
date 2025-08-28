import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { 
  addTodo,
  deleteTodo,
  toggleIsCompleted,
  toggleIsEditable ,
  updateTodoText
} from "./feature/todoSlice";
const App = () => {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editText , setEditText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text))
    }
    setText('')

  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }


  const handleCompleted = (id) => {
    dispatch(toggleIsCompleted(id))
  }

  const handleEdit = (id) => {
    dispatch(toggleIsEditable(id))
  }

  const handleUpdate = (id) => {
    dispatch(updateTodoText({id:id,newText:editText}))
  }

  useEffect(() => {
    console.log(todo);
  }, [todo])



  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div>
        <input type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-black border-2 outline-none px-4 py-1.5 rounded-l-md" /><button
            className="px-4 py-2 bg-green-600 text-white cursor-pointer rounded-r-md"
            onClick={handleSubmit}>Add</button>
      </div>
      <div>
        {todo.map((item) => (
          <div key={item.id}
            className="flex p-2 gap-3 items-center justify-around w-72"
          >
            <input type="checkbox"
              disabled={item.isEditable}
              checked={item.isCompleted}
              onChange={() => handleCompleted(item.id)}
            />
            {
              item.isEditable ?

                (
                  <input type="text" className="w-40 px-2 outline-none border-2 border-black rounded-md" value={editText} onChange={(e) => setEditText(e.target.value)} />
                )

                :

                (
                  <p className={`w-40 px-2 ${item.isCompleted ? 'bg-gray-400 line-through' : ''}`}>{item.text}</p>
                )
            }

            {
              item.isEditable ?

                (
                  <button className="cursor-pointer px-2 py-1 rounded-md bg-blue-600 text-white font-semibold "
                    onClick={() => handleUpdate(item.id)}
                  >Save</button>
                )

                :

                (
                  <button className={`px-2 py-1 rounded-md bg-green-600 text-white font-semibold ${item.isCompleted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={item.isCompleted}
                    onClick={() => {
                    setEditText(item.text); 
                    handleEdit(item.id)}}
                  >Edit</button>
                )
            }

            <button className="px-2 py-1 rounded-md bg-red-600 text-white font-semibold cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >Del</button>

          </div>
        ))}
      </div>
    </div>
  )
}
export default App