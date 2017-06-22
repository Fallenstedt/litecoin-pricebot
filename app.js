require('dotenv').config({path: './config/.env'})
const currencyInfo = require('./js/currencyInfo');
const poster = require('./js/twitterPoster')
// Do a thing with currency info.  WOOOOO YEAH!

//fetch info
//format info
//
currencyInfo.fetchCoinInfo(logStuff);

function logStuff(err, formattedData) {
  console.log('It works!', formattedData);
}
