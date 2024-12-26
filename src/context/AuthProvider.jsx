import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null)
    const [userState, setUserState] = useState(null)
    const [loggedUserData, setLoggedUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        if (employees) {
            setAuthData(employees)
        }
    }, [])

    useEffect(() => {
        const userLoggedRole = (localStorage.getItem('loggedInUser'));
        const loggedInUser = userLoggedRole ? JSON.parse(userLoggedRole) : null;

        // Check if the parsed value exists and is valid
        if (userLoggedRole) {
            setUserState(loggedInUser);
            setLoggedUserData(loggedInUser?.data)
        }

    }, [])

    return (
        <div>
            <AuthContext.Provider value={{ authData, userState, setUserState, loggedUserData, setLoggedUserData }} >

                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
