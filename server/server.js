const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./config/passportConfig'); // Import your passport configuration
const userRoutes = require('./routes/userRoutes');
const airportSearchRoutes = require('./routes/airportSearchRoutes');
const scrapper = require('airline-logo-scapper');
const airline = 'jet airways';

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

// let getLogo = async (airline) => {
//     try{
//         let logo = await scrapper(airline);
//         console.log(`data uri => ${logo}`);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getLogo(airline);

app.get('/api/airlines', (req, res) => {
  const airlinesRef = db.ref('airlines');
  airlinesRef.once('value')
    .then(snapshot => {
      const airlines = snapshot.val();
      res.json(airlines);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
