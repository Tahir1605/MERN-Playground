import React from 'react'
import { useUserContext } from '../context/UserContext'
import { useState } from 'react';

const Login = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useUserContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && password)
        {
            setUser({name,password});
        }
       
    }
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-3xl text-white font-semibold'>Login Using Context Api</h1>
        <input type="text" className='text-xl font-semibold text-white px-5 py-1.5 outline-none ring-2 rounded-lg border-blue-500' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="password" className='text-xl font-semibold text-white px-5 py-1.5 outline-none ring-2 rounded-lg border-blue-500' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='bg-green-500 px-5 py-2 rounded-lg text-xl font-semibold text-white cursor-pointer' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login