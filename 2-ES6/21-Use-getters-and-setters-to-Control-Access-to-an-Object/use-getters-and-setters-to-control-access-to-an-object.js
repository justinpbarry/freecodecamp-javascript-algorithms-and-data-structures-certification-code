/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

Note

When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer.

Thermostat should be a class with a defined constructor method.
class keyword was used.
Thermostat can be instantiated.

*/

/* below is the original code

//
// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//
//   /* Alter code above this line */
//   return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C

function makeClass() {
    "use strict";

    class Thermostat {
        constructor(fTemp) {
            this._fTemp = fTemp;
            this._cTemp = this.convertToC(this._fTemp);
        }

        convertToC(F) {
            return 5 / 9 * (F - 32);
        }

        convertToF(C) {
            return C * 9.0 / 5 + 32;
        }

        get temperature() {
            return this._cTemp;
        }

        set temperature(newTemp) {
            this._cTemp = newTemp;
            this._fTemp = this.convertToF(newTemp);
        }
    }

    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C









//
