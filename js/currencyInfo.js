const currencyApi = require('./currencyApi')
const async = require('async');

const currencyInfo = {
  fetchCoinInfo: (callback) => {
    async.waterfall([
      currencyApi.makeRequest,
      currencyInfo.formatResponse
    ], callback);
  },
  formatResponse: (data, callback) => {
    if (!data) {
      throw new Error("Data is not defined!");
    }
    // create variables
    const {
      id,
      symbol,
      price_usd,
      percent_change_24h,
      percent_change_7d
    } = data[0];

    //return object
    var data = {
      id,
      symbol,
      price_usd,
      percent_change_24h,
      percent_change_7d
    };

    callback(null, data);
  }
}


module.exports = currencyInfo;
