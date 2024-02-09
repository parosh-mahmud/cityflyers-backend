# Airline logo scapper in NodeJS

Npm module that returns airline logo image by scaprring from google search results.

This module return data uri as base64 image.

### How to Use

```JS

const scrapper = require('airline-logo-scapper');

const airline = 'jet airways';

let getLogo = async (airline) => {
    try{
        let logo = await scrapper(airline);
        console.log(`data uri => ${logo}`);
    }
    catch(error) {
        console.log(error);
    }
}

getLogo(airline);

```