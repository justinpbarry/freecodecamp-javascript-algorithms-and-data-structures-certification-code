/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use simple fields with object literals to create and return a Person object.

the output is {name: "Zodiac Hasbro", age: 56, gender: "male"}.
No : were used.
*/

/* below is the original code
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
*/

const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender
  };
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object










//
