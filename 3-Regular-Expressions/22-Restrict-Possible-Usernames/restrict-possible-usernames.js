/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// let username = "JackOfAllTrades";

// NEED TO FINISH !!! For some reason it isn't accepting my solution
let username = "JACK";
let userCheck = /[a-zA-Z][a-zA-Z][a-zA-Z]*\d*$/g;
let result = userCheck.test(username);
console.log(result);


let username = "JACK";
let userCheck = /[a-zA-Z][a-zA-Z]+\d*$/g;
let result = userCheck.test(username);

let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$/g;
let result = userCheck.test(username);

let username = "RegexGuru";
let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$/g;
let result = userCheck.test(username);
