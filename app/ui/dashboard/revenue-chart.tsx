'use client'
import React, { ReactPropTypes } from 'react';
import { Chart, } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function RevenueChart(dataSet: any) {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [5000, 7000, 5500, 9000, 8000, 6000, 7500, 8200, 6000, 9500, 8800, 7000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar fill color
                borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
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
            <Chart type='bar' data={data} options={options} />
        </>
    );
}
