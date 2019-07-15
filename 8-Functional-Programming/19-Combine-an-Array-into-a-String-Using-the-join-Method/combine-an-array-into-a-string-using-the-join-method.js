/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function sentensify(str) {
  // Add your code below this line
  // turn into an array removing punctuation then join bac
  let temp = str.split(/[^a-zA-Z0-9]/);
  return temp.join(" ");
  // Add your code above this line
}

sentensify("May-the-force-be-with-you");
