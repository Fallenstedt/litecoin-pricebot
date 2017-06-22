var https = require('https');

const currencyApi = {
  makeRequest: () => {
    https.get("https://api.coinmarketcap.com/v1/ticker/litecoin/", (response) => {
      var body = "";
      response.on("data", (data) => {
        console.log("Request was made...");
        body += data;
      });
      response.on("end", () => {
        var parsed = JSON.parse(body);
        console.log(parsed);
      });
      response.on("error", (error) => {
        console.error(error)
      });
    });
  },

}

module.exports = currencyApi
