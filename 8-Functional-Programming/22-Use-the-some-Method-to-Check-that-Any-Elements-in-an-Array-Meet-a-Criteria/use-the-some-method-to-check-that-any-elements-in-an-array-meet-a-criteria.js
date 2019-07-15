/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function checkPositive(arr) {
  // Add your code below this line
  return arr.some(function(element) {
      return element >= 0;
  })

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
