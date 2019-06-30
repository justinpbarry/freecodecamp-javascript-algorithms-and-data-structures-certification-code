/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let tex = new Dog('tex');

console.log(tex.constructor);
// so it seems constructor property is overwritten  if you don't
// define without defining constructor in the constructor definition
console.log(tex.constructor == Dog);
