/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Modify the dog.sayLegs method to remove any references to dog.
// Use the duck example for guidance.

let dog = {
  name: "Spot",
  numLegs: 4,
  // sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
