// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

}
// let NamesOfDrivers = findMatching(drivers, name);

console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));
console.log(findMatching(drivers, 'Susan'));


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
console.log(fuzzyMatch(drivers, 'letters')); //Output


function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.name === name);
    return matchingDrivers;
}
const newDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh'
    },
    {
      name: 'Sammy',
      hometown: 'New York'
    },
    {
      name: 'Sally',
      hometown: 'Cleveland'
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles'
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay'
    }
  ];
  
console.log(matchName(newDrivers, 'Bobby'));
