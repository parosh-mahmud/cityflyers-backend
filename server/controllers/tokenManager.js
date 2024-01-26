const axios = require('axios');
const jwt = require('jsonwebtoken');
const secretkey = require('../.env')
const AUTH_API_URL = 'https://api.flyhub.com/api/v1/Authenticate';
const SECRET_KEY = secretkey; // Replace with a strong secret key

let token;
let tokenExpiration;

const generateToken = (username, apiKey) => {
  const expiresInDays = 7;

  const payload = {
    username,
    apikey: apiKey,
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: `${expiresInDays}d` });
};

const authenticate = async (username, apiKey) => {
  try {
    const response = await axios.post(AUTH_API_URL, { username, apikey: apiKey });
    return response.data.token;
  } catch (error) {
    throw new Error(`Error authenticating: ${error.message}`);
  }
};

const refreshTokenIfNeeded = async (username, apiKey) => {
  if (!token || tokenExpiration <= Date.now()) {
    token = await authenticate(username, apiKey);

    // Set the expiration time of the token
    const decodedToken = jwt.decode(token);
    if (decodedToken && decodedToken.exp) {
      tokenExpiration = decodedToken.exp * 1000; // Convert seconds to milliseconds
    } else {
      throw new Error('Token expiration is missing');
    }

    console.log('Token refreshed:', new Date(tokenExpiration).toLocaleString());
  }

  return token;
};

module.exports = {
  generateToken,
  refreshTokenIfNeeded,
};
