import React from 'react'
import { Route, Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <>
            <h2>Sidebar</h2>
            <Route>
                <Link to="/dashboard">Dashboard</Link>
            </Route>
            <br/>
            <Route>
                <Link to="/dashboard/new-article">New Article</Link>
            </Route>
            <br/>
            <Route>
                <Link to="/dashboard/media">Media</Link>
            </Route>
            <br />
            <Route>
                <Link to="/dashboard/users">Users</Link>
            </Route>
            <br />
            <a href="/">Logout</a>
        </>
    )
}

export default Sidebar