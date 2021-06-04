// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require("./iss");
const { fetchFlyOverTimes } = require("./iss");


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("24.84.200.106", (error, geo) => {
  
  if (error) {
    console.log("It didn't work! ", error);
    return;
  }

  console.log('It worked! Returned coordinates:', geo);

});

fetchFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, flyOverTimes) => {
  
  if (error) {
    console.log("it didn't work! ", error);
    return;
  }

  console.log('It worked! Returned flyover times:', flyOverTimes);

});