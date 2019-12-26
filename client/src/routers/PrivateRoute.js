import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../components/Navbar.jsx';
// import Header from '../components/Header';
export const PrivateRoute = ({
  login,
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return(
      <Route {...rest} component={(props) => (
      (isAuthenticated === true) ? (
        <div>
          {/* <NavBar /> */}
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/login"/>
        )
      )} />
  )
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps)(PrivateRoute);