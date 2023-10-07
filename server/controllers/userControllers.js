const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser, findUserByEmail } = require('../models/userModels');
const generateToken = require('../config/generateToken');
const { v4: uuidv4 } = require('uuid');


// Signup Route
const registration = async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;

    // Create user data object
    const userData = {
      email: email,
      password: await bcrypt.hash(password, 10), // Hash the password here
      phoneNumber: phoneNumber,
    };
 // Generate a unique uid for the user using uuid
    const uid = uuidv4(); // Generate a random UUID

    // Include uid in the userData object
    const userDataWithUid = { ...userData, uid };

    // Save user data in your database (e.g., Firebase Firestore)
    await createUser(uid, userDataWithUid);

    // Generate JWT token with uid included in the payload
    const token = generateToken(userDataWithUid);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating account' });
  }
};


// Login Route
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await findUserByEmail(email);

  if (user) {
    // Check if the provided password matches the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // If passwords match, generate JWT token and send it in the response
      const token = generateToken(user);
      res.status(200).json({ token });
    } else {
      // If passwords do not match, return authentication error
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    // If user with the provided email is not found, return authentication error
    res.status(401).json({ message: 'User not found' });
  }
});

module.exports = {
  registration,
  login,
};
