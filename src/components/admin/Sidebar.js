import React from 'react'
import { Route, Link, useParams } from 'react-router-dom'

const Sidebar = () => {

    let { path } = useParams()

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
            <a href="/">Logout</a>
        </>
    )
}

export default Sidebar