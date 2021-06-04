const request = require('request-promise-native');

const fetchMyIP = function() {
  return request("https://api.ipify.org");
};

const fetchCoordsByIP = function(body) {
  return request(`https://freegeoip.app/json/${body}`);
};

const fetchFlyOverTimes = function(body) {
  const coords = JSON.parse(body);
  return request(`http://api.open-notify.org/iss/v1/?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function(body) {
  let result = JSON.parse(body).response;
  return result;
}

const print = function(obj) {
  for (let item of obj) {
    console.log(`Next pass at risetime ${item.risetime} for ${item.duration} seconds!`)
  }
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchFlyOverTimes, nextISSTimesForMyLocation, print };