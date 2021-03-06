// jshint esversion: 6
require('dotenv').config({path: './config/.env'});
const async = require('async');
const currencyInfo = require('./js/currencyInfo');
const poster = require('./js/twitterPoster');


var CronJob = require('cron').CronJob;

new CronJob('00 */30 * * * *', () => {

  //fetch data and post it to twitter
  async.waterfall([
    currencyInfo.fetchCoinInfo,
    tweetCoinInfo
  ], logStuff);

  function tweetCoinInfo(formattedData, callback) {
    poster.tweet(formattedData, callback);
    console.log('posted info!', formattedData);
  }

  function logStuff(err, formattedData) {
    if (err) {
      console.error(err);
    }
    console.log("data", formattedData);
  }


}, null, true, "America/Los_Angeles")
