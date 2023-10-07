const express = require('express');
const router = express.Router();
const passport = require('../config/passportConfig'); // Import passportConfig.js

const { registration,login } = require('../controllers/userControllers'); // Assuming registration function is exported from userControllers.js

router.post('/registration', registration);
router.post('/login',login);

module.exports = router;

