import React from 'react'
import { Route, Router, Switch } from 'react-router';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import About from './Components/Navcomponents/About';
import Contact from './Components/Navcomponents/contact';
import Error_msg from './Components/Navcomponents/error-msg';
import Nav from './Components/Navcomponents/Navbar';
import './style/App.css';


function App() {
    return (
        <>
      <Nav/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          {/* <Route exact path='/login' component={Form}/> */}
          <Route component={Error_msg}/>
      </Switch>
        </>
    )
}

export default App
