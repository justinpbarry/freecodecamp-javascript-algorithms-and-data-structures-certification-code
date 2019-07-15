/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Use the split method inside the splitify function to split str into an array of words.
// The function should return the array. Note that the words are not always separated by spaces,
// and the array should not contain punctuation.

function splitify(str) {
  // Add your code below this line

  return str.split(/[^a-zA-Z0-9]/)
  // Add your code above this line
}
splitify("Hello World,I-am code");
