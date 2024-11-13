import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register components required by Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Bulan sebagai contoh
    datasets: [
      {
        label: 'Daily Visitors', // Mengganti label sesuai statistik website
        data: [150, 200, 300, 250, 400, 350, 500], // Data statistik pengunjung website per bulan
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.4, // Membuat garis lebih smooth
      },
      {
        label: 'Page Views', // Menambahkan dataset untuk tampilan halaman
        data: [1000, 1200, 900, 1100, 1300, 1200, 1400],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Website Statistics Over Time', // Ubah judul untuk statistik website
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Count', // Label untuk sumbu Y
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: 'Months', // Label untuk sumbu X
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
