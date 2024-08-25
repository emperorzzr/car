import React, { useState, useEffect } from 'react';
import data from '../data/data.json';

const CarTable = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setCars(data);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Number of Cars</th>
            <th>Value (Baht)</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((brandData) =>
            brandData.models.map((modelData, index) => (
              <tr key={index}>
                <td>{brandData.brand}</td>
                <td>{modelData.model}</td>
                <td>{modelData.numberOfCars}</td>
                <td>{modelData.valueInBaht.toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;