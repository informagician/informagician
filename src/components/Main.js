import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Blog from './Blog'
import Static from './Static'
import Article from './Article'

const Main = () => {
 
    return (
        <Router>
            <Nav />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/blog/:id">
                        <Article />
                    </Route>
                    <Route path="/projects">
                        <Static />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main