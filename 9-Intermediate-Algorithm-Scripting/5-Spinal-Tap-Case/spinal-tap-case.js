/*
    code made by Justin Barry 2019-05-29
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function spinalCase(str) {
    let newStr = "";
    let previousChanged = false;
    const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    for (let i = 0; i < str.length; i++) {
        // check if it's an uppercase letter
        if (upperCaseLetters.indexOf(str[i]) != -1) {
            // if previous character wasn't changed
            if (!previousChanged) {
                // check if the uppercase letter is the the first character
                if (i == 0) {
                    newStr += str[i].toLowerCase();
                } else {
                    newStr += "-" + str[i].toLowerCase();
                }
            } // if character is an uppercase letter and the previous character wasn't changed
            else {
                newStr += str[i].toLowerCase();
            }
        } // now for cases where the character is not an uppercase letter
        else {
            switch (str[i]) {
                case " ":
                    newStr += "-";
                    previousChanged = true;
                    break;
                case "_":
                    newStr += "-";
                    previousChanged = true;
                    break;
                default:
                    newStr += str[i];
                    previousChanged = false;
            }
        }
    }

    return newStr;
}

// below are examples that can be used to test the above function spinalCase
let example1 = spinalCase('This Is Spinal Tap');
let example2 = spinalCase("The_Andy_Griffith_Show");
let example3 = spinalCase("AllThe-small Things");
console.log(example1);
console.log(example2);
console.log(example3);
