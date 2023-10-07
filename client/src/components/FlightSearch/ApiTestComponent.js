import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiTestComponent = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set your bearer token here
        const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE2OTY1NjM2NjAsImV4cCI6MTY5NzE2ODQ2MCwiaWF0IjoxNjk2NTYzNjYwLCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.wuORS6qsVQ6x8V_lALFXi8mmvA_s-3G8tVSbfUsswf0';

        // Request payload
        const requestData = {
          "AdultQuantity": 1,
          "ChildQuantity": 0,
          "InfantQuantity": 0,
          "EndUserIp": "103.124.251.147",
          "JourneyType": "1",
          "Segments": [{
            "Origin": "JSR",
            "Destination": "DAC",
            "CabinClass": "1",
            "DepartureDateTime": "2023-10-10"
          }]
        };

        // Make API call using Axios with bearer token and request payload
        const response = await axios.post('https://api.flyhub.com/api/v1/AirSearch', requestData, {
          headers: {
            'Authorization': `Bearer ${bearerToken}`
          }
        });

        // Log the API response
        console.log(response.data);

        // Set the API response in the state
        setApiResponse(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component is mounted
    fetchData();
  }, []); // useEffect will run once after the initial render (componentDidMount)

  return (
    <div>
      <h2>API Test Component</h2>
      {/* Display API response */}
      {apiResponse && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiTestComponent;
