/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.

he result of sum(0,1,2) should be 3
The result of sum(1,2,3,4) should be 10
The result of sum(5) should be 5
The result of sum() should be 0
The sum function uses the ... spread operator on the args parameter.
*/

/* below is the original code
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
*/
// the 0 below assures sum() will return 0
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7));
