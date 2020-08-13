import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import New from './article/New'
import Media from './Media'
import ListUsers from './users/ListUsers'

const Main = () => {

    return(
        <Router>
        <div className="row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                <Switch>
                    <Route exact path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route exact path='/dashboard/new-article'>
                        <New />
                    </Route>
                    <Route path="/dashboard/media">
                        <Media />
                    </Route>
                    <Route path="/dashboard/users">
                        <ListUsers />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Main