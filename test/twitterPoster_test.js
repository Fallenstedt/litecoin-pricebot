/**
 * Created by weston on 6/22/17.
 */

describe('Twitter API',function(){
  require('dotenv').config({path: './config/.env'})
  var api = require('../js/twitterApi');

  it('test initial authorization progress', function(done){
    api.authenticate(done);
  });
});
