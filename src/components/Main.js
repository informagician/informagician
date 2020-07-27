import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Blog from './Blog'
// import Projects from './Projects'

const Main = () => {

    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                {/* <Route path="/projects">
                    <Projects />
                </Route> */}
            </Switch>
        </Router>
    )
}

export default Main