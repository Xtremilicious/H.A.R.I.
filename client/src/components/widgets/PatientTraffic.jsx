import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import styled from "styled-components";

const Wrapper = styled.div`

  background: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 1.5rem;
    padding: 1rem;
`;

const option = {
  title: {
    display: false,
    text: ""
  },
  legend: { display: false },
  label: { display: false }
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "No. of Patients and Visitors",
      type: "line",
      backgroundColor: "transparent",
      borderColor: "#FF6384",
      data: [
        133,
        2221,
        5783,
        6294,
        8002,
        5456,
        7892,
        1346,
        3456,
        4567,
        10981,
        1000
      ]
    }
  ]
};

export default class PatientTraffic extends Component {
  render() {
    return (
      <Wrapper
        id="mixed-chart"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div style={{fontSize: "1.5rem"}}>No. of Patients and Visitors</div>
        <Line type="bar" data={data} options={option}></Line>
      </Wrapper>
    );
  }
}
