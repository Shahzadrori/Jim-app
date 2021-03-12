import React from 'react'
import { Route, Router, Switch } from 'react-router';
import Home from './Components/Home/Home';
import Error_msg from './Components/Navcomponents/error-msg';
import Nav from './Components/Navcomponents/Navbar';
import './style/App.css';


function App() {
    return (
        <>
      <Nav/>
      <Switch>
      {/* <Router> */}
          <Route exact path='/' component={Home}/>
          <Route component={Error_msg}/>
       {/* </Router> */}
      </Switch>
      {/* <Home/> */}
        </>
    )
}

export default App
