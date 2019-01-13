// Code your solution in this file


function findMatching(drivers , name){

  return drivers.filter(function (driver) {return driver.toLowerCase().includes(name.toLowerCase())});
}

function fuzzyMatch(drivers , name){

  return drivers.filter(function (driver) {return driver.substring(0 , 2)==name});
}

function matchName(drivers , name){

  return drivers.filter(function (driver) {return driver.name === name});
}
