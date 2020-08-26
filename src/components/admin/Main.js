import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import New from './article/New'
import Media from './Media'
import ListUsers from './users/ListUsers'
import Login from '../Login'

const Main = () => {

    return(
        <Switch>
            <div className="row">
                <Router>
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="main">
                        
                        <PrivateRoute exact path='/dashboard' component={Dashboard} />
                        <PrivateRoute exact path='/dashboard/new-article' component={New} />
                        <PrivateRoute path="/dashboard/media" component={Media} />
                        <PrivateRoute path="/dashboard/users" component={ListUsers} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </Router>
            </div>
        </Switch>
    )
}

export default Main