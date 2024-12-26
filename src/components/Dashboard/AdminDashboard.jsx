import React, { useEffect, useState } from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ data }) => {
    // const [adminData, setAdminData] = useState(null)

    const adminData = data[0]
    // setAdminData(data[0])
    return (
        <div className='h-screen w-full p-10'>
            <Header data={adminData} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
