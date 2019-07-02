/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

/* original code
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
*/

// my code
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            }
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            }
        }
    }
})();

let myCat = {
    age: 10,
    gender: "male"
};

funModule.isCuteMixin(myCat);
console.log(myCat.isCute());
