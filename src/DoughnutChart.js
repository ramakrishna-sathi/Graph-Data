import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ chartData }) => {
  const data = {
    labels:chartData.labels,
    datasets: [
      {
        label: '# of Votes',
        data: chartData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],} ,

    options={maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
      },}

  return (
    <div style={{ width: '100%', marginTop:'40px',height: '200px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
