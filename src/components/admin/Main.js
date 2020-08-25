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
        <Router>
        <div className="row">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main">
                <Switch>
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                        {/* <Dashboard />
                    </PrivateRoute> */}
                    <PrivateRoute exact path='/dashboard/new-article' component={New} />
                        {/* <New />
                    </PrivateRoute> */}
                    <PrivateRoute path="/dashboard/media" component={Media} />
                        {/* <Media />
                    </PrivateRoute> */}
                    <PrivateRoute path="/dashboard/users" component={ListUsers} />
                        {/* <ListUsers />
                    </PrivateRoute> */}
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Main