/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

let sample = "Whitespace is important in separating words";
// let sample = "Men are from Mars and women are from Venus.";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result);
