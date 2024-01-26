const axios = require('axios');

const AirPreBookURL = 'https://api.flyhub.com/api/v1/AirPreBook';
const AirBookURL = 'https://api.flyhub.com/api/v1/AirBook';


const airPreBook = async (searchQuery) => {
  try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxODIuMjUyLjgwLjIiLCJuYmYiOjE3MDU4MTk0NTQsImV4cCI6MTcwNjQyNDI1NCwiaWF0IjoxNzA1ODE5NDU0LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.I25QsqWeGzo8TisiOAwYF4iR7BimlTq0jc8t6b2dDNg'; // Replace with your actual bearer token

    // Call AirPreBook API
    const preBookResponse = await axios.post(AirPreBookURL, searchQuery, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Extract relevant data from the AirPreBook response, assuming there is some specific data you need
    const airPreBookData = preBookResponse.data;

    // Call AirBook API with the same searchQuery and token
    const bookResponse = await axios.post(AirBookURL, searchQuery, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Extract relevant data from the AirBook response, assuming there is some specific data you need
    const airBookData = bookResponse.data;


    
    // Combine the data from both responses or do any further processing as needed
    const combinedData = {
      airPreBookData,
      airBookData,
    };

    return airBookData;
  } catch (error) {
    throw new Error(`Error fetching air information: ${error.message}`);
  }
};

module.exports = {
  airPreBook,
};
