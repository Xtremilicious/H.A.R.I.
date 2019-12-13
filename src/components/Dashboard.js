import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileMedicalAlt, faFileMedical, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {Switch, Route, Link} from 'react-router-dom';
import Analytics from './Analytics';
import AllReports from "./AllReports";
import MyReports from "./MyReports";

const Wrapper = styled.div`
  height: 88vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  .dash-link {
    background: #2e2e2e;
    color: white;
    display: grid;
    grid-template-rows: 1fr 1fr;
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
      color: white;
  }
  .dash-main-link:hover{
      background: #424242;
      transition: 0.6s;
      color: #A9BCF5;
  }
  .icon{
      width: 1.5rem;
  }
  .dash-secondary{
      align-self: end;
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
  }
  .dash-main-link:focus{
      background: #0f9d58;
      transition: 0.6s;
      color: white;
  }
`;

export default class Dashboard extends Component {
  render() {
    return (
      <Wrapper>
        <div className="dash-link">
          <div className="dash-main">
            <Link to="/analytics" className="dash-main-link"><FontAwesomeIcon icon={faChartBar} className="icon"/> Analytics</Link>
            <Link to="/all-reports" className="dash-main-link"><FontAwesomeIcon icon={faFileMedicalAlt} className="icon"/> All Reports</Link>
            <Link to="/my-reports" className="dash-main-link"><FontAwesomeIcon icon={faFileMedical} className="icon"/> My Reports</Link>
          </div>
          <div className="dash-secondary"><FontAwesomeIcon icon={faSignOutAlt} className="icon"/>Logout</div>
        </div>
        <div>
            <Switch>
          
                <Route path="/analytics" component={Analytics}/>
                <Route path="/all-reports" component={AllReports}/>
                <Route path="/my-reports" component={MyReports}/>
                <Route component={Analytics}/>
            </Switch>
        </div>
      </Wrapper>
    );
  }
}
