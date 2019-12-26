import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileMedicalAlt, faFileMedical, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {Switch, Route, Link} from 'react-router-dom';

import Analytics from './widgets/Analytics';
import AllReports from "./AllReports";
import MyReports from "./widgets/MyReports";

import { connect } from "react-redux";
import { startLogout } from '../actions/auth';

const Wrapper = styled.div`
  height: 90vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 5fr;
  .dash-link {
    background: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    color: white;
    display: grid;
    grid-template-rows: 1fr 1fr;
    z-index: 2;
    
  }
  .dash-main {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-self: start;
  }
  .dash-main-link{
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      text-decoration: none;
      color: black;
  }
  .text-black{
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
  }
  .text-black:hover{
      color: white;
      transition: 0.6s;
  }

  .dash-main-link:hover{
      background: #0F9D58;
      transition: 0.6s;
      color: white !important;
  }
  .icon{
      width: 1.5rem;
  }
  .dash-secondary{
      align-self: end;
      
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      color: black;
  }
  .dash-main-link:focus{
      background: #0F9D58;
      transition: 0.6s;
      color: white;
  }
  a{
    text-decoration: none !important;
  }
`;


class Dashboard extends Component {
  render() {
    return (
      <Wrapper>
        <div className="dash-link">
          <div className="dash-main">
            <Link to="/dashboard/analytics" className="dash-main-link"><FontAwesomeIcon icon={faChartBar} className="icon"/> Analytics</Link>
            <Link to="/dashboard/all-reports" className="dash-main-link"><FontAwesomeIcon icon={faFileMedicalAlt} className="icon"/> All Reports</Link>
            <Link to="/dashboard/my-reports" className="dash-main-link"><FontAwesomeIcon icon={faFileMedical} className="icon"/> My Reports</Link>
          </div>
          <div className="dash-secondary dash-main-link"><FontAwesomeIcon icon={faSignOutAlt} className="icon"/><a href="" alt="" onClick={this.props.logout.bind(this)} className="text-black">
                Logout
              </a></div>
        </div>
        <div style={{position: "relative", padding: "0rem", margin: "0", overflowY:"scroll", background: "#f5f6fa"}}>
            <Switch>
          
                <Route path="/dashboard/analytics" component={Analytics}/>
                <Route path="/dashboard/all-reports" component={AllReports}/>
                <Route path="/dashboard/my-reports" component={MyReports}/>
                <Route component={Analytics}/>
            </Switch>
        </div>
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  tests: state.test.tests
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)