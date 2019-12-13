import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data= {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    datasets: [{
    label: "EMG Report",
    backgroundColor: 'transparent',
    borderColor: '#86B404',
    data: [0, 0.1, 0.2, -0.2, 1.9, -1.8, 2, -0.2, -0.15, -1, 0, 0.1, 0.2, -0.2, 1.9, -1.8, 2, -0.2, -0.15, -1, 0, 0.1, 0.2, -0.2, 1.9, -1.8, 2, -0.2, -0.15, -1, 0, 0.1, 0.2, -0.2, 1.9, -1.8, 2, -0.2, -0.15, -1].reverse(),
    }]
}

export default class EMG extends Component {
    render() {
        return (
            <Line data={data}></Line>
        )
    }
}
