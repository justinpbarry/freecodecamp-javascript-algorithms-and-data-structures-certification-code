/* instructions
Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
*/

/* below is the original code
    function convertToInteger(str) {

    }
    convertToInteger("56");
*/

/* example output
convertToInteger should use the parseInt() function
convertToInteger("56") should return a number
convertToInteger("56") should return 56
convertToInteger("77") should return 77
convertToInteger("JamesBond") should return NaN
*/

//
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

//
