/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function nonMutatingPush(original, newItem) {
  // Add your code below this line
  // return original.push(newItem);
  return original.concat(newItem);
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
