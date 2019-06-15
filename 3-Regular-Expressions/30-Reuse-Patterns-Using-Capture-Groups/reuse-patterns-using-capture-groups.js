/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Using the .match() method on a string will return an array with the string it matches, along with its capture group.

// let repeatNum = "42 42 42";
let repeatNum = "100 100 100";
let reRegex = /^(\d*)\s\1\s\1$/
let result = reRegex.test(repeatNum);
console.log(result);
