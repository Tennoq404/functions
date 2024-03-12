'use strict';
//default parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //this is the es5 way of setting default values
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
//createBooking('me', 'you', 'steve'

createBooking('LM123');
createBooking('LM123', 2, 800);
createBooking('LM123', 2);
createBooking('LM123', 5);
createBooking('LM123', undefined, 1000);
//setting default values
