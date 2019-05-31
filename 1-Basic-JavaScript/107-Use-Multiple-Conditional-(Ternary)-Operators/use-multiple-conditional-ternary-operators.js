/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
*/

/* below is the original code
function checkSign(num) {

}

checkSign(10);
*/

/* example output
checkSign should use multiple conditional operators
checkSign(10) should return "positive". Note that capitalization matters
checkSign(-12) should return "negative". Note that capitalization matters
checkSign(0) should return "zero". Note that capitalization matters
*/

// function checkSign(num) {
//   if (num > 0) {
//       return "positive";
//   } else if (num == 0) {
//       return "zero"
//   } else {
//       return "negative"
//   }
// }
// below is the converted version of using if...else if...if to multiple ternary operators
function checkSign(num) {
    return (num > 0) ? 'positive' : (num == 0) ? 'zero' : 'negative';
}

checkSign(10);
