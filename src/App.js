import React, { Component } from 'react';
import './App.css';
//import {Switch, Route} from 'react-router-dom';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class App extends Component {
  render() {
    return (
      <Router >
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={Dashboard} />
        </Switch>
      </React.Fragment>
      </Router>
    )
  }
}
