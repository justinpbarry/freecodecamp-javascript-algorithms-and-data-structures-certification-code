/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
*/

/* below is the original code
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
*/

/* example output
Do not replace const keyword.
s should be a constant variable (by using const).
Do not change the original array declaration.
s should be equal to [2, 5, 7].
*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2,
  s[1] = 5,
  s[2] = 7;
  console.log(s);

}
editInPlace();
