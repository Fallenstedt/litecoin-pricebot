const currencyInfo = require('../js/currencyInfo');
const dummyData = require('../js/dummyData');

const expect = require('chai').expect;

describe("currencyInfo ", ()=>{
  describe("it should parse an array for desired data", (done) => {
    var result;

    beforeEach((done) => {
      var callback = function(err, result) {
        if (err) { console.error(err);}
        return result;
      }
      result = currencyInfo.formatResponse(dummyData, callback);
      done();
    })
    
    xit("returns an function", (done)=>{
      console.log(result);
      expect(result).to.be.a('function');
      done();
    });

    xit("returns an function with values in each key", (done) => {
      var values = Object.keys(result).map((key) => {
        return result[key];
      });
      expect(values).to.not.include.undefined;
      done();
    });


  });
});
