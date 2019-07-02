/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Change how weight is declared in the Bird function so it is a private variable.
// Then, create a method getWeight that returns the value of weight.

/* original code
function Bird() {
  this.weight = 15;


}
*/

// my code
function Bird() {
  let weight = 15;
  this.getWeight = function() {
      return weight;
  }
}

let ducky = new Bird();
ducky.getWeight();
