// jshint esversion: 6
const currencyInfo = require('../js/currencyInfo');
const dummyData = require('../js/dummyData');

const expect = require('chai').expect;

describe("currencyInfo ", ()=>{
  describe("forming the tweet", (done) => {
    it("should use an up arrow if a value is greater than zero", (done) => {
      var arrow = currencyInfo.upOrDownEmoji("0.5");
      expect(arrow).to.equal("⬆︎");
      done();
    });
    it("should use a down arrow if a value is less than zero", (done) => {
      var arrow = currencyInfo.upOrDownEmoji("-0.5");
      expect(arrow).to.equal("⬇︎");
      done();
    });
    it("should return an empty string if the value is zero", (done) => {
      var arrow = currencyInfo.upOrDownEmoji("0");
      expect(arrow).to.equal("");
      done();
    });
  });
});
