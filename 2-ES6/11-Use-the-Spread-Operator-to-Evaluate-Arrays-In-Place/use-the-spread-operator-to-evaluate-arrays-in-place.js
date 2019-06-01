/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Copy all contents of arr1 into another array arr2 using the spread operator.
arr2 is correct copy of arr1.
... spread operator was used to duplicate arr1.
arr2 remains unchanged when arr1 is changed.
*/

/* below is the original code
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  // arr2 = []; // change this line
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
