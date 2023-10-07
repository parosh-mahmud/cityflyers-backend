const asyncHandler = require("express-async-handler");
const airports = require('airport-codes-updated').toJSON();
const { default: axios } = require("axios");
const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6Ijk1fDExMXwxMDMuMTI0LjI1MS4xNDcsMTkyLjE2OC4wLjEwNiIsIm5iZiI6MTY5NTg4MDI2OSwiZXhwIjoxNjk2NDg1MDY5LCJpYXQiOjE2OTU4ODAyNjksImlzcyI6Imh0dHA6Ly9hcGkuc2FuZGJveC5mbHlodWIuY29tIiwiYXVkIjoiYXBpLnNhbmRib3guZmx5aHViLmNvbSJ9.6JlQDpRAm9qxpAKUq2fXEZICMfDztohY4epFBcnyf5U';
const {admin,db} = require('../config/firebaseConfig')

const accessAirportList = asyncHandler(async (req, res) => {
  try {
    const query = req.query.query.toLowerCase(); // Convert the query to lowercase for case-insensitive search

    // Filter airports that match the query in either name or code
    const filteredAirports = airports.filter(
      (airport) =>
        airport.name.toLowerCase().includes(query) ||
        airport.iata.toLowerCase().includes(query) ||
        airport.city.toLowerCase().includes(query) ||
        airport.country.toLowerCase().includes(query)
        );

    // Map the filtered airports to the desired data structure
    const airportList = filteredAirports.map((airport) => ({
      name: airport.name,
      code: airport.iata,
      city: airport.city,
      country: airport.country,
    }));

    // Send the airportList array as a JSON response to the frontend
    res.json(airportList);
  } catch (error) {
    console.error('Error sending airport data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Example usage:
// app.get('/api/airports/airportList', accessAirportList);









// New route to send data into Firebase Realtime Database
const sendAirportDataToRealtimeDB = asyncHandler(async (req, res) => {
  try {
    // Create an array to store the airport data (similar to what you did for Firestore)
    const airportList = airports.toJSON().map((airport) => ({
      name: airport.name,
      iata: airport.iata,
      city: airport.city,
      country: airport.country,
    }));

    // Send the airportList data to Firebase Realtime Database
    const airportsRef = db.ref('airports'); // Replace 'airports' with your Realtime Database path

    airportList.forEach((airportData) => {
      airportsRef.push(airportData);
    });

    res.json({ message: 'Airport data inserted into Realtime Database.' });
  } catch (error) {
    console.error('Error inserting airport data into Realtime Database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
    const apiUrl = 'https://api.flyhub.com/api/v1/AirSearch'; // Replace with your actual API endpoint

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


module.exports = {accessAirportList,accessAir,sendAirportDataToRealtimeDB};
