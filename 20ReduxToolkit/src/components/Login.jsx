import { useState } from "react"
import { setUser } from "../feature/userSlice";
import {useDispatch} from 'react-redux'
const Login = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser({name , pass}))
    }
    return (
        <div className="px-10 py-5 rounded-md bg-blue-200">
            <form className="flex flex-col gap-4">

                <h1 className="text-3xl my-3 text-center text-gray-900 font-bold">Login</h1>

                <input type="text" placeholder="Enter Username" className="outline-none border-3 border-blue-500 rounded-md px-4 py-1.5
                font-semibold text-gray-950" value={name} onChange={(e) => setName(e.target.value)}/>

                <input type="text" placeholder="Enter Password" className="outline-none border-3 border-blue-500 rounded-md px-4 py-1.5
                font-semibold text-gray-950" value={pass} onChange={(e) => setPass(e.target.value) }/>

                <button className="px-4 py-1.5 rounded-md cursor-pointer bg-amber-500 text-gray-900 font-semibold" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login