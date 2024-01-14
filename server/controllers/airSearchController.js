const axios = require('axios');

const AIR_SEARCH_API_URL = 'https://api.flyhub.com/api/v1/AirSearch';

const airSearch = async (searchQuery) => {
  try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxODIuMjUyLjgwLjIiLCJuYmYiOjE3MDQ4MjM2NDQsImV4cCI6MTcwNTQyODQ0NCwiaWF0IjoxNzA0ODIzNjQ0LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.EajH8zHb3ewwGyq99hRZmslmqkmGCnmPsemMbuE2JEs'; // Replace with your actual bearer token

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
