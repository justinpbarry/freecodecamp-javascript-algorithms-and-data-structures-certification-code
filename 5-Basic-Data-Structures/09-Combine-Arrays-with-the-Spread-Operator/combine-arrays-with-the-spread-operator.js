/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* original code
function spreadOut() {
 let fragment = ['to', 'code'];
 let sentence; // change this line
 return sentence;
}

// do not change code below this line
console.log(spreadOut());
*/


// My code
function spreadOut() {
 let fragment = ['to', 'code'];
 let sentence = ['learning',...fragment,'is','fun'];
 return sentence;
}

// do not change code below this line
console.log(spreadOut());
