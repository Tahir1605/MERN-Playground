import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from "./components/Products"
import Cart from "./components/Cart"

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: 
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <Products/>
        <Footer/>
      </div>
    },
    {
      path:'/cart',
      element:
      <div className="flex flex-col min-h-screen">
         <Navbar/>
         <Cart/>
         <Footer/>
      </div>
    }
  ])
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App