/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let copyOfArr2 = arr2.slice();

  // splice will be all we need now to solve. Start at index n in copyOfArr2, and delete 0 elements. Then add in all the values from arr1
  // copyOfArr2's values will change after using splice
  copyOfArr2.splice(n,0,...arr1);

  return copyOfArr2;

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
// frankenSplice([1, 2], ["a", "b"], 1)
