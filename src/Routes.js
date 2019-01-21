import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Mails from "./views/Mails";
import Reset from "./views/Reset";
import Navbar from './components/NavBar';



export default class Routes extends Component {
  render() {
    return (
            <Router>
              <div>
                <Navbar/>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/mails" component={Mails} />
                  <Route path="/reset" component={Reset} />
                </Switch>
              </div>
            </Router>
        )
    }
}
