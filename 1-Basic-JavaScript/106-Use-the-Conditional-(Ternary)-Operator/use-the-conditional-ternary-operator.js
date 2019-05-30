/* instructions
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either true or false.
*/

/* below is the original code
function checkEqual(a, b) {

}

checkEqual(1, 2);
*/

/* example output
checkEqual should use the conditional operator
checkEqual(1, 2) should return false
checkEqual(1, 1) should return true
checkEqual(1, -1) should return false
*/

function checkEqual(a, b) {
    return a == b ? true : false;
}

checkEqual(1, 2);
