const asyncHandler = require("express-async-handler");
const airports = require('airport-codes-updated');
const { default: axios } = require("axios");
const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6Ijk1fDExMXwxMDMuMTI0LjI1MS4xNDcsMTkyLjE2OC4wLjEwNiIsIm5iZiI6MTY5NTU3MDk3MywiZXhwIjoxNjk2MTc1NzczLCJpYXQiOjE2OTU1NzA5NzMsImlzcyI6Imh0dHA6Ly9hcGkuc2FuZGJveC5mbHlodWIuY29tIiwiYXVkIjoiYXBpLnNhbmRib3guZmx5aHViLmNvbSJ9.K9KE1ymzvj-LLN5jBlib6IHT_S6t2PvSiWDu9DEbfI8';

const accessAirportList = asyncHandler(async (req, res) => {
  const airportList = airports.toJSON().map((airport) => ({
    name: airport.name,
    iata: airport.iata,
    city: airport.city,
    country: airport.country,
  }));

  res.json(airportList);
});

const accessAir = asyncHandler(async (req, res) => {
  try {
    // Extract the Bearer token from the request headers
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Invalid or missing Bearer token' });
    }

    const bearerToken = authorizationHeader.replace('Bearer ', '');

    // Extract the request data from the request body
    const requestData = req.body;

    // Define the API URL you want to access
    const apiUrl = 'http://api.sandbox.flyhub.com/api/v1/AirSearch'; // Replace with your actual API endpoint

    // Set the headers with the Bearer token
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };

    // Make the API request using Axios
    const response = await axios.post(apiUrl, requestData, { headers });

    // Handle the response data as needed
    const responseData = response.data;
    
    // Send the response back to the client
    res.status(200).json(responseData);
  } catch (error) {
    // Handle any errors here
    console.error('Error accessing AirSearch API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = {accessAirportList,accessAir};
