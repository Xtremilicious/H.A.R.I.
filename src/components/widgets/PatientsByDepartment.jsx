import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

const Wrapper = styled.div`

  background: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 1.5rem;
    padding: 1rem;
`;

const option = {
  title: {
    display: true,
    text: "Patients by Department"
  },
  legend: { display: false }
};

const data = {
  labels: ["Dermatology", "Surgery", "Cardiology", "Neurology", "Gynaecology"],
  datasets: [
    {
      data: [300, 50, 100, 200, 150],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "green"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default class PatientsByDepartment extends Component {
  render() {
    return (
      <Wrapper
        id="mixed-chart"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div style={{fontSize: "1.5rem"}}>Patients by Department</div>
        <Pie type="pie" data={data} option={option}></Pie>
      </Wrapper>
    );
  }
}
