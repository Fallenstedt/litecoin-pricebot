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
  authenticate: function(callback) {
    console.warn("This hasn't been fully implemented yet!  Probably shouldn't be using.");
    async.series([
      initialAuthorize,
      promptForPin,
      finalizeOauth,
    ], function(err) {
      callback(err);
    });
  },
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

function initialAuthorize(callback) {
  initializeOauth();

  twitter.getOAuthRequestToken(function(error, token, tokenSecret, results) {
    grabTokensFromInitialRequest(error, token, tokenSecret, results, callback);
  });
}

function grabTokensFromInitialRequest(error, token, tokenSecret, results, callback) {
  if (error) {
    console.log("error", error);
    throw error;
  }

  accessToken = token;
  accessTokenSecret = tokenSecret;
  callback(null);
}

function promptForPin(callback) {
  callback();
}

function finalizeOauth(callback) {
  callback();
}

module.exports = TwitterApi;
