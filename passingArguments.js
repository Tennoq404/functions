const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LM999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479184) {
    console.log('Checked in');
  } else {
    console.log('wrong passport');
  }
};

// basically wheb you pass primtives like strings into functions..
// you pass in a copy of them.. which came be changed and wont affect the orginal
//but when you pass in objects.. you pass in a copy of the object in memory which came be manipulatde at any time

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// in programmming there are two terms that are used all the time when dealing with
//functions.. which are passing by value and passing by reference
//in javascript we do not pass by refernce
