import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        handleLogin(email, password)
    }

    return (
        <div className=' h-screen w-screen grid place-items-center'>
            <div className='border-2 p-20 border-emerald-600 rounded-xl'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                    <input className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <input className=' outline-none bg-transparent mt-3 border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type='password' placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    <button type='submit' className='text-white outline-none  border-none bg-emerald-600 py-3 px-5 rounded-full mt-3'>Log In</button>
                </form>
            </div>

        </div>
    )
}

export default Login
