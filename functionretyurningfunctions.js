//const greet = function (greeting) {
//// return function (name) {
//   console.log(`${greeting} ${name}`);
// };
//};

//const greeterhey = greet('hey');
//sgreeterhey('max');

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hello')('max');
//functions returns functions.. this is a concept whereby functions return other functions through a method called
//closure
//essentially of you call the first function and store is a variable,
//that variable becomes a function for the returming function
