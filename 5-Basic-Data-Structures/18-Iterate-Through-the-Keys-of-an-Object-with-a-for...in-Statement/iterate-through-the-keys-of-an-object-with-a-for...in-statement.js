/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/*
    We've defined a function, countOnline; use a for...in statement within this function to
    loop through the users in the users object and return the number of users whose online property is set to true.
*/

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// for (let user in users) {
//     // REMEMBER user is a variable
//
// }

function countOnline(obj) {
  // change code below this line
  let usersOnline = 0;
  for (let user in obj) {
      if (obj[user].online) {
          usersOnline++;
      }
  }
  return usersOnline;
  // change code above this line
}

console.log(countOnline(users));
