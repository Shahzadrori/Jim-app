import React from 'react'
import { Route, Router, Switch } from 'react-router';
import Home from './Components/Home/Home';
import About from './Components/Navcomponents/About';
import Contact from './Components/Navcomponents/contact';
import Error_msg from './Components/Navcomponents/error-msg';
import Nav from './Components/Navcomponents/Navbar';
import Form from './Components/Form/Form.jsx'
import './style/App.css';


function App() {
    return (
        <>
      <Nav/>
      <Switch>
      {/* <Router> */}
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route component={Error_msg}/>
       {/* </Router> */}
      </Switch>
      {/* <Home/> */}
      <Form/>
        </>
    )
}

export default App
