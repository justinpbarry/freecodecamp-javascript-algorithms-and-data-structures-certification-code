/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

let username = "RegexGuru";
let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$/;
let result = userCheck.test(username);
console.log(result)
