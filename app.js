require('dotenv').config({path: './config/.env'})
const currencyInfo = require('./js/currencyInfo');
const poster = require('./js/twitterPoster')

currencyInfo.fetchCoinInfo(logStuff);

function logStuff(err, formattedData) {
  console.log(formattedData);
}
