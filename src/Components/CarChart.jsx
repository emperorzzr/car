import React, { useRef, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import jsonData from '../data/data.json'; // Adjust the path based on your file structure

Chart.register(...registerables);

const CarChart = () => {
  const [data] = useState(jsonData);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState('');
  const [chartType, setChartType] = useState('pie'); // State to toggle between 'pie' and 'bar'
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store the chart instance

  // Calculate the total number of cars for the selected brand
  const totalCars = selectedBrandIndex !== ''
    ? data[parseInt(selectedBrandIndex, 10)].models.reduce((total, model) => total + model.numberOfCars, 0)
    : 0;

  useEffect(() => {
    if (selectedBrandIndex !== '' && data.length > 0) {
      const index = parseInt(selectedBrandIndex, 10);
      const brand = data[index];
      const canvas = chartRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        // Create a new chart instance based on selected chart type
        chartInstance.current = new Chart(ctx, {
          type: chartType,
          data: {
            labels: brand.models.map(model => model.model),
            datasets: chartType === 'pie'
              ? [{
                  label: 'Number of Cars',
                  data: brand.models.map(model => model.numberOfCars),
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
                }]
              : [{
                  label: 'Number of Cars',
                  data: brand.models.map(model => model.numberOfCars),
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
                }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw + ' cars';
                  }
                }
              }
            },
            // Bar chart specific options
            scales: chartType === 'bar' ? {
              x: {
                stacked: true
              },
              y: {
                stacked: true
              }
            } : {}
          }
        });
      }
    }

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedBrandIndex, data, chartType]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}><br></br>
        <label htmlFor="brandSelect">Choose a brand: </label>
        <select
          id="brandSelect"
          onChange={(e) => setSelectedBrandIndex(e.target.value)}
          value={selectedBrandIndex}
        >
          <option value="">Select a brand</option>
          {data.map((brand, index) => (
            <option key={index} value={index}>{brand.brand}</option>
          ))}
        </select>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setChartType('pie')}>Pie Chart</button>&nbsp;
        <button onClick={() => setChartType('bar')}>Stacked Bar Chart</button>
      </div>

      {selectedBrandIndex !== '' && (
        <div style={{ width: '600px', margin: '0 auto' }}>
          <h3>{data[selectedBrandIndex].brand}</h3>
          <p>Total number of cars: <strong>{totalCars}</strong></p>
          <canvas ref={chartRef}></canvas>
        </div>
      )}
    </div>
  );
};

export default CarChart;
