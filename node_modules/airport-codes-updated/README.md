# Airport Codes
> Airport codes (IATA) and information pulled from OpenFlights.org

## Install

```
npm install airport-codes
```

## Usage

The list of airport codes is wrapped in a Backbone Collection, so have access to all normal collection methods like `findWhere`, `at`, and `sort`.

```javascript
var airports = require('airport-codes');

console.log(airports.findWhere({ iata: 'LAX' }).get('name'));
//=> Los Angeles Intl

console.log(airports.at(124).get('city'));;
//=> Sydney

console.log(airports.at(0).get('name'));
//=> Goroka
airports.comparator = 'city';
airports.sort();
console.log(airports.at(0).get('name'));
//=> 7 Novembre
```

If you'd like only the JSON list of airport codes, you can use either the Backbone Collection's `toJSON` method or import the json list directly:

```javascript
require('airport-codes').toJSON();
require('airport-codes/airports.json');
```
