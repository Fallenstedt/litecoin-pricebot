const async = require('async');

const TwitterApi = require('./twitterApi');

const TwitterPoster = {
  tweet: function(text, callback) {
    TwitterApi.makeTweet(text, callback);
  }
};

module.exports = TwitterPoster;
