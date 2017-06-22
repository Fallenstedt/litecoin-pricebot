const async = require('async');

const TwitterApi = require('./twitterApi');

const TwitterPoster = {
  makePost: function(callback) {
    let tasks = [];

    tasks.push(function(cb) {
      TwitterApi.authenticate(cb);
    });

    tasks.push(function(cb) {
      // Make the post
    });

    async.series(tasks, function(err) {
      console.log("done", err);
      callback(err);
    });
  }
};

module.exports = TwitterPoster;
