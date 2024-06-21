function mergeSort(array) {
  // Base case: if the array length is 0 or 1, it's already sorted
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays and push smaller one to result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Push remaining elements from left array (if any)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Push remaining elements from right array (if any)
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Testing the mergeSort function
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
