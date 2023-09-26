const admin = require('firebase-admin');

const serviceAccount = require('./config/firebaseServiceKey/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com' // Replace with your Firebase database URL
});

module.exports = admin;
