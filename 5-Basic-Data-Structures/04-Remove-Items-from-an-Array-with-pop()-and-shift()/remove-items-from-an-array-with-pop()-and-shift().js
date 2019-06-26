/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Original
/*
function popShift(arr) {
 let popped; // change this line
 let shifted; // change this line
 return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

// My code
function popShift(arr) {
 let popped = arr.pop();
 let shifted = arr.shift();
 return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
