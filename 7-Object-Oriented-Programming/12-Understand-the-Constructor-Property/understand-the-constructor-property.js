/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
    return candidate.constructor == Dog;
}

let mutt = new Dog('Wayne');

console.log(joinDogFraternity(mutt));
