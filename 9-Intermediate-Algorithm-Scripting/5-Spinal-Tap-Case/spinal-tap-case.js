/*
    code made by Justin Barry 2019-05-29
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

function spinalCase(str) {
    // space single spaces by -
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

                // check if it is the first character
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

let bbb = spinalCase('This Is Spinal Tap');
let ccc = spinalCase("The_Andy_Griffith_Show");
let ddd = spinalCase("AllThe-small Things");
console.log(bbb);
console.log(ccc);
console.log(ddd);
