import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'

const Sidebar = () => {

    const history = useHistory()

    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <>
            <h2>Sidebar</h2>
            <PrivateRoute>
                <Link to="/dashboard">Dashboard</Link>
            </PrivateRoute>
            <br/>
            <PrivateRoute>
                <Link to="/dashboard/new-article">New Article</Link>
            </PrivateRoute>
            <br/>
            <PrivateRoute>
                <Link to="/dashboard/media">Media</Link>
            </PrivateRoute>
            <br />
            <PrivateRoute>
                <Link to="/dashboard/users">Users</Link>
            </PrivateRoute>
            <br />
            <a href='/logout' onClick={handleLogout}>Logout</a>
        </>
    )
}

export default Sidebar