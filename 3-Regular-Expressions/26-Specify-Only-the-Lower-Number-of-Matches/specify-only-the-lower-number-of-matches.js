/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

// let haStr = "Hazzzzah";
// let haStr = "Hazzzzzzah";
let haStr = "Hazzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
console.log(result)
