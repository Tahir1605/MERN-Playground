import { useEffect, useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    if (getTodos !== null) {
      setTodos(getTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return

    const newTodo = {
      id: Date.now(),
      todoText: text,
      isCompleted: false,
      isEditable: false,
    }

    setTodos([...todos, newTodo])
    setText('');
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const handleCompleted = (id) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
  }

  const editTodo = (id) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, isEditable: !item.isEditable } : item))
  }

  const handleEditChange = (id, newText) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, todoText: newText } : item))
  }



  const handleCancelEdit = (id) => {
    setTodos(todos.map((item) => item.id === id ? {...item,isEditable:false}: item))
  }

  return (
    <div>
      <div className="m-10">
        <form onSubmit={handleSubmit}>
          <input type="text" className="border border-black outline-none px-2"
            value={text}
            onChange={(e) => { setText(e.target.value) }}
          />
          <button className="border border-black cursor-pointer">Submit</button>
        </form>
        <div>
          <ul>
            {todos.map((item) => (
              <li key={item.id} className="flex flex-row gap-5 ">
                <input type="checkbox"
                  disabled={item.isEditable}
                  checked={item.isCompleted}
                  onChange={() => { handleCompleted(item.id) }}
                />
                {item.isEditable ?
                  (<input type="text" value={item.todoText} onChange={(e) => handleEditChange(item.id, e.target.value)} />)
                  :
                  (<span className={`${item.isCompleted ? 'line-through bg-gray-300' : ''}`}>{item.todoText}</span>)
                }

                {item.isEditable ?
                  <button className="border border-black px-5 cursor-pointer" onClick={() => { editTodo(item.id) }}>Save</button> :
                  <button
                    disabled={item.isCompleted}
                    className="border border-black px-5 cursor-pointer" onClick={() => { editTodo(item.id) }} >Edit</button>
                }

                {
                  item.isEditable ? 
                   
                  <button className="border border-black px-5 cursor-pointer" onClick={() => { handleCancelEdit(item.id) }}>Cancel</button>
                 
                  :

                    <button className="border border-black px-5 cursor-pointer" onClick={() => { deleteTodo(item.id) }}>Del</button>
                }

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App