/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Rewrite the function nonMutatingSplice by using slice instead of splice. It
// should limit the provided cities array to a length of 3, and return a new array with
// only the first three items.

function nonMutatingSplice(cities) {
  // Add your code below this line
  // return cities.splice(3);
  return cities.slice(0,3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
