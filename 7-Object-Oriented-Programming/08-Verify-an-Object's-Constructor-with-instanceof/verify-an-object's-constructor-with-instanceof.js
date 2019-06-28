/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Create a new instance of the House constructor, calling it myHouse and passing a
// number of bedrooms. Then, use instanceof to verify that it is an instance of House.

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(20);
myHouse instanceof House;

//
