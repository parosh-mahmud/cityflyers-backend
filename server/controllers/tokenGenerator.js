const axios = require('axios');

const generateToken = async () => {
  try {
    const AUTH_API_URL = 'https://api.flyhub.com/api/v1/Authenticate';
    const requestBody = {
      username: 'thecityflyers@Gmail.com',
      apikey: 'g5TiX28v20Dg6BXkLpuTNUk7vEFCFo9igmOwXNvZulqKCoBHcO',
    };

    // Make a POST request to the authentication API endpoint to generate the token
    const response = await axios.post(AUTH_API_URL, requestBody);

    // Extract and return the generated token from the API response
    return response.data.token;
  } catch (error) {
    // Handle API errors or network issues
    throw new Error(`Error generating token: ${error.message}`);
  }
};

module.exports = generateToken;
