import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {login, startLogout, setUser} from './actions/auth'
import {history}from './routers/AppRouter'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'popper.js'
import 'jquery';


// const store = configureStore();


// const jsx = (
  
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('root'));
//     hasRendered = true;
//   }
// };

// const getUserFromLocalStorage = () => {
//   try {
//     const serializedState = JSON.parse(localStorage.getItem('user'));
//     return serializedState;
//   } catch (e) {
//     console.log(e)
//   }
// }
// // ReactDOM.render(<LoadingPage/>, document.getElementById('root'));
// const token = sessionStorage.getItem('FBIdToken');
// if (token) {
//   const decodedToken = jwtDecode(token);
//   console.log('decoded',decodedToken);
//   if (decodedToken.exp * 10000 < Date.now()) {
//     store.dispatch(startLogout());
//     renderApp();
//   }
//   else {
//     store.dispatch(login());
//     store.dispatch(setUser(getUserFromLocalStorage()));
//     axios.defaults.headers.common['Authorization'] = token;
// }
//   }else {
//   renderApp();
// }
ReactDOM.render(
  <AppRouter />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
