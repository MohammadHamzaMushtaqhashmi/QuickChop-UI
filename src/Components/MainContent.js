import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from '../styles/maincontent.module.css'
Chart.register(CategoryScale);

function MainContent() {

  const dataPoints = Array.from({ length: 8 }, (_, i) => (i * 0.01).toFixed(2));

  const [data, setdata] = useState({
    labels: Array.from({ length: 12 }, (_, i) => i),
    datasets: [
      {
        label: '',
        data: dataPoints.map((point, index) => parseFloat(point) + index * 0.01),
        fill: true,
        backgroundColor: 'rgba(208, 2, 27, 0.5)',
        borderColor: '#FFFF00',
        borderWidth: 2,
        tension: 0.2,
        pointRadius: 0,
      },
    ],
  });
  const [planeCrashed, setPlaneCrashed] = useState(false);
  const crashTime = Math.floor(Math.random() * 10) + 5;
  const crashTimeInMs = crashTime * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setdata(prevData => {
        const newLabel = prevData.labels.length;
        const newData = prevData.datasets[0].data.slice(-1)[0] + 0.1;

        if (newLabel * 10 >= crashTimeInMs) {
          setPlaneCrashed(true);
          clearInterval(interval);
        }

        return {
          ...prevData,
          labels: [...prevData.labels, newLabel],
          datasets: [{
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, newData]
          }]
        };
      });
    }, 15);

    return () => clearInterval(interval);
  }, [crashTimeInMs]);


  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          display: true,
        },
        grid: {
          display: true,
        },
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          display: true,
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {planeCrashed ?
          <h1 style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1 }}>FLEW AWAY! {data.datasets[0].data.slice(-1)[0].toFixed(2)}x</h1> :
          <>
            <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>{data.datasets[0].data.slice(-1)[0].toFixed(2)}x</h2>
            <div style={{ position: 'relative', zIndex: -1 }}>
              <Line data={data} options={options} />
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default MainContent;