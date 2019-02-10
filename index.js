// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  };
  
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(Math.max(drivers.length - 2, 1))
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer
  }
}

const fareDoubler = function createFareMultiplier(integer) {
  
}


