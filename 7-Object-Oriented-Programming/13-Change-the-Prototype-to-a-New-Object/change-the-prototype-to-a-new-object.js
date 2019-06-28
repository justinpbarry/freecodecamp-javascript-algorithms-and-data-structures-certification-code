/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Add the property numLegs and the two methods eat() and describe() to the
// prototype of Dog by setting the prototype to a new object.


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function() {
      console.log("Dog is eating");
  },
  describe: function() {
      console.log("A dog is a type of mammal, like a wolf. It is often called man's best friend.");
  }
};

let beagle = new Dog("Winston");

let props = [];
for (let property in beagle) {
    props.push(property);
}

console.log(props);

 beagle.eat()
 beagle.describe();
