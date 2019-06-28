/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");

let props = [];
for (let property in beagle) {
    props.push(property);
}

console.log(props);
console.log(beagle);


/*
function Dog(name) {
  this.name = name;
}

Dog.prototype.age = 100;

let dog = new Dog('name1');
let dog2 = new Dog('name2');

let props = [];

for (let property in dog) {
    props.push(property)
}

console.log(props);
*/
