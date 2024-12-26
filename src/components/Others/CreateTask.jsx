import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const { authData } = useContext(AuthContext)
    // console.log('auth', authData)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault();

        try {
            console.log(authData);
            if (taskTitle || taskDescription || taskDate || category) {

                // Compute newTask locally
                const task = {
                    title: taskTitle,
                    description: taskDescription,
                    date: taskDate,
                    category,
                    action: taskTitle,
                    completed: false,
                    newTask: true,
                    failed: false,
                    active: false,
                };
                console.log(asignTo)
                setNewTask(task); // Update state asynchronously


                // Clear inputs after setting the task
                if (newTask !== null) {

                    authData.map((data) => {
                        if (data.firstname === asignTo) {
                            data.tasks.push(newTask)
                            // console.log(data)
                            console.log(authData)
                            localStorage.setItem('employees', JSON.stringify(authData))

                        }
                    })

                    setTaskTitle('');
                    setTaskDate('');
                    setTaskDescription('');
                    setCategory('');
                } else {
                    return window.alert('Task creating failed!')
                }
            } else {
                return window.alert("Creating task error!");
            }
        } catch (error) {
            return window.alert("Creating task error!");
        }
    };
    // useEffect(() => {
    //     if (newTask) {
    //         // authData.task.push(newTask)
    //         // console.log(authData)
    //         // console.log(newTask)
    //         authData.map((data) => {
    //             // console.log(data)
    //             // console.log(newTask.title)
    //             // if(data.)
    //         })
    //     }
    // }, [newTask])
    // console.log(newTask); // Log the new task immediately


    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap  items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={e => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={e => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={e => setAsignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Employee name ' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev, etc' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={e => setTaskDescription(e.target.value)}
                        name='' id='' cols='30' rows='10' className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
