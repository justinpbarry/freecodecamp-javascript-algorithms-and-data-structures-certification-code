/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
          newArr.push(arr[i]);
      }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


/*
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [ [10, 8, 3], [14, 6, 23] ]
filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2) should return [ ["flutes", 4] ]
filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter") should return [ ["amy", "beth", "sam"] ]
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return [ ]
The filteredArray function should utilize a for loop
*/
