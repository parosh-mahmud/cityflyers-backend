const express = require('express');
const accessAirportList = require('../controllers/airportSearchController')

const router = express.Router();

router.route('/airportList').get( accessAirportList);



module.exports = router;