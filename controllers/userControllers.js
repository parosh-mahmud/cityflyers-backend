const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, findUserByEmail } = require('../models/userModels');
const generateToken = require('../config/generateToken');
const { v4: uuidv4 } = require('uuid');
// Signup Route
const registration = async (req, res) => {
  try {
    const { email, password, phoneNumber, firstName, lastName } = req.body;

    // Check if the user with the provided email already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Generate a unique user ID using uuidv4
    const userId = uuidv4();

    // Create user data object
    const userData = {
      email: email,
      password: await bcrypt.hash(password, 10),
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
    };

    // Create user in Firestore with the generated user ID
    const userCredential = await createUser(userId, userData);

    // Generate JWT token with uid included in the payload
    const token = generateToken({ ...userData, uid: userId });

    res.status(200).json({ token, userId });
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
