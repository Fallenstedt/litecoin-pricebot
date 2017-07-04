const OAuth = require('oauth').OAuth;
const async = require('async');

const REQUEST_URL = 'https://api.twitter.com/oauth/request_token';
const AUTH_URL = 'https://api.twitter.com/oauth/access_token';
const TWEET_POST_URL = 'https://api.twitter.com/1.1/statuses/update.json';

var twitter;

var accessToken;
var accessTokenSecret;

// 'oob' is for PIN-based authentication.
const OAUTH_CALLBACK = 'oob';

const TwitterApi = {
  makeTweet: function(string, callback) {
    initializeOauth();
    let url = TWEET_POST_URL;
    let params =  {status: string};
    twitter.post(
      url,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_SECRET,
      params,
      function(err, results) {
        if (err) {
          let errorCode = err.statusCode;
          let errorData = JSON.parse(err.data);
          throw new Error(errorCode + " - " + errorData.errors[0].message);
        }
        callback(null, results);
      }
    );
  }
}

function initializeOauth() {
  if (twitter !== undefined && twitter !== null) {
    return;
  }

  twitter = new OAuth(
    REQUEST_URL,
    AUTH_URL,
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0',
    OAUTH_CALLBACK,
    'HMAC-SHA1'
  );
}


module.exports = TwitterApi;
