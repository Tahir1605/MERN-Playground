import { useRef } from "react";

function App() {
  // const username = document.getElementById('username');
  // const password = document.getElementById('password');

  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(username.current.value , password.current.value);
    
    
  }
  return(
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 p-5 rounded-md shadow bg-gray-50">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <input type="text" ref={username}
        className="outline-none border-3 rounded-md px-4 py-1.5 font-semibold border-blue-500" 
        />
        <input type="password"  ref={password}
        className="outline-none border-3 rounded-md px-4 py-1.5 font-semibold border-blue-500" 
        />
        <button
        className="px-4 py-1.5 rounded-md bg-green-400 font-bold cursor-pointer"
        >Submit</button>
      </form>
    </div>
  )

}

export default App