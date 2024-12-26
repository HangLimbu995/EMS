import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const { authData, userState, setUserState, loggedUserData, setLoggedUserData } = useContext(AuthContext)
  if (!authData) {
    return <div>LOading...</div>
  }

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  //     if (loggedInUser) {
  //       setUserState(loggedInUser.role)
  //     }
  //   }
  // localStorage.clear()
  // }, [authData])
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const admin = JSON.parse(localStorage.getItem('admin'))
      setLoggedUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ 'role': 'admin', data: admin }))
      setUserState({ 'role': "admin" })
    } else if (authData) {
      console.log('employee is')
      const employee = authData?.employees?.find(e => e.email === email && e.password === password)
      if (employee) {
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        setUserState({ 'role': "employee" })

        window.location.reload()
      }else {
        alert("Invalid Credentials")
      }
    } 
  }
  return (
    <>
      {!userState ? <Login handleLogin={handleLogin} /> : ''}
      {userState?.role === 'admin' && <AdminDashboard data={loggedUserData} />}
      {userState?.role === 'employee' && <EmployeeDashboard data={loggedUserData} />}
    </>
  )
}

export default App
