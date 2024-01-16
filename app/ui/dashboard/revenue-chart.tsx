'use client'
import React, { ReactPropTypes } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

export default function RevenueChart(dataSet: any) {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [5000, 7000, 5500, 9000, 8000, 6000, 7500, 8200, 6000, 9500, 8800, 7000],
                backgroundColor: 'rgb(109, 40, 217,0.2)', // Bar fill color
                borderColor: 'rgb(109, 40, 217,1)', // Bar border color
                borderWidth: 1,
            },
        ],
    };

    // Example options (customize based on your requirements)
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Revenue',
                },
            },
        },
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
}
