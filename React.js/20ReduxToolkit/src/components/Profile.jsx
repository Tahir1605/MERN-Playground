import { unsetUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const handleLogout = () => {
          dispatch(unsetUser())
    }
    if(user === null){
         return(
        
           <h1 className="text-2xl text-white text-center">
             Create Account Please
           </h1>
        
      )
    }
    return(
        <div className="flex flex-col gap-4 text-gray-100">
           <h1 className="text-center text-2xl">Welcome {user.name} </h1>
           <h1 className="text-center text-2xl">Your password is {user.pass} </h1>
           <button onClick={handleLogout} className="px-4 py-1.5 rounded-md text-white bg-amber-500 text-xl cursor-pointer">Logout</button>
        </div>
    )
}

export default Profile