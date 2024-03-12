const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

//before we start return the securebooking() function.. our code is in the global execution context
// a function always has access to the variable environment
// of the execution context in which is was created
// even if that execution context is gone
//  A CLOSURE IS THE CLOSED-OVER VARIABLE ENVIRONMENT OF THE EXECUTION CONTEXT
//IN WHICH A FUNCTION WAS CREATED, EVEN AFTER THAT EXECUTION COBTEXT IS GONE
// a closure gives a function access to all the variables of its parent function,
//even after that parent had returned. the function keeps a reference to
//its outer scope, which preserves the scope chain throughout time
// A closure makes sure that a function doesnt lose connection to variables that existed at the function's birth place
//a closure is like a backpack that a function carries around wherever it goes. the backpack has all the variables that were present in the environment where the function was created
//console.dir(booker);

let f;
//here we declarea variable f outside the g function.. so the f function is this is
//going be assing to this f variable

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
    //here the f variable is assigned to a function.. despite the fact that the parent
    //of the f function has complete running.. it still recalls because of closures
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 7);
    // here we can see the f vaariable is reassigned and the closure change to
    // the present parent function
  };
};
g();
f();
//the result of this function "f" call is 46 because of its closures

//RE-ASSIGNING F FUNCTION
h();
f();

console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} pasengers`);
    console.log(`there are 3 groups, eaxh with ${perGroup} passengers`);
  }, wait * 1000);
  //set timeout is a timer function that execute a particular function after a particular amount of time we give it
  // the first value is for the function while the second value is for the time is milliseconds
  // i second = 1000 millseconds

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(100, 3);
// the closure gas priority overvthe scope chain
