const currencyApi = require('./currencyApi')

const currencyInfo = {
  formatResponse: (data) => {
    const {
      id,
      symbol,
      price_usd,
      percent_change_24h,
      percent_change_7d
    } = data[0];

    return {
      id,
      symbol,
      price_usd,
      percent_change_24h,
      percent_change_7d
    };
  }
}


module.exports = currencyInfo;
