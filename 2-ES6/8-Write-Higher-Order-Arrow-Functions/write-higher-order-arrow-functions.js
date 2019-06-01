/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.
squaredIntegers should be a constant variable (by using const).
squaredIntegers should be an array
squaredIntegers should be [16, 1764, 36]
function keyword was not used.
loop should not be used
map, filter, or reduce should be used

*/

/* below is the original code
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

*/

// The following method on Number was useful
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    const squaredIntegers = arr.filter(element => Number.isInteger(element) && element >= 1)
    return squaredIntegers.map(x => x ** 2);
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
