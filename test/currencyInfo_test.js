const currencyInfo = require('../js/currencyInfo');
const dummyData = require('../js/dummyData');

const expect = require('chai').expect;

describe("currencyInfo ", ()=>{
  before
  describe("it should parse an array for desired data", (done) => {
    var result;

    beforeEach((done) => {
      result = currencyInfo.formatResponse(dummyData);
      done();
    })

    it("returns an object", (done)=>{
      expect(result).to.be.a('object');
      done();
    });

    it("returns an object with values in each key", (done) => {
      var values = Object.keys(result).map((key) => {
        return result[key];
      });
      expect(values).to.not.include.undefined;
      done();
    });


  });
});
