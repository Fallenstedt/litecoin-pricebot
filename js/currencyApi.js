var https = require('https');

const currencyApi = {
  makeRequest: () => {
    https.get("https://api.coinmarketcap.com/v1/ticker/litecoin/", (response) => {
      var body = "";
      response.on("data", (data) =>{
        body += data;
      });
      response.on("end", () => {
        var data = parseData(body);
        console.log(data);
      });
      response.on("error", () => {
        handleError(error);
      });
    });
  }
}

function handleError(error){
  console.error(error);
};

function parseData(body) {
  var parsed = JSON.parse(body);
  console.log(parsed);
};

module.exports = currencyApi;
