import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Switch, Route, Link} from 'react-router-dom';
import Pulse from './VisualData/Pulse';
import ECGData from './VisualData/ECGData';
import EMGData from './VisualData/EMGData';

import {
  faPlusCircle,
  faMars,
  faVenus
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: fit-content;
  margin: 1.5rem;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  .patient-header {
    font-size: 1.9rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }
  .patient-img {
    height: 7rem;

    margin-bottom: 0.5rem;
    border-radius: 50%;
  }
  .patient-icon {
    color: #df013a;
    margin-right: 0.5rem;
    font-size: 2rem;
  }
  .grid1 {
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
  }
  .patient-name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .grid2 {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
  }
  .age {
    margin-right: 1rem;
  }
  .main-info {
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn-container {
    border-radius: 0 0 1rem 1rem;
    width: 100%;
  }
  .view-button {
    border-radius: 0 0 1rem 1rem;
    width: 100%;
    cursor: pointer;
    font-size: 1.4rem;
    background: #0f9d58;
    border: none;
    color: white;
    outline: none;
    padding: 0.5rem;
  }
  .view-button:active {
    outline: none;
    border: none;
  }
  .view-button:focus {
    outline: none;
    border: none;
  }
  .patient-gender {
    color: #8181f7;
    font-size: 1.6rem;
  }
  .patient-gender-female {
    color: #fa58f4;
    font-size: 1.6rem;
  }
  .btn-red{
    background:#DF013A; 
    color: white;
    border: none;
    outline: none;
    padding: 0.3rem;
    font-size: 1.4rem;
    width: 50%;

  }
  .btn-accept{
    background: #0f9d58;
    color: white;
    width: 50%;
    border: none;
    outline: none;
    padding: 0.3rem;
    font-size: 1.4rem;

  }
  .opened-report{
    width: fit-content;
  }
  .modal-nav{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
  .modal-nav-link{
    font-size: 1.4rem;
    text-decoration: none;
    color: black;
    outline: none;
  }
`;

export default class Reports extends Component {
  render() {
    const {
      id,
      img,
      name,
      gender,
      age,
      pastMedicalHistory,
      symptoms,
      reportData
    } = this.props.data;
    return (
      <Wrapper className="patient-card">
        <div className="patient-header">
          <FontAwesomeIcon icon={faPlusCircle} className="patient-icon" />
          Patient Report
        </div>
        <div className="grid1">
            <img className="patient-img" src={`https://hari-app.netlify.com/${img}`} alt="" />
          <div className="main-info">
            <div className="patient-name">{name}</div>
            <div className="age">Age: {age}</div>
            {gender === "Female" ? (
              <div className="d-flex align-items-center">
                <span className="mr-1">Gender:</span>{" "}
                <FontAwesomeIcon
                  icon={faVenus}
                  className="patient-gender-female"
                />
                {gender}
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <span className="mr-1">Gender:</span>{" "}
                <FontAwesomeIcon icon={faMars} className="patient-gender" />
                {gender}
              </div>
            )}
          </div>
        </div>
        <div className="btn-container">
          <button type="button" className="view-button" data-toggle="modal" data-target={`#${id}`}>View</button>

         
<div class="modal " id={id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog opened-report" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title d-flex align-items-center" id="exampleModalLabel"><FontAwesomeIcon icon={faPlusCircle} className="patient-icon" />
          Patient Report</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="grid1">
      <img className="patient-img" src={`https://hari-app.netlify.com/${img}`} alt="" />
          <div className="main-info">
            <div className="patient-name">{name}</div>
            <div className="age">Age: {age}</div>
            {gender === "Female" ? (
              <div className="d-flex align-items-center">
                <span className="mr-1">Gender:</span>{" "}
                <FontAwesomeIcon
                  icon={faVenus}
                  className="patient-gender-female"
                />
                {gender}
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <span className="mr-1">Gender:</span>{" "}
                <FontAwesomeIcon icon={faMars} className="patient-gender" />
                {gender}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal-nav">
        <div className="modal-nav-link"><Link to="/my-reports/" className="modal-nav-link">Pulse</Link></div>
        <div className="modal-nav-link"><Link to="/my-reports/report/ecg" className="modal-nav-link">ECG</Link></div>
        <div className="modal-nav-link"><Link to="/my-reports/report/emg" className="modal-nav-link">EMG</Link></div>
      </div>

      <Switch>
                <Route exact path="/my-reports/" component={Pulse}/>
                <Route path="/my-reports/report/ecg" component={ECGData}/>
                <Route path="/my-reports/report/emg" component={EMGData}/>
            </Switch>

      <div class="modal-footer-mine">
        <button type="button" class="btn-red" data-dismiss="modal">Close</button>
        <button type="button" class="btn-accept">Accept</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </Wrapper>
    );
  }
}
// {id} {name} {gender} {age} {pastMedicalHistory} {symptoms}
//     {reportData.pulseData} {reportData.ecgData} {reportData.emgData}
