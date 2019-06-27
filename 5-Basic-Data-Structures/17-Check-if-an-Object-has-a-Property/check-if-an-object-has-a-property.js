/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Finish writing this function so that it returns true only if the users object contains all four names,
// Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  let alan = 'Alan' in obj,
  jeff = 'Jeff' in obj,
  sarah = 'Sarah' in obj,
  ryan = 'Ryan' in obj;

  return alan && jeff && sarah && ryan; 

  // change code above this line
}

console.log(isEveryoneHere(users));
