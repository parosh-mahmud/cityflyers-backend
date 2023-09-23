const asyncHandler = require("express-async-handler");
const airports = require('airport-codes-updated');

const accessAirportList = asyncHandler(async (req, res) => {
  const airportList = airports.toJSON().map((airport) => ({
    name: airport.name,
    iata: airport.iata,
    city: airport.city,
    country: airport.country,
  }));

  res.json(airportList);
});

module.exports = accessAirportList;
