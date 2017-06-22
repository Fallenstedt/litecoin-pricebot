/**
 * Created by weston on 6/22/17.
 */

describe('Twitter API',function(){
  require('dotenv').config({path: './config/.env'})
  var api = require('../js/twitterApi');

  xit('tests the posting process', function(done){
    api.makeTweet("Testing testing testing!", done);
  });
});
