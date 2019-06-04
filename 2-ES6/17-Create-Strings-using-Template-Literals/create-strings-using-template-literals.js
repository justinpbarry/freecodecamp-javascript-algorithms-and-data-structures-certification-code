/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use template literal syntax with backticks to display each entry of the result object's failure array.
Each entry should be wrapped inside an li element with the class attribute text-warning,
and listed within the resultDisplayArray.

resultDisplayArray is an array containing result failure messages.
resultDisplayArray is the desired output.
Template strings were used

*/

/* below is the original code

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
// const resultDisplayArray = makeList(result.failure);


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";
    let resultDisplayArray = [];

    for (let i in arr) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log("resultDisplayArray is ", resultDisplayArray);








//
