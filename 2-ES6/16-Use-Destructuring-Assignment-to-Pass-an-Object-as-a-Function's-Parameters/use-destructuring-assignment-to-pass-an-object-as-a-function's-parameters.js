/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use destructuring assignment within the argument to the function half to send only max and min inside the function.
stats should be an object.
half(stats) should be 28.015
Destructuring was used.
*/

/* below is the original code
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line
  return function half( {max, min} ) {
    return (max + min) / 2.0;
  };

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
