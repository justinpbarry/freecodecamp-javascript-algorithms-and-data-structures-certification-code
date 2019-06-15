/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// let sample = "Whitespace is important in separating words";
let sample = "Space: the final frontier.";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
console.log(result.length);
