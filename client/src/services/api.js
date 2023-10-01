// api.js

const BASE_URL = 'https://api.example.com'; // Replace this with your API base URL

// Helper function to handle response and parse JSON
const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`HTTP error! Status: ${response.status}`);
};

// GET request function
export const get = (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any headers required for your API
    },
  })
  .then(handleResponse);
};

// POST request function
export const post = (endpoint, data) => {
  const url = `${BASE_URL}${endpoint}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any headers required for your API
    },
    body: JSON.stringify(data),
  })
  .then(handleResponse);
};

// Add more functions for other HTTP methods (PUT, DELETE, etc.) if needed

// Example usage:
// api.get('/users')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// api.post('/users', { name: 'John Doe', email: 'john@example.com' })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
