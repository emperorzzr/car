import React, { useState, useEffect } from 'react';
import carData from '../data/data.json';

const currencyFormat = new Intl.NumberFormat('th-TH', {
  style: 'currency',
  currency: 'THB'
});

const CarList = () => {
  const [carsData, setCarsData] = useState([]);
  const [highlightedCars, setHighlightedCars] = useState(() => {
    const saved = localStorage.getItem('highlightedCars');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setCarsData(carData);
  }, []);

  const toggleHighlight = (car) => {
    setHighlightedCars(prevState => {
      const isHighlighted = prevState.find(c => c.model === car.model);
      const newState = isHighlighted
        ? prevState.filter(c => c.model !== car.model)
        : [...prevState, car];

      localStorage.setItem('highlightedCars', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div>
      <h1>Car List</h1>
      <div>
        {carsData.map((brandData, brandIndex) => (
          <div key={brandIndex}>
            <h2>{brandData.brand}</h2>
            <ul>
              {brandData.models.map((car, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div>
                    <span>
                      {car.model} - {car.numberOfCars} cars - {currencyFormat.format(car.valueInBaht)}
                    </span>
                    <button
                      onClick={() => toggleHighlight(car)}
                      style={{
                        backgroundColor: highlightedCars.find(c => c.model === car.model) ? 'green' : 'grey',
                        color: 'white',
                        marginLeft: '10px',
                        padding: '5px 10px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {highlightedCars.find(c => c.model === car.model) ? 'Unhighlight' : 'Highlight'}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Highlighted Cars</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Model</th>
            <th>Value (Baht)</th>
          </tr>
        </thead>
        <tbody>
          {highlightedCars.map((car, index) => (
            <tr key={index}>
              <td>{car.model}</td>
              <td>{currencyFormat.format(car.valueInBaht)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;