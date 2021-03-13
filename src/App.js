import React from 'react'
import { Route, Switch } from 'react-router';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Contact from './Components/Navcomponents/contact';
import Nav from './Components/Navcomponents/Navbar';
import './style/App.css';


function App() {
    return (
        <>
      <Nav/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/login' component={Form}/>
      </Switch>
     
        </>
    )
}

export default App
