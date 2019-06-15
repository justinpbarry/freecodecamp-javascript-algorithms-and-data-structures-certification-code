/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
// let sampleWord = "bana12";
let pwRegex = /(?=\w{5,})(?=\D*\d\d)/;
let result = pwRegex.test(sampleWord);
console.log(result);
