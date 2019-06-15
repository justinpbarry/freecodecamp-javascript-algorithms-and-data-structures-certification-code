/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g;
let result = hello.replace(wsRegex, "");
console.log(result);
