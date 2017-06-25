# Litecoin Pricebot

This bot fetches the current price of [Litecoin](https://litecoin.org/), a global decentralized currency, and posts it's value in USD and averages to its [Twitter Account](https://twitter.com/LTC_pricebot)

## Getting Started

1. Clone this repository with `git clone https://github.com/Fallenstedt/litecoin-pricebot.git`
1. Navigate to the directory and run `npm install`
1. Use LTC's twitter credentials and place them into `config/.env`
```
CONSUMER_KEY=<key goes here>
CONSUMER_SECRET=<key goes here>
ACCESS_TOKEN=<key goes here>
ACCESS_SECRET=<key goes here>
```
1. Launch app with `node app.js`

## Running the tests

Run tests with `npm run test`

## Built With

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

## Authors

* **Alex Fallenstedt** - [github](https://github.com/Fallenstedt)
* **Weston Wedding** - [github](https://github.com/stickywes)

See also the list of [contributors](https://github.com/Fallenstedt/litecoin-pricebot/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Fallenstedt/litecoin-pricebot/blob/master/LICENSE) file for details

## Acknowledgments

This project was inspired by the other price bots that exist on twitter. No price bot existed for Litecoin, so we decided to build one for everyone to use.
