/*
    code made by Justin Barry
    https://justinpbarry.com
    You are free to use this code as you like. Please just give me credit.
*/

// Refactor (rewrite) the code so the global array bookList is not
// changed inside either function.
// The add function should add the given bookName to the end of an array.
// The remove function should remove the given bookName from an array. Both functions
// should return an array, and any new parameters should be added before the bookName one.



/* below is original code
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// This function should add a book to the list and return the list
// New parameters should come before the bookName one

// Add your code below this line
function add (bookName) {

  return bookList.push(bookName);

  // Add your code above this line
}

// This function should remove a book from the list and return the list
// New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
  if (bookList.indexOf(bookName) >= 0) {

    return bookList.splice(0, 1, bookName);

    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
*/

// below is my code

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies",
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (arr, bookName) {
  // need to make copy of array because I don't want to effect original array
  let arrCopy = [...arr];
  arrCopy.push(bookName);
  return arrCopy;
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (arr, bookName) {
    // need to make copy of array because I don't want to effect original array
    let arrCopy = [...arr];

  if (arrCopy.indexOf(bookName) >= 0) {
    arrCopy.splice(arr.indexOf(bookName), 1);
    return arrCopy;
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);



//
