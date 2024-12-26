import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
  return (
    <div className='min-h-[100vh] p-10 bg-[#1c1c1c]'>
      <Header data={data} />
      <TaskListNumbers data={data} />
        <TaskList data={data}  />
    </div>
  )
}

export default EmployeeDashboard
