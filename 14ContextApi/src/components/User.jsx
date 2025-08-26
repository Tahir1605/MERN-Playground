import React from 'react'
import { useUserContext } from '../context/UserContext'

const User = () => {
    const { user } = useUserContext();
    if (!user) {
        return (
            <h1 className='text-white text-2xl font-semibold'>Please Login</h1>
        )
    }
    else {
        return (
            <div className='flex justify-center items-center flex-col gap-3'> 
                <h1 className='text-3xl text-white font-semibold'>User details</h1>
                <h2 className='text-2xl text-white font-semibold'>Welcome {user.name}</h2>
                <h2 className='text-2xl text-white font-semibold'>Your Password : {user.password}</h2>
            </div>
        )
    }
}

export default User