import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { login, startLogout, setUser } from "../actions/auth.js";

import Landing from "../Pages/Landing.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import Navbar from "../components/Navbar.jsx";
import Dashboard from "../components/Dashboard.jsx";

import NotFoundPage from "../Pages/Page404.jsx";

export const history = createHistory();
const store = configureStore();

const getUserFromLocalStorage = () => {
  try {
    const serializedState = JSON.parse(localStorage.getItem("user"));
    return serializedState;
  } catch (e) {
    console.log(e);
  }
};

const token = sessionStorage.getItem("FBIdToken");
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(startLogout());
    history.push("/");
  } else {
    store.dispatch(login());
    store.dispatch(setUser(getUserFromLocalStorage()));
    axios.defaults.headers.common["Authorization"] = token;
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  }
}

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        
      <Navbar/>
        <Switch>
          <PublicRoute exact path="/" component={Landing} />
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PublicRoute path="/signup" component={Register} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default AppRouter;
