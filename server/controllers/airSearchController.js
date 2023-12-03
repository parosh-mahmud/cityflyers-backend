const axios = require('axios');

const AIR_SEARCH_API_URL = 'https://api.flyhub.com/api/v1/AirSearch';

const airSearch = async (searchQuery) => {
  try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE3MDEyNzk5NTYsImV4cCI6MTcwMTg4NDc1NiwiaWF0IjoxNzAxMjc5OTU2LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.UFXSbQNwdgX1GEe-5IBCuunCGoApJhcoJP6YSB1dWFY'; // Replace with your actual bearer token

    const response = await axios.post(AIR_SEARCH_API_URL, searchQuery, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching air information: ${error.message}`);
  }
};

module.exports = {
  airSearch,
};
