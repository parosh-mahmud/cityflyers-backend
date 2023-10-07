const BASE_URL = 'http://api.sandbox.flyhub.com/api/v1/'; // Replace this with your API base URL

// const api = {
//   async getFlights(formData) {
//     try {
//       const response = await fetch(`${BASE_URL}/AirSearch`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // You can add additional headers here if needed
//         },
//         // You can add query parameters to the URL or a request body here if needed
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error(`Error fetching flights: ${error.message}`);
//     }
//   },
//   // Add more API functions for different endpoints if your app requires
// };

const mockApiResponse = {

    "SearchId": "494a6d8d-c7b3-4ffe-a825-5a745690c277",
    "Results": [
        {
            "ResultID": "52a4f402-d3bc-4eb9-9d04-72d7c0f84aed",
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
                        "DepTime": "2023-10-09T18:15:00"
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
                        "ArrTime": "2023-10-09T19:00:00"
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
            "Availabilty": 9,
            "FareType": "InstantTicketing",
            "isMiniRulesAvailable": true,
            "HoldAllowed": false
        },
        {
            "ResultID": "86fc0ad4-67fa-4df6-b644-a21dd93bc0a3TPBS",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 2074.0,
                    "Tax": 925.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 82.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 82.0,
            "Validatingcarrier": "BS",
            "LastTicketDate": null,
            "segments": [
                {
                    "TripIndicator": "OutBound",
                    "Origin": {
                        "Airport": {
                            "AirportCode": "JSR",
                            "AirportName": "Jessore Airport",
                            "Terminal": "D",
                            "CityCode": "JSR",
                            "CityName": "Jessore",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "DepTime": "2023-10-09T09:00:00"
                    },
                    "Destination": {
                        "Airport": {
                            "AirportCode": "DAC",
                            "AirportName": "Hazrat Shahjalal International Airport",
                            "Terminal": "D",
                            "CityCode": "DAC",
                            "CityName": "Dhaka",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "ArrTime": "2023-10-09T09:40:00"
                    },
                    "Airline": {
                        "AirlineCode": "BS",
                        "AirlineName": "US-Bangla Airlines",
                        "FlightNumber": "122",
                        "BookingClass": "E",
                        "CabinClass": "Y",
                        "OperatingCarrier": "BS"
                    },
                    "Baggage": "20K",
                    "JourneyDuration": "40",
                    "StopQuantity": null,
                    "Equipment": "AT7",
                    "baggageDetails": [
                        {
                            "IsAllPax": false,
                            "PaxType": 1,
                            "Cabin": null,
                            "Checkin": "20K"
                        }
                    ],
                    "SegmentGroup": 0
                }
            ],
            "TotalFare": 2917.0,
            "TotalFareWithAgentMarkup": 2917.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": true,
            "HoldAllowed": true
        },
        {
            "ResultID": "2483d5c4-1c7b-4a15-a4cd-1d7e1430a661TPBS",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 2074.0,
                    "Tax": 925.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 82.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 82.0,
            "Validatingcarrier": "BS",
            "LastTicketDate": null,
            "segments": [
                {
                    "TripIndicator": "OutBound",
                    "Origin": {
                        "Airport": {
                            "AirportCode": "JSR",
                            "AirportName": "Jessore Airport",
                            "Terminal": "D",
                            "CityCode": "JSR",
                            "CityName": "Jessore",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "DepTime": "2023-10-09T14:45:00"
                    },
                    "Destination": {
                        "Airport": {
                            "AirportCode": "DAC",
                            "AirportName": "Hazrat Shahjalal International Airport",
                            "Terminal": "D",
                            "CityCode": "DAC",
                            "CityName": "Dhaka",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "ArrTime": "2023-10-09T15:25:00"
                    },
                    "Airline": {
                        "AirlineCode": "BS",
                        "AirlineName": "US-Bangla Airlines",
                        "FlightNumber": "124",
                        "BookingClass": "E",
                        "CabinClass": "Y",
                        "OperatingCarrier": "BS"
                    },
                    "Baggage": "20K",
                    "JourneyDuration": "40",
                    "StopQuantity": null,
                    "Equipment": "AT7",
                    "baggageDetails": [
                        {
                            "IsAllPax": false,
                            "PaxType": 1,
                            "Cabin": null,
                            "Checkin": "20K"
                        }
                    ],
                    "SegmentGroup": 0
                }
            ],
            "TotalFare": 2917.0,
            "TotalFareWithAgentMarkup": 2917.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": true,
            "HoldAllowed": true
        },
        {
            "ResultID": "96b23313-4af5-408f-b6ce-31a8db969e47TPBS",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 2074.0,
                    "Tax": 925.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 82.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 82.0,
            "Validatingcarrier": "BS",
            "LastTicketDate": null,
            "segments": [
                {
                    "TripIndicator": "OutBound",
                    "Origin": {
                        "Airport": {
                            "AirportCode": "JSR",
                            "AirportName": "Jessore Airport",
                            "Terminal": "D",
                            "CityCode": "JSR",
                            "CityName": "Jessore",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "DepTime": "2023-10-09T20:45:00"
                    },
                    "Destination": {
                        "Airport": {
                            "AirportCode": "DAC",
                            "AirportName": "Hazrat Shahjalal International Airport",
                            "Terminal": "D",
                            "CityCode": "DAC",
                            "CityName": "Dhaka",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "ArrTime": "2023-10-09T21:25:00"
                    },
                    "Airline": {
                        "AirlineCode": "BS",
                        "AirlineName": "US-Bangla Airlines",
                        "FlightNumber": "130",
                        "BookingClass": "E",
                        "CabinClass": "Y",
                        "OperatingCarrier": "BS"
                    },
                    "Baggage": "20K",
                    "JourneyDuration": "40",
                    "StopQuantity": null,
                    "Equipment": "AT7",
                    "baggageDetails": [
                        {
                            "IsAllPax": false,
                            "PaxType": 1,
                            "Cabin": null,
                            "Checkin": "20K"
                        }
                    ],
                    "SegmentGroup": 0
                }
            ],
            "TotalFare": 2917.0,
            "TotalFareWithAgentMarkup": 2917.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": true,
            "HoldAllowed": true
        },
        {
            "ResultID": "1ff41f28-146c-4b4e-86ba-7dcf33f1e762",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 2574.0,
                    "Tax": 925.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 101.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 101.0,
            "Validatingcarrier": "BS",
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
                        "DepTime": "2023-10-09T09:00:00"
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
                        "ArrTime": "2023-10-09T09:40:00"
                    },
                    "Airline": {
                        "AirlineCode": "BS",
                        "AirlineName": "US-Bangla Airlines",
                        "FlightNumber": "122",
                        "BookingClass": "I",
                        "CabinClass": "Y",
                        "OperatingCarrier": "BS"
                    },
                    "Baggage": "ADT-20kg",
                    "JourneyDuration": "40",
                    "StopQuantity": "0",
                    "Equipment": "AT7",
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
            "TotalFare": 3398.0,
            "TotalFareWithAgentMarkup": 3398.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": true,
            "HoldAllowed": true
        },
        {
            "ResultID": "71a7384f-ac26-4521-a4e9-ded844e71a06",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 2574.0,
                    "Tax": 925.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 101.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 101.0,
            "Validatingcarrier": "BS",
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
                        "DepTime": "2023-10-09T14:45:00"
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
                        "ArrTime": "2023-10-09T15:25:00"
                    },
                    "Airline": {
                        "AirlineCode": "BS",
                        "AirlineName": "US-Bangla Airlines",
                        "FlightNumber": "124",
                        "BookingClass": "I",
                        "CabinClass": "Y",
                        "OperatingCarrier": "BS"
                    },
                    "Baggage": "ADT-20kg",
                    "JourneyDuration": "40",
                    "StopQuantity": "0",
                    "Equipment": "AT7",
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
            "TotalFare": 3398.0,
            "TotalFareWithAgentMarkup": 3398.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": true,
            "HoldAllowed": true
        },
        {
            "ResultID": "9bebbd7d-5b5f-4182-8cd2-93c035233ad0",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 2574.0,
                    "Tax": 925.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 101.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 101.0,
            "Validatingcarrier": "BS",
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
                        "DepTime": "2023-10-09T20:45:00"
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
                        "ArrTime": "2023-10-09T21:25:00"
                    },
                    "Airline": {
                        "AirlineCode": "BS",
                        "AirlineName": "US-Bangla Airlines",
                        "FlightNumber": "130",
                        "BookingClass": "I",
                        "CabinClass": "Y",
                        "OperatingCarrier": "BS"
                    },
                    "Baggage": "ADT-20kg",
                    "JourneyDuration": "40",
                    "StopQuantity": "0",
                    "Equipment": "AT7",
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
            "TotalFare": 3398.0,
            "TotalFareWithAgentMarkup": 3398.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": true,
            "HoldAllowed": true
        },
        {
            "ResultID": "6e924146-9aa8-4102-8e03-a206c046ee0e",
            "IsRefundable": true,
            "Fares": [
                {
                    "BaseFare": 6850.0,
                    "Tax": 600.0,
                    "Currency": "BDT",
                    "OtherCharges": 0.0,
                    "Discount": 271.0,
                    "AgentMarkUp": 0.0,
                    "PaxType": "Adult",
                    "PassengerCount": 1,
                    "ServiceFee": 0.0
                }
            ],
            "Discount": 271.0,
            "Validatingcarrier": "BG",
            "LastTicketDate": "2023-10-08T20:00:00",
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
                        "DepTime": "2023-10-09T18:15:00"
                    },
                    "Destination": {
                        "Airport": {
                            "AirportCode": "DAC",
                            "AirportName": "Hazrat Shahjalal International Airport",
                            "Terminal": "D",
                            "CityCode": "DAC",
                            "CityName": "Dhaka",
                            "CountryCode": "BD",
                            "CountryName": "Bangladesh"
                        },
                        "ArrTime": "2023-10-09T19:00:00"
                    },
                    "Airline": {
                        "AirlineCode": "BG",
                        "AirlineName": "Biman Bangladesh Airlines",
                        "FlightNumber": "468",
                        "BookingClass": "Y",
                        "CabinClass": "Economy",
                        "OperatingCarrier": "BG"
                    },
                    "Baggage": "20 K",
                    "JourneyDuration": "45",
                    "StopQuantity": "0",
                    "Equipment": "DH8",
                    "baggageDetails": [
                        {
                            "IsAllPax": true,
                            "PaxType": 1,
                            "Cabin": null,
                            "Checkin": "20 K"
                        }
                    ],
                    "SegmentGroup": 0
                }
            ],
            "TotalFare": 7179.0,
            "TotalFareWithAgentMarkup": 7179.0,
            "Currency": "BDT",
            "Availabilty": 9,
            "FareType": "NET",
            "isMiniRulesAvailable": false,
            "HoldAllowed": true
        }
    ],
    "Error": null

};

const api = {
  async getFlights(formData) {
    // Simulate an asynchronous API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockApiResponse);
      }, 1000); // Simulating a delay of 1 second
    });
  },
};


export default api;
