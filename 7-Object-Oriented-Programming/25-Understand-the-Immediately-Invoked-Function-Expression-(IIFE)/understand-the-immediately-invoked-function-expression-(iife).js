/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Rewrite the function makeNest and remove its call so instead it's an anonymous
// immediately invoked function expression (IIFE).

/* original code
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
*/

// my code

(function() {
    console.log("A cozy nest is ready");
})();
