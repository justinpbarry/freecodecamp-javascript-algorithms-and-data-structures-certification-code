/*
    code made by Justin Barry 2019-05-29
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/
// see solution-explanation.txt in this folder for the explanation to this problem

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let updatedArray = [];
    let sateliteRadius = "";
    let sateliteOrbitalPeriod = ""

    for (let i=0; i<arr.length; i++) {
        let tempObject = {};
        tempObject.name = arr[i].name;
        sateliteRadius = earthRadius + arr[i].avgAlt;
        sateliteOrbitalPeriod = Math.round( 2 * Math.PI * Math.sqrt( (sateliteRadius ** 3) / GM ) );
        tempObject.orbitalPeriod = sateliteOrbitalPeriod;
        updatedArray.push(tempObject);
    }
    return updatedArray;
}

// below are examples that can be used to test the above function orbitalPeriod
let example1 = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(example1);
let example2 = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(example2);
