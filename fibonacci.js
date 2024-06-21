// Iterative function to return Fibonacci sequence up to 'n' elements
function fibs(n) {
  // Handle cases where 'n' is 0 or 1
  if (n === 0) return [];
  if (n === 1) return [0];

  // Initialize the array with the first two Fibonacci numbers
  let fibArray = [0, 1];

  // Generate the sequence up to 'n' elements
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

// Testing the iterative function
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Recursive function to return Fibonacci sequence up to 'n' elements
function fibsRec(n) {
  // Helper function to actually build the sequence recursively
  function helper(n) {
    // Base cases for 0 and 1 elements
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    // Get the sequence up to 'n-1' elements
    let fibArray = helper(n - 1);
    // Append the next Fibonacci number to the sequence
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );

    return fibArray;
  }

  return helper(n);
}

// Testing the recursive function
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Test cases for the iterative function
console.log(fibs(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibs(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Test cases for the recursive function
console.log(fibsRec(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibsRec(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
