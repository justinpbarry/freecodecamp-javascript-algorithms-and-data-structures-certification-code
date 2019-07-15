/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let arrCopy = arr.concat([]);
  return arrCopy.sort();

  // Add your code above this line
}
nonMutatingSort(globalArray);
