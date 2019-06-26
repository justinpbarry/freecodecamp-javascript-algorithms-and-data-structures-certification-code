/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/


/* original code
function copyMachine(arr, num) {
 let newArr = [];
 while (num >= 1) {
   // change code below this line

   // change code above this line
   num--;

 return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
*/


// My code
function copyMachine(arr, num) {
 let newArr = [];
 while (num >= 1) {
   // change code below this line
   newArr.push([...arr])
   // change code above this line
   num--;

 return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
