import React, { useEffect, useState } from 'react';

function App() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    fetch('/api/airlines')
      .then(response => response.json())
      .then(data => setAirlines(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {airlines.map(airline => (
        <div key={airline.name}>
          <h2>{airline.name}</h2>
          <img src={airline.logoUrl} alt={airline.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
