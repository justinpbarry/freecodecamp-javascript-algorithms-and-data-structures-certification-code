/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/*
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b) {
    if (a > b) {
        return 1;
    } else if (b < a) {
        return -1;
    } else {
        return 0;
    }
  });
  // Add your code above this line
}
*/

// figure out why above can't be allowed

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort();
  // Add your code above this line
}

// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]);


let test = alphabeticalOrder(["a", "a", "a", "a", "x", "t"]);
