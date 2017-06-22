const OAuth = require('oauth').OAuth;
const async = require('async');

const REQUEST_URL = 'https://api.twitter.com/oauth/request_token';
const AUTH_URL = 'https://api.twitter.com/oauth/access_token';

var twitter;

var accessToken;
var accessTokenSecret;

// 'oob' is for PIN-based authentication.
const OAUTH_CALLBACK = 'oob';

const TwitterApi = {
  authenticate: function(callback) {
    async.series([
      initialOauth,
      promptForPin,
      finalizeOauth,
    ], function(err) {
      callback(err);
    });
  }
}

function initialOauth(callback) {
  twitter = new OAuth(
    REQUEST_URL,
    AUTH_URL,
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0',
    OAUTH_CALLBACK,
    'HMAC-SHA1'
  );

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
