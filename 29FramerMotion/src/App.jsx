import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import First from "./components/First"
import Second from "./components/Second"
import ScrollBar from "./components/ScrollBar"

const App = () => {
  const router = createBrowserRouter([
        {
          path:'/',
          element:
          <div>
            <ScrollBar/>
            <Navbar/>
            <Home/>
          </div>
        },
          {
          path:'/first',
          element:
          <div>
            <ScrollBar/>
            <Navbar/>
            <First/>
          </div>
        },  {
          path:'/second',
          element:
          <div>
            <ScrollBar/>
            <Navbar/>
            <Second/>
          </div>
        },
  ])
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App