import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const data = useContext(AuthContext)
    const employeesData = data.authData

    return (
        <div className='bg-[#1c1c1c] p- rounded mt-5 h-48 ' style={{ "scrollbarWidth": "none" }}>
            <div className='bg-red-400 mb-4 py-2 px-4 flex justify-between rounded'>
                <h2>Employee Name</h2>
                <h2>New Task</h2>
                <h2>Active Task</h2>
                <h2>Completed</h2>
                <h2>Failed</h2>
            </div>
            <div className='h-[80%] overflow-auto' style={{ "scrollbarWidth": "none" }}>
                {employeesData.map((elem, idx) => (
                    <div key={idx} className='bg-[#1c1c1c] border border-gray-700 mb-4 py-2 px-4 flex justify-between rounded'>
                        <h4>{elem.firstname}</h4>
                        <h4>{elem.taskNumber.new}</h4>
                        <h4>{elem.taskNumber.active}</h4>
                        <h4>{elem.taskNumber.completed}</h4>
                        <h4>{elem.taskNumber.failed}</h4>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default AllTask
