var https = require('https');

const currencyApi = {
  makeRequest: (callback) => {
    var yummyData = https.get("https://api.coinmarketcap.com/v1/ticker/litecoin/", (response) => {
      var body = "";
      response.on("data", (data) =>{
        body += data;
      });
      response.on("end", () => {
        var data = parseData(body);
        callback(null, data);
      });
      response.on("error", () => {
        callback(error);
      });
    });
  }
}

function parseData(body) {
  return JSON.parse(body);
};

module.exports = currencyApi;
