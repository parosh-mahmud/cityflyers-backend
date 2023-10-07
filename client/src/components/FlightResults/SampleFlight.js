import React from 'react';
import FlightResults from './FlightResults';

const SampleFlight = () => {
    
  const flightsData = [
    {
      "SearchId": "d7a2bfc5-a6ff-4619-be42-680521600046",
      "Results": [
        {
          "ResultID": "b5bd143f-e7f9-4197-8c00-b3ee734e26d3",
          "IsRefundable": true,
          "Fares": [
            {
              "BaseFare": 1874.0,
              "Tax": 925.0,
              "Currency": "BDT",
              "OtherCharges": 0.0,
              "Discount": 74.0,
              "AgentMarkUp": 0.0,
              "PaxType": "Adult",
              "PassengerCount": 1,
              "ServiceFee": 0.0
            }
          ],
          "Discount": 74.0,
          "Validatingcarrier": "BG",
          "LastTicketDate": null,
          "segments": [
            {
              "TripIndicator": "OutBound",
              "Origin": {
                "Airport": {
                  "AirportCode": "JSR",
                  "AirportName": "Jessore Airport",
                  "Terminal": null,
                  "CityCode": "JSR",
                  "CityName": "Jessore",
                  "CountryCode": "BD",
                  "CountryName": "Bangladesh"
                },
                "DepTime": "2023-10-10T19:15:00"
              },
              "Destination": {
                "Airport": {
                  "AirportCode": "DAC",
                  "AirportName": "Hazrat Shahjalal International Airport",
                  "Terminal": null,
                  "CityCode": "DAC",
                  "CityName": "Dhaka",
                  "CountryCode": "BD",
                  "CountryName": "Bangladesh"
                },
                "ArrTime": "2023-10-10T20:00:00"
              },
              "Airline": {
                "AirlineCode": "BG",
                "AirlineName": "Biman Bangladesh Airlines",
                "FlightNumber": "468",
                "BookingClass": "G",
                "CabinClass": "Y",
                "OperatingCarrier": "BG"
              },
              "Baggage": "ADT-20kg",
              "JourneyDuration": "45",
              "StopQuantity": "0",
              "Equipment": "DH8",
              "baggageDetails": [
                {
                  "IsAllPax": false,
                  "PaxType": 1,
                  "Cabin": "SB",
                  "Checkin": "20kg"
                }
              ],
              "SegmentGroup": 0
            }
          ],
          "TotalFare": 2725.0,
          "TotalFareWithAgentMarkup": 2725.0,
          "Currency": "BDT",
          "Availability": 9,
          "FareType": "InstantTicketing",
          "isMiniRulesAvailable": true,
          "HoldAllowed": false
        }
      ],
      "Error": null
    }
  ];
 console.log('Flights Data:', flightsData);
   return <FlightResults flights={flightsData} />;
};

export default SampleFlight;
