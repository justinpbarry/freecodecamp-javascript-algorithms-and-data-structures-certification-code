/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also make sure nothing is defined using the keyword var.
*/

/* below is the original code
var magic = function() {
  "use strict";
  return new Date();
};
*/

const magic = () => new Date();
const sampleDate = magic();
console.log('sampleDate is ', sampleDate);
