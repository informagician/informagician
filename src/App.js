import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Nav from './components/Nav'
import Main from './components/Main'
// import Blog from './components/Blog'
import Login from './components/Login'
import Admin from './components/admin/Main'
import './components/styles/index.scss'

function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route path='/dashboard'>
            <Admin />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
