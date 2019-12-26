import React, { Component } from "react";
import InfoBar from "./InfoBar/InfoBar.jsx";
import PatientTraffic from "./PatientTraffic.jsx";
import PatientsByDepartment from "./PatientsByDepartment.jsx";
import PatientSatisfactionTable from "./PatientSatisfactionTable.jsx";

import PatientSatisfaction from "./PatientSatisfaction.jsx";

import styled from "styled-components";

const Wrapper = styled.div`
  background: #f5f6fa;
`;

export default class Analytics extends Component {
  render() {
    return (
      <Wrapper>
        <InfoBar />
        <div className="row m-3 p-0">
          <div className="col-6">
            <PatientTraffic />
          </div>
          <div className="col-6">
            <PatientsByDepartment />
          </div>

          {/* <div className="col-4"><PatientTraffic /></div> */}
        </div>
        <div className="row m-3 p-0 mt-5 pb-3">
          <div className="col-6">
            <PatientSatisfactionTable />
          </div>
          <div className="col-6">
          <PatientSatisfaction/>
          </div>

          {/* <div className="col-4"><PatientTraffic /></div> */}
        </div>
      </Wrapper>
    );
  }
}
