require('dotenv-safe').config();
const { MercadoBitcoin } = require('./api');

const infoApi = new MercadoBitcoin({ currency: 'BTC'});

setInterval( async () => {
  const response = await infoApi.ticker();
  console.log(response);

 // if (response.ticker.sell > 250000)
    //return console.log('Tá caro, aguardar...');
 // else 
  //  return console.log('Buy porra!');

}, process.env.CRAWLER_INTERVAL)