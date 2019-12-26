import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import {login, startLogout, setUser} from './actions/auth';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';

import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import NotFoundPage from './components/Page404';

const getUserFromLocalStorage = () => {
  try {
    const serializedState = JSON.parse(localStorage.getItem('user'));
    return serializedState;
  } catch (e) {
    console.log(e)
  }
}

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(startLogout());
    window.location.href = '/login';
  } else {

    store.dispatch(login());
    store.dispatch(setUser(getUserFromLocalStorage()));
    axios.defaults.headers.common['Authorization'] = token;
    
  }
}

const App = () => (
  <Provider store={store}>
  <Router>
      <Navbar />
      <div>
      <Switch>
        <PublicRoute exact path='/' component={Landing}/>
        <PublicRoute path='/login' component={Login}  />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PublicRoute path='/signup' component={Register} />
        <Route component={NotFoundPage} />  
      </Switch>
    </div>
  </Router>
  </Provider>
);

export default App;