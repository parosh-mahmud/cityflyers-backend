const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./config/firebaseConfig')
const app = express();
const port = process.env.PORT || 5000;

const airportSearchRoutes = require('./routes/airportSearchRoutes');
// Middleware
app.use(bodyParser.json());
app.use(cors());


app.use('/api/airports',airportSearchRoutes);

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
