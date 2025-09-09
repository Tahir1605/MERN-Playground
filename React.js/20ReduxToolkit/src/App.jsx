import Login from "./components/Login"
import Profile from "./components/Profile"

const App = () => {
  return(
    <div className="flex flex-col gap-5 justify-center items-center h-screen bg-gray-900">
       <Login/>
       <Profile/>
    </div>
  )
}

export default App