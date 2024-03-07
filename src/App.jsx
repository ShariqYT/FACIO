import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import { auth } from './config/firebase.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import PasswordReset from './components/passwordReset/PasswordReset.jsx'
import AdminPage from './components/AdminPage/AdminPage.jsx'
import Page from './components/Student_Staff_Page/Page.jsx'
import { ProtectedRoute } from './components/ProtectedRoutes.jsx'
import Welcome from './components/Welcome/Welcome.jsx'

const App = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                return
            }
            setUser(null)
        })
        return () => unSubscribe();

    }, [])

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/reset' element={<PasswordReset />} />
                <Route path='/admin' element={<ProtectedRoute user={user} > <AdminPage /> </ProtectedRoute>} />
                <Route path='/staff-student' element={<ProtectedRoute user={user} > <Page /> </ProtectedRoute>} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default App
