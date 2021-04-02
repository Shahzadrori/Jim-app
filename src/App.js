import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Components/Home/Home";
import Contact from "./Components/Navcomponents/contact";
import Error_msg from "./Components/Navcomponents/error-msg";
import Nav from "./Components/Navcomponents/Navbar";
import Regis_form from "./Components/Reges/Register";
import Display from "./List-info/Disp";
import "./style/App.css";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Regis_form} />
        <Route exact path="/list" component={Display} />
        <Route component={Error_msg} />
      </Switch>
    </>
  );
}

export default App;
