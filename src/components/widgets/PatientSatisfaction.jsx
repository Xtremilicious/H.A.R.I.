
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
  label: { display: false },
  scales: {
    yAxes: [{
        ticks: {
            display: false
        }
    }]
}
};

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Positive Feedback',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 109, 80, 81, 99, 106, 120]
      },
      {
        label: 'Negative Feedback',
        fill: true,
        lineTension: 0.1,
        backgroundColor: '#F5A9BC',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#F5A9BC',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 20, 10,3, 25, 17, 6]
      }
    ]
  };

export default class PatientSatisfaction extends Component {
  render() {
    return (
      <Wrapper
        id="mixed-chart"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div style={{fontSize: "1.5rem"}}>Patient Satisfaction</div>
        <Line type="bar" data={data} options={option}></Line>
      </Wrapper>
    );
  }
}
