/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Change the regex timRegex to match the word "Timber" only when it has four letter m's.

// let timStr = "Timmmmber";
let timStr = "Timmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log(result)
