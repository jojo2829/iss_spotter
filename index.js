// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("24.84.200.106", (error, geo) => {
  
  if (error) {
    console.log(error);
    return;
  }

  console.log(geo);

});