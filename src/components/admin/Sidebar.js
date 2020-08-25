import React from 'react'
import { Route, Link } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'

const Sidebar = () => {

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
            <a href="/">Logout</a>
        </>
    )
}

export default Sidebar