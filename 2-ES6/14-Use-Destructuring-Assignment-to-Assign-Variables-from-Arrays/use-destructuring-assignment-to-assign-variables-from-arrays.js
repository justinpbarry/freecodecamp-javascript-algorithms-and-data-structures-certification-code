/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

Value of a should be 6, after swapping.
Value of b should be 8, after swapping.
Use array destructuring to swap a and b.
*/

/* below is the original code
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
*/

let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
console.log(a); // should be 6
console.log(b); // should be 8
