/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
The result of increment(5, 2) should be 7.
The result of increment(5) should be 6.
default parameter 1 was used for value.

*/

/* below is the original code
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
*/

const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
