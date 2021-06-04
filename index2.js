const { nextISSTimesForMyLocation } = require("./iss_promised");
const { print } = require("./iss_promised");


nextISSTimesForMyLocation()
  .then((obj) => {
    print(obj);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
