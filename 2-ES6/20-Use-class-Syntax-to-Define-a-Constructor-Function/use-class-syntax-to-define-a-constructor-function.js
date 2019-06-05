/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions

*/

/* below is the original code

function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'

function makeClass() {
  "use strict";

  class Vegetable {
      constructor(name) {
          this.name = name;
      }
  }

  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'







//
