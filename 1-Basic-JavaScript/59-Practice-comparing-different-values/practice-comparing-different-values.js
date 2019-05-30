function compareEquality(a, b) {
  // now only using strict equality operator. Previously it was using equality operator
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
