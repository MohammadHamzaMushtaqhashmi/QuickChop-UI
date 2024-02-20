/*import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from '../styles/maincontent.module.css'
Chart.register(CategoryScale);

const MainContent = () => {
  const labels = [1, 2,3,4,5,6,7,8,9,10];
  // function to generate data points
  const generateDataPoints = () => {
    let dataPoints = [];
    for(let i=1; i<=5; i++){
      dataPoints.push(i);
    }
    return dataPoints;
  }
  const [dataPoints, setDataPoints] = useState(generateDataPoints)
  /*
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < dataPoints.length) {
        let newDataPoints = dataPoints.slice(0, index + 1);
        setDataPoints(newDataPoints);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Dependency array is empty
  
  useEffect(()=> {
    const interval = setInterval(() => {
      let newDataPoints = [...dataPoints];
      const index = newDataPoints.findIndex(point => point === 0);
      if (index !== -1){
        const lastValue = index > 0 ? newDataPoints[index - 1] : 0;
        newDataPoints[index] = lastValue + 0.1;
        setDataPoints(newDataPoints);
      }else{
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [labels]);

  const data = {
    labels : labels,
    datasets : [
      {
        fill : true,
        backgroundColor : 'rgbs(208,2,27, 0.5)',
        borderColor : '#FFFF00',
        borderWidth : 4,
        tension : 0,
        pointRadius : 0,
        data : dataPoints,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Line data={data} />
      </div>
    </div>
  )
}

export default MainContent;

*/

















/*
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from '../styles/maincontent.module.css'
Chart.register(CategoryScale);

const MainContent = () => {
  const [dataPoints, setDataPoints] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
  const labels = [1, 2,3,4,5,6,7,8,9,10,11,12];

  useEffect(()=> {
    const interval = setInterval(() => {
      let newDataPoints = [...dataPoints];
      const index = newDataPoints.findIndex(point => point === 0);
      if (index !== -1){
        const lastValue = index > 0 ? newDataPoints[index - 1] : 0;
        newDataPoints[index] = lastValue + 0.1;
        setDataPoints(newDataPoints);
      }else{
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dataPoints]);

  const data = {
    labels : labels,
    datasets : [
      {
        fill : true,
        backgroundColor : 'rgbs(208,2,27, 0.5)',
        borderColor : '#FFFF00',
        borderWidth : 2,
        tension : 0.2,
        pointRadius : 0,
        data : dataPoints,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Line data={data} />
      </div>
    </div>
  )
}

export default MainContent;
*/










import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from '../styles/maincontent.module.css'
Chart.register(CategoryScale);

function lerp(v0, v1, t){
  return(1.0 - t) * v0 + t * v1;
}
function MainContent() {

  const dataPoints = Array.from({ length: 8 }, (_, i) => (i * 0.01).toFixed(2));
  const targetValue = 1;

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



























































































/*
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Canvas, useFrame } from '@react-three/fiber';
import {CategoryScale} from 'chart.js';
import styles from '../styles/maincontent.module.css'
Chart.register(CategoryScale);

function Ray({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry attach="geometry" args={[0.1, 10]} />
      <meshBasicMaterial attach="material" color="#0e2527" />
    </mesh>
  );
}


function RotatingRays() {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.z += 0.01));

  const rays = [];
  for (let i = 0; i < 100; i++) {
    const position = [0, 0, 0]; // Position at the center
    const rotation = [0, 0, (i / 100) * Math.PI * 2]; // Distribute evenly in a circle
    rays.push(<Ray key={i} position={position} rotation={rotation} />);
  }

  return <group ref={ref}>{rays}</group>;
}

function MainContent() {
  const [chartData, setChartData] = useState({
    labels: [0], 
    datasets: [
      {
        label: '', // Remove the label here
        data: [0],
        fill: true,
        backgroundColor: 'rgba(255, 0, 0)',
        borderColor: '#FFFF00',
        tension : 0.5,
      },
    ],
  });
  const [planeCrashed, setPlaneCrashed] = useState(false);
  const [crashTime, setCrashTime] = useState(Math.floor(Math.random() * 10) + 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newLabel = prevData.labels.length;
        const newData = prevData.datasets[0].data.length > 0
          ? prevData.datasets[0].data[prevData.datasets[0].data.length - 1] + 0.01 
          : 0;

        if (newLabel === crashTime) {
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
    }, 500);

    return () => clearInterval(interval);
  }, [crashTime]);

  const options = {
    plugins: {
      legend: {
        display: false, // Add this line to hide the legend
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <Canvas>
        <RotatingRays />
      </Canvas>
      <div className={styles.content}>
        {planeCrashed ? 
          <h1 style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1 }}>FLEW AWAY! {chartData.datasets[0].data.slice(-1)[0].toFixed(2)}x</h1> :
          <>
            <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>{chartData.datasets[0].data.slice(-1)[0].toFixed(2)}x</h2>
            <div style={{ position: 'relative', zIndex: -1 }}> 
              <Line data={chartData} options={options} />
              <img
                src='/plane-icon.svg'
                alt="Plane"
                style={{
                  position: 'absolute',
                  width : '60px',
                  height :'30px',
                  left: `calc(${(chartData.labels.length / crashTime) * 100}% )`,
                  bottom: `calc(${(chartData.datasets[0].data.slice(-1)[0] / crashTime) * 100}%)`, 
                }}
              />
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default MainContent;
*/
