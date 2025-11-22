import { ToastContainer } from "react-toastify";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Student from "./components/Student";
const App = () => {
  const route = createBrowserRouter([
     {
       path:'/',
       element:
       <div>
         <Navbar/>
         <Home/>
       </div>
     },
     {
       path:'/students',
       element:
       <div>
         <Navbar/>
         <Student/>
       </div>
     },
  ]);
  return (
    <div>
      <RouterProvider router={route}/>
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
};

export default App;
