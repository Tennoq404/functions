/*
javascript is a language that has first class functions
which means.. some functions are also first class citizens
which means functions are simply treated as values

A HIGHER ORDER FUNCTION IS A FUNCTION THAT RECEIVES ANOTHER FUNCTION AS AN ARGUMENT, THAT 
RETURNS A NEW FUNCTION OR BOTH
*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

console.log(oneWord('magaji'));

const upperFirstWord = function (str) {
  const [first, ...second] = str.split(' ');
  return [first.toUpperCase(), ...second].join(' ');
};
console.log(upperFirstWord('maxwell'));
//HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`original string ${str}`);
  console.log(`Transformed strings: ${fn(str)}`);

  console.log(`Transformes by : ${fn.name}`);
};
// function have methods and properties.. one of them is the name property
//the name property gives the name of the function

transformer('Javascript is the best', oneWord);
transformer('Javascript is the best', upperFirstWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('❤');
};
//document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5);

const matric = function () {
  // return `${Math.trunc(Math.random() * 10)}${Math.trunc(
  //   Math.random() * 10
  //)}${Math.trunc(Math.random() * 10)}${Math.trunc(Math.random() * 10)}`;

  return [
    Math.trunc(Math.random() * 10),
    Math.trunc(Math.random() * 10),
    Math.trunc(Math.random() * 10),
    Math.trunc(Math.random() * 10),
  ].join('');
};
console.log(matric());

const bigfunction = function (yr, course, Mn) {
  console.log(['BU', yr, course, Mn()].join(''));
};

bigfunction(19, 'csc', matric);
