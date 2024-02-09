# airline-iata-code

airline-iata-code

Search airline name by iata code 

![npm](https://img.shields.io/npm/v/airlines-iata-codes?style=plastic)
![npm](https://img.shields.io/npm/l/airlines-iata-codes?color=002350?style=plastic)
![npm](https://img.shields.io/bundlephobia/minzip/airlines-iata-codes?style=plastic)
![npm](https://img.shields.io/npm/dt/airlines-iata-codes?style=plastic)
## Install it via npm

```shell
npm i airline-iata-code
```

## Require the Module

```shell
const allData = require('airline-iata-code')
```

## To use

```shell

const data = allData(); // All Data
console.log(data);

const data = allData('BS'); // Filter by IATA Codes



```

## Output

```shell

All Data Print

[
  {
    Airline: 'Interstate Airlines',
    IATACode: 'I4',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/I4@2x.png'
  },
  {
    Airline: 'Fly Jordan',
    IATACode: 'F0',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/F0@2x.png'
  },
  {
    Airline: 'West Link Airlines',
    IATACode: '9L',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/9L@2x.png'
  },
  {
    Airline: 'Palau National Airlines',
    IATACode: '4L',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/4L@2x.png'
  },
  {
    Airline: 'Blue Air',
    IATACode: '0B',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/0B@2x.png'
  },
  {
    Airline: 'Lucky Air',
    IATACode: '8L',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/8L@2x.png'
  },
  {
    Airline: 'KLM Cityhopper',
    IATACode: 'WA',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/WA@2x.png'
  },
  {
    Airline: 'Hydro - Quebec',
    IATACode: '0Q',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/0Q@2x.png'
  },
  {
    Airline: 'Guangxi Beibu Gulf Airlines Co., Ltd.',
    IATACode: 'GP',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/GP@2x.png'
  },
  {
    Airline: 'Lignes Aeriennes Congolaises',
    IATACode: '4V',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/4V@2x.png'
  },
  {
    Airline: 'Air Antilles Express',
    IATACode: '3S',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/3S@2x.png'
  },
  {
    Airline: 'Marsland Aviation',
    IATACode: 'M7',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/M7@2x.png'
  },
  {
    Airline: 'Kenn Borek Air Ltd.',
    IATACode: '4K',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/4K@2x.png'
  },
  {
    Airline: 'Chengdu Airlines',
    IATACode: 'EU',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/EU@2x.png'
  },
  {
    Airline: 'British Airways',
    IATACode: 'BA',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/BA@2x.png'
  },
  {
    Airline: 'Iran Aseman Airlines',
    IATACode: 'EP',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/EP@2x.png'
  },
  {
    Airline: 'Tarom',
    IATACode: 'RO',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/RO@2x.png'
  },
  {
    Airline: 'Swoop',
    IATACode: 'WO',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/WO@2x.png'
  },
  {
    Airline: 'Mesa Airlines',
    IATACode: 'YV',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/YV@2x.png'
  },
  {
    Airline: 'IHY Izmir Havayollari A.S.',
    IATACode: '4I',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/4I@2x.png'
  },
  {
    Airline: 'Fortune',
    IATACode: 'X1',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/X1@2x.png'
  },
  {
    Airline: 'Peach',
    IATACode: 'MM',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/MM@2x.png'
  },
  {
    Airline: 'Air Ocean',
    IATACode: '0O',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/0O@2x.png'
  },
  {
    Airline: 'Moldavian Airlines',
    IATACode: '2M',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/2M@2x.png'
  },
  {
    Airline: 'SKOL',
    IATACode: 'СД',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/СД@2x.png'
  },
  {
    Airline: 'Nordwind Airlines',
    IATACode: 'N4',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/N4@2x.png'
  },
  {
    Airline: 'Air Zimbabwe',
    IATACode: 'UM',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/UM@2x.png'
  },
  {
    Airline: 'Solomon Airlines',
    IATACode: 'IE',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/IE@2x.png'
  },
  {
    Airline: 'New England Airlines',
    IATACode: 'EJ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/EJ@2x.png'
  },
  {
    Airline: 'CJSC Royal Flight airlines',
    IATACode: '4R',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/4R@2x.png'
  },
  {
    Airline: 'French Blue',
    IATACode: 'BF',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/BF@2x.png'
  },
  {
    Airline: 'Wideroe',
    IATACode: 'WF',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/WF@2x.png'
  },
  {
    Airline: 'Valuair',
    IATACode: 'VF',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/VF@2x.png'
  },
  {
    Airline: 'FlyArystan',
    IATACode: '0Y',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/0Y@2x.png'
  },
  {
    Airline: 'Air Mobility Command',
    IATACode: 'MC',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/MC@2x.png'
  },
  {
    Airline: 'HiSky',
    IATACode: 'H4',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/H4@2x.png'
  },
  {
    Airline: 'easyJet Switzerland',
    IATACode: 'DS',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/DS@2x.png'
  },
  {
    Airline: 'BA Cityflyer',
    IATACode: 'CJ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/CJ@2x.png'
  },
  {
    Airline: 'Webjet Linhas Aereas',
    IATACode: 'WH',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/WH@2x.png'
  },
  {
    Airline: 'Nova Airways',
    IATACode: 'N9',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/N9@2x.png'
  },
  {
    Airline: 'Sky-Taxi',
    IATACode: 'TE',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/TE@2x.png'
  },
  {
    Airline: 'Aeropelican Air Services',
    IATACode: 'OT',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/OT@2x.png'
  },
  {
    Airline: 'BH Air',
    IATACode: '8H',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/8H@2x.png'
  },
  {
    Airline: 'PAL Express',
    IATACode: '2P',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/2P@2x.png'
  },
  {
    Airline: 'Volaris',
    IATACode: 'Y4',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/Y4@2x.png'
  },
  {
    Airline: 'East African Safari Air',
    IATACode: 'B5',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/B5@2x.png'
  },
  {
    Airline: 'European Air Transport',
    IATACode: 'QY',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/QY@2x.png'
  },
  {
    Airline: 'Mistral Air',
    IATACode: 'M4',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/M4@2x.png'
  },
  {
    Airline: 'ExpressJet',
    IATACode: 'XE',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/XE@2x.png'
  },
  {
    Airline: 'Garuda Indonesia',
    IATACode: 'GA',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/GA@2x.png'
  },
  {
    Airline: 'UM Airlines',
    IATACode: 'UF',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/UF@2x.png'
  },
  {
    Airline: 'Hi Fly Ltd',
    IATACode: '5M',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/5M@2x.png'
  },
  {
    Airline: 'Siam Ga Co. Ltd.',
    IATACode: '5E',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/5E@2x.png'
  },
  {
    Airline: 'CitizenPlane',
    IATACode: '1L',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/1L@2x.png'
  },
  {
    Airline: 'Fly540',
    IATACode: '5H',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/5H@2x.png'
  },
  {
    Airline: 'SiAvia',
    IATACode: 'KT',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/KT@2x.png'
  },
  {
    Airline: 'Thomas Cook Airlines Belgium',
    IATACode: 'HQ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/HQ@2x.png'
  },
  {
    Airline: 'SkyUp Airlines',
    IATACode: 'PQ',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/PQ@2x.png'
  },
  {
    Airline: 'Sunrise Airways',
    IATACode: 'S6',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/S6@2x.png'
  },
  {
    Airline: 'Thai Lion Air',
    IATACode: 'SL',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/SL@2x.png'
  },
  {
    Airline: 'Afrinat International Airlines',
    IATACode: '2F',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/2F@2x.png'
  },
  {
    Airline: 'LATAM Ecuador',
    IATACode: 'XL',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/XL@2x.png'
  },
  {
    Airline: 'Ravn Alaska',
    IATACode: '7H',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/7H@2x.png'
  },
  {
    Airline: 'Hunnu Air',
    IATACode: 'MR',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/MR@2x.png'
  },
  {
    Airline: 'Hong Kong Express Airways',
    IATACode: 'UO',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/UO@2x.png'
  },
  {
    Airline: 'Comair',
    IATACode: 'MN',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/MN@2x.png'
  },
  {
    Airline: 'Batik Air',
    IATACode: 'ID',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/ID@2x.png'
  },
  {
    Airline: 'Axess International Network Inc.',
    IATACode: '1J',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/1J@2x.png'
  },
  {
    Airline: 'Cayman Airways',
    IATACode: 'KX',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/KX@2x.png'
  },
  {
    Airline: 'Safarilink Aviation',
    IATACode: 'F2',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/F2@2x.png'
  },
  {
    Airline: 'DoKaSch',
    IATACode: '3D',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/3D@2x.png'
  },
  {
    Airline: 'Transportes Aéreos Regionales',
    IATACode: '5U',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/5U@2x.png'
  },
  {
    Airline: 'Hewlett-Packard (Schweiz) GmbH',
    IATACode: '1C',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/1C@2x.png'
  },
  {
    Airline: 'Braathens Regional',
    IATACode: 'DC',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/DC@2x.png'
  },
  {
    Airline: 'Air Japan',
    IATACode: 'NQ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/NQ@2x.png'
  },
  {
    Airline: 'airblue',
    IATACode: 'PA',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/PA@2x.png'
  },
  {
    Airline: 'Izhavia',
    IATACode: 'I8',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/I8@2x.png'
  },
  {
    Airline: 'Sriwijaya Air',
    IATACode: 'SJ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/SJ@2x.png'
  },
  {
    Airline: 'Yan Air Ltd',
    IATACode: 'YE',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/YE@2x.png'
  },
  {
    Airline: 'Amerijet International Inc.',
    IATACode: 'M6',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/M6@2x.png'
  },
  {
    Airline: 'Air Dolomiti',
    IATACode: 'EN',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/EN@2x.png'
  },
  {
    Airline: 'Wamos Air',
    IATACode: 'EB',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/EB@2x.png'
  },
  {
    Airline: 'Jatayu Airlines',
    IATACode: 'JZ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/JZ@2x.png'
  },
  {
    Airline: 'Air Canada',
    IATACode: 'AC',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/AC@2x.png'
  },
  {
    Airline: 'AirAsia Zest',
    IATACode: 'Z2',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/Z2@2x.png'
  },
  {
    Airline: 'Thai Vietjet Air',
    IATACode: 'VZ',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/VZ@2x.png'
  },
  {
    Airline: 'Travel Technology Interactive SA',
    IATACode: 'Y1',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/Y1@2x.png'
  },
  {
    Airline: 'Iran Air Tours',
    IATACode: 'B9',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/B9@2x.png'
  },
  {
    Airline: 'Jetstar Japan',
    IATACode: 'GK',
    is_lowcost: true,
    logo: 'https://pics.avs.io/200/200/GK@2x.png'
  },
  {
    Airline: 'Aegean Airlines',
    IATACode: 'A3',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/A3@2x.png'
  },
  {
    Airline: 'Travel Air',
    IATACode: '4P',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/4P@2x.png'
  },
  {
    Airline: 'Nauru Airline',
    IATACode: 'ON',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/ON@2x.png'
  },
  {
    Airline: 'Sansa Airlines',
    IATACode: 'RZ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/RZ@2x.png'
  },
  {
    Airline: 'Republic Airlines',
    IATACode: 'YX',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/YX@2x.png'
  },
  {
    Airline: 'Fly Jamaica Airways',
    IATACode: 'OJ',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/OJ@2x.png'
  },
  {
    Airline: 'Sunsplash Aviation, LLC.',
    IATACode: 'YH',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/YH@2x.png'
  },
  {
    Airline: 'Cape Air',
    IATACode: '9K',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/9K@2x.png'
  },
  {
    Airline: 'Grant Aviation, Inc.',
    IATACode: 'GV',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/GV@2x.png'
  },
  {
    Airline: 'BADR AIRLINES',
    IATACode: 'J4',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/J4@2x.png'
  },
  {
    Airline: 'Trans States Airlines',
    IATACode: 'AX',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/AX@2x.png'
  },
  ... 973 more items
]

```
## To use Filtering using IATA Code

```shell


const data = allData('BS'); // Filter by IATA Codes

console.log(data);


```

## Output2

```shell

[
  {
    Airline: 'US-Bangla Airlines',
    IATACode: 'BS',
    is_lowcost: false,
    logo: 'https://pics.avs.io/200/200/BS@2x.png'
  }
]

```

## License

The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.