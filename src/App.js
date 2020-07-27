import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Blog from './components/Blog'
import Dashboard from './components/admin/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
