import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const option = {
  title: {
    display: true,
    text: "Population growth (millions): Europe & Africa"
  },
  legend: { display: false }
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Patient Traffic",
      type: "bar",
      backgroundColor: "#04B486",
      backgroundColorHover: "#3e95cd",
      data: [133, 221, 783, 294, 1002, 456]
    }
  ]
};

export default class Analytics extends Component {
  render() {
    return (
        <div id="mixed-chart" className="d-flex justify-content-center align-items-center" style={{width:"80vw", height:"88vh"}} >
            <Line type="bar" data={data} option={option} style={{width:"78vw", height:"88vh"}}></Line>
        </div>
    );
  }
}
