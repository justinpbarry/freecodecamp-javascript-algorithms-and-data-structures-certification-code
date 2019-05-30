/* instructions
    Change the while loop in the code to a do...while loop so that the loop will push the number 10 to myArray,
    and i will be equal to 11 when your code finishes running.
*/

/* below is the original code
    // Setup
    var myArray = [];
    var i = 10;

    // Only change code below this line.

    while (i < 5) {
      myArray.push(i);
      i++;
    }
*/

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
}
while (i < 5);

console.log("myArray is", myArray, "and i is", i);
