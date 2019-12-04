// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
  }
  
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(int){
    return function (value){
       return value * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, aFunction){
    return aFunction(arrayOfDrivers)
}


