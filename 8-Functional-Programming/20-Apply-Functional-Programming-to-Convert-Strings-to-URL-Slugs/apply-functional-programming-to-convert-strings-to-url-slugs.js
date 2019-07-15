/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    // go through title and remove any non alphanumeric characters and
    // make an array from that
    let arr = title.split(/[^a-zA-Z0-9]/);

    // remove empty elements
    let cleanUp = arr.filter((element) => element != "");

    // make sure each element in the array is lower cased
    let lowerCaseArray = cleanUp.map((element) => element.toLowerCase());

    // finally join the array with - as delimiter

    return lowerCaseArray.join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
