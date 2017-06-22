const currencyApi = require('../js/currencyApi');
const expect = require('chai').expect;

describe("Currency API", ()=>{
  describe("it should obtain currency data", (done) => {
    it("should make a get request", (done)=>{
      console.log(currencyApi);
      done()
    });
  });
});
