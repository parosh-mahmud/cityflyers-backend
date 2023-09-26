const express = require('express');
const {accessAirportList,accessAir} = require('../controllers/airportSearchController')

const router = express.Router();

router.route('/airportList').get( accessAirportList);
router.route('/airSearch').post(accessAir)


module.exports = router;