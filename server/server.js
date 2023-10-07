const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./config/passportConfig'); // Import your passport configuration
const userRoutes = require('./routes/userRoutes');
const airportSearchRoutes = require('./routes/airportSearchRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Initialize passport middleware
app.use(passport.initialize());

// Set up your routes
app.use('/api/user', userRoutes);
app.use('/api/airports', airportSearchRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
