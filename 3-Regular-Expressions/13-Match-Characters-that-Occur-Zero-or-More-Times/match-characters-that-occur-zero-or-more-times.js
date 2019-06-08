/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieQuote = "He made a fair move. Screaming about it can't help you.";
let chewieRegex = /Aa*/g;
let result = chewieQuote.match(chewieRegex);
console.log('result is', result);
