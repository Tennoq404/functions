const lufthansa = {
  airline: 'lufthasa',
  iatacode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}, ${name}` });
  },
};
lufthansa.book(239, 'maxwell mgaaji');
lufthansa.book(635, 'Fohn Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};
//const book = lufthansa.book;
//book(23, 'Sarah Williams');
// this would not work because this book function is not a method anymore
//it is just like a copy to the book variable
// this means that the this keyword will point to undefined
// this means we need to tell javascript what the this keyword should look like
// for example if we want to book a luftaza flight then the this keyword should point to luftaza
// and if we want to build a eurowings  flight the this keyword should be euroeings
//INSTEAD OF DOING THIS WHICH DOES NOT WORK....
// WE USE BOOK.CALL
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah willians');
console.log(eurowings);
// in this case.. the this keyword  is always the first value
// book.call helps us set our this value
// we have a way to manually manipulate the this keyword
book.call(lufthansa, 239, 'Nora Henry');

const TTM = {
  airline: 'TTM',
  iatacode: 'EW',
  bookings: [],
};

//book.call(TTM, 44, 'Tasha nyamzi');

//const { airline: AIR = [], iatacode: IATA, bookings: KIN } = TTM;

//console.log(AIR, IATA, KIN);

//  APPLY
// there is anothr operator called apply.. thr apply method does almost
// the same thing as the call method the difference is that is takes in array
// HOWEVER the apply methos id no longer used because of trhe spfread operator
// for example

const flightData = [583, 'George Cooper'];
book.apply(TTM, flightData);
console.log(TTM);

book.call(TTM, ...flightData);
// the call method is used preferably

//BIND METHOD apply method
//the bind method is just like the call and apply method but unlike them..
// the bind method creates does not call immediately..
// it recieves the object and is stored  in a variable.. and that variable can be used to call the object

const bookEW = book.bind(eurowings);
const bookLW = book.bind(lufthansa);
const bookTTM = book.bind(TTM);

//the bind methdod can also accept other arguments
// these arguments will always be like default values
// and we do not nee them when calling the function
// for example
bookEW(23, 'maxwell');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Teenoq');
bookEW23('Martha Cooper');

// there are other situations in which the bind method can be very useful
// it can be used with event listeners

lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//partail application
// means that we can pre set parameters

const addTax = (rate, value) => value + value * rate;
console.log(0.1, 200);
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// function returning function

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT2(23));
