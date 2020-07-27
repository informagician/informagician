import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import New from './article/New'

const Main = () => {

    return(
        <Router>
        <div className="mr-row">
            <div className="mr-sidebar">
                <Sidebar />
            </div>
            <div className="mr-main" id="test">
                <Switch>
                    <Route exact path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route exact path='/dashboard/new-article'>
                        <New />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Main