/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* instructions
Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.
maxOfTomorrow equals 84.6
nested destructuring was used

*/

/* below is the original code
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const maxOfTomorrow = undefined; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
*/

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // const { today: { min: minOfToday, max: maxOfToday }, tomorrow: {min: minOfTomorrow, max: maxOfTomorrow}  } = forecast
  const { tomorrow: {max: maxOfTomorrow}  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
