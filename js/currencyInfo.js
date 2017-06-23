const currencyApi = require('./currencyApi')
const async = require('async');

const currencyInfo = {
  fetchCoinInfo: (callback) => {
    async.waterfall([
      currencyApi.makeRequest,
      currencyInfo.formatResponse,
      currencyInfo.createTweet
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
  },
  createTweet: (data, callback) => {
    if (!data) {
      throw new Error("Data is undefined!");
    }

    const {id, symbol, price_usd, percent_change_7d, percent_change_24h} = data;

    let usd = round(+price_usd, 2);
    let arrow_24h = currencyInfo.upOrDownEmoji(percent_change_24h);
    let arrow_7d = currencyInfo.upOrDownEmoji(percent_change_7d);

    const message = `#${id} is valued at $${usd}. Last 24h: ${percent_change_24h}%${arrow_24h} Last 7d: ${percent_change_7d}%${arrow_7d} #${symbol}`;

    callback(null, message);
  },
  upOrDownEmoji: (stringNum) => {
    let num = parseFloat(stringNum),
    emoji;

    if (num > 0) {
      emoji = '⬆︎';
    } else if (num < 0) {
      emoji = '⬇︎'
    } else {
      emoji = "";
    }
    return emoji;
  }
}


function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}


module.exports = currencyInfo;
