/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

// let favWord = "favorite";
// let favWord = "favourite";
let favWord = "fav";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
console.log(result);
