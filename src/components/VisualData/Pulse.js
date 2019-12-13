import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data= {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [{
    label: "Pulse Report",
    backgroundColor: 'transparent',
    borderColor: '#AC58FA',
    data: [0, -3, 1, -5, 1.9, -2.9, 1],
    }]
}

export default class Pulse extends Component {
    render() {
        return (
            <Line data={data}></Line>
        )
    }
}
