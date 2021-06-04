const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIP } = require("./iss_promised");
const { fetchFlyOverTimes } = require("./iss_promised");
const { nextISSTimesForMyLocation } = require("./iss_promised");
const { print } = require("./iss_promised");



fetchMyIP().then(body => {
  let coords = fetchCoordsByIP(body);
  return coords;
}).then(coord => {
  let flyoverTimes = fetchFlyOverTimes(coord);
  return flyoverTimes;
}).then((flytimebody) => {
  let result = nextISSTimesForMyLocation(flytimebody);
  return result;
}).then((res) => {
  let printedRes = print(res);
  return printedRes;
}).catch((error) => {
  console.log("It didn't work: ", error.message);
});