const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./config/passportConfig'); // Import your passport configuration
const userRoutes = require('./routes/userRoutes');

const airportSearchRoutes = require('./routes/airportSearchRoutes');
const airSearchRoutes = require('./routes/airSearchRoutes')
const logoRoutes = require('./routes/airlineLogoRoute')
const app = express();
const port = process.env.PORT || 5000;



const allData = require('airline-iata-code')

const data = allData();
// console.log(data);

app.use(bodyParser.json());
app.use(cors());

// Initialize passport middleware
app.use(passport.initialize());

// Set up your routes
app.use('/api/user', userRoutes);
app.use('/api/airports', airportSearchRoutes);
app.use('/api',airSearchRoutes);
app.use('/api',logoRoutes)
// app.use('/api/logos', logosRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// API endpoint to get airline information
app.get('/api/airline/:code', async (req, res) => {
  const airlineCode = req.params.code.toUpperCase(); // Ensure it's uppercase


  try {
    // Convert the object to an array
    const dataArray = Object.values(data);


    // Find the airline with the provided code
    const airline = dataArray.find((item) => item.IATACode === airlineCode);

    if (airline) {
      res.json({ logoUrl: airline.logo });
    } else {
      res.status(404).json({ error: 'Airline not found' });
    }
  } catch (error) {
    console.error('Error fetching airline logo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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

// Endpoint for uploading logos
app.post('/uploadLogos', async (req, res) => {
  const logoFolderPath = '../server/airlines'; // Update this path to your logo folder

  try {
    const files = fs.readdirSync(logoFolderPath);
    const uploadPromises = files.map(async (filename) => {
      const filePath = path.join(logoFolderPath, filename);
      const logoData = fs.readFileSync(filePath);
      const storageRef = storageBucket.file(`logos/${filename}`);

      await storageRef.save(logoData, {
        metadata: {
          contentType: 'image/png' // Set appropriate content type (image/png, image/jpeg, etc.)
        }
      });

      const downloadUrl = await storageRef.getSignedUrl({
        action: 'read',
        expires: '03-01-2500' // Set an appropriate expiration date
      });

      // Add logo data to Firestore
      await db.collection('airlineLogos').add({
        filename: filename,
        downloadUrl: downloadUrl[0] // Get the first URL from the array
      });

      console.log(`Logo ${filename} uploaded and added to Firestore.`);
    });

    await Promise.all(uploadPromises);
    res.status(200).json({ message: 'Logos uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading logos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
