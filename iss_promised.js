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

const print = function(obj) {
  for (let item of obj) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(item.risetime);
    console.log(`Next pass at risetime ${datetime} for ${item.duration} seconds!`);
  }
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchFlyOverTimes) //return flyovertimes
    .then((body) => {
      let result = JSON.parse(body).response;
      return result;
    });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchFlyOverTimes, nextISSTimesForMyLocation, print };