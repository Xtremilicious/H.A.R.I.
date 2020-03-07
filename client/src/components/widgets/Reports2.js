import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, Link } from "react-router-dom";
import Pulse from "../reports/Pulse.jsx";
import ECGData from "../reports/ECGData.jsx";
import EMGData from "../reports/EMGData.jsx";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

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
  .btn-red {
    background: #df013a;
    color: white;
    border: none;
    outline: none;
    padding: 0.3rem;
    font-size: 1.4rem;
    width: 50%;
  }
  .btn-accept {
    background: #0f9d58;
    color: white;
    width: 50%;
    border: none;
    outline: none;
    padding: 0.3rem;
    font-size: 1.4rem;
    cursor: not-allowed;
  }
  .opened-report {
    width: fit-content;
  }
  .modal-nav {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
  .modal-nav-link {
    font-size: 1.4rem;
    text-decoration: none;
    color: black;
    outline: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none;
    color: black;
  }
  .second-modal{
    height: 88vh;
    background: white;
    width: 70vw;
    margin-left: 15vw;
    margin-top: 5vh;
    margin-bottom: 6vh;
    margin-right: 15vw;
    border-radius: 1rem;
    position: relative;
    display:flex;
    justify-content: end;
  }
  .second-modal-img{
    position: absolute;
    height: 2rem;
    top: 10px;
    right: 10px;
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
          <img
            className="patient-img"
            src={`https://hari-app.netlify.com/${img}`}
            alt=""
          />
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
          <button
            type="button"
            className="view-button"
            data-toggle="modal"
            data-target={`#${id}`}
          >
            View
          </button>

          <div
            class="modal "
            id={id}
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog opened-report" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h3
                    class="modal-title d-flex align-items-center"
                    id="exampleModalLabel"
                  >
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      className="patient-icon"
                    />
                    Patient Report
                  </h3>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="grid1">
                    <img
                      className="patient-img"
                      src={`https://hari-app.netlify.com/${img}`}
                      alt=""
                    />
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
                          <FontAwesomeIcon
                            icon={faMars}
                            className="patient-gender"
                          />
                          {gender}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Tabs
                  defaultActiveKey="pulse"
                  className="modal-nav-link d-flex justify-content-center"
                >
                  <Tab
                    eventKey="pulse"
                    title="Pulse"
                    className="modal-nav-link"
                    type="button"
                    data-toggle="modal"
                    data-target={`#${id}-pulse`}
                  >
                    <Pulse />
                    <div
                      className="modal"
                      id={`${id}-pulse`}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="second-modal ">
                        <img className="second-modal-img" src="https://image.flaticon.com/icons/png/512/1828/1828843.png" alt=""/>
                      <Pulse className="second-modal"/>
                      </div>
                      
                    </div>
                  </Tab>
                  <Tab eventKey="ecg"
                    title="ECG"
                    className="modal-nav-link"
                    type="button"
                    data-toggle="modal"
                    data-target={`#${id}-ecg`}>
                    <ECGData />
                    <div
                      className="modal"
                      id={`${id}-ecg`}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="second-modal ">
                      <img className="second-modal-img" src="https://image.flaticon.com/icons/png/512/1828/1828843.png" alt=""/>
                      <ECGData className="second-modal"/>
                      </div>
                      
                    </div>
                  </Tab>
                  <Tab eventKey="emg"
                    title="EMG"
                    className="modal-nav-link"
                    type="button"
                    data-toggle="modal"
                    data-target={`#${id}-emg`}>
                    <EMGData />
                    <div
                      className="modal"
                      id={`${id}-emg`}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="second-modal ">
                      <img className="second-modal-img" src="https://image.flaticon.com/icons/png/512/1828/1828843.png" alt=""/>
                      <EMGData className="second-modal"/>
                      </div>
                      
                    </div>
                  </Tab>
                </Tabs>

                <div class="modal-footer-mine">
                  <button type="button" class="btn-red" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn-accept" disabled>
                    Accept
                  </button>
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
