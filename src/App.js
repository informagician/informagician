import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
// import Nav from './components/Nav'
import Main from './components/Main'
// import Blog from './components/Blog'
import Login from './components/Login'
import Admin from './components/admin/Main'
import PrivateRoute from './components/PrivateRoute'
import './components/styles/index.scss'

function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <PrivateRoute path='/dashboard' component={Admin} />
            {/* <Admin />
          </PrivateRoute> */}
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
