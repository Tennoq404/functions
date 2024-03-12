// sometimes on javacsript we need a function that is only invoked once
// and right after it disaapers
//

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//IMMEDIATEELY INV0KED FUNCTION
//wrap the function with a paranthesis
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// all data defined ina scope is private
// data privacy is very important.. its important to hind variables
// and local variables are a very good way of doing that

//ARROW IMMEDIATELY INVOKED FUNCTION
(() => console.log(1 + 2))();

{
  const isprivate = 23;
  var notPrivate = 46;
}
// thsi creates a cide block that makes the const variable unaccessible
