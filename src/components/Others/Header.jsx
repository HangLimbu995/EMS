import React, { useState } from 'react'

const Header = ({ data }) => {
    const [username, setUsername] = useState('')

    // if(!data) {
    //     setUsername("Admin")
    // }else {
    //     setUsername(data.firstname)
    // }

    const userLogOut = () => {
        // localStorage.removeItem('loggedInUser')
        localStorage.setItem('loggedInUser', '')
        window.location.reload()
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstname} 👍 .</span></h1>
            <button onClick={userLogOut} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header
