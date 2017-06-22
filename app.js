require('dotenv').config({path: './config/.env'})
const currencyInfo = require('./js/currencyInfo');
const poster = require('./js/twitterPoster')

currencyInfo.fetchCoinInfo(tweetCoinInfo);

function tweetCoinInfo(err, formattedData) {
  poster.tweet(formattedData, logStuff);
}


function logStuff(err, formattedData) {
  if (err) {
    console.error(err);
  }
  console.log("data", formattedData);
}
