# Fibonacci Sequence and Merge Sort Algorithms

This repository contains JavaScript implementations of the Fibonacci sequence using both iterative and recursive approaches, as well as a recursive implementation of the Merge Sort algorithm. These projects are part of the Odin Project JavaScript Full Stack curriculum.

## Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

### Iterative Fibonacci (`fibs`)

The `fibs` function generates a specified number of Fibonacci sequence numbers using an iterative approach.

### Recursive Fibonacci (`fibsRec`)

The `fibsRec` function generates Fibonacci sequence numbers recursively.

## Merge Sort

Merge Sort is a divide-and-conquer algorithm that recursively divides the input array into halves until each sub-array contains only one element. It then merges the sorted sub-arrays to produce a sorted array.

### Merge Sort (`mergeSort`)

The `mergeSort` function sorts an array using the recursive Merge Sort algorithm.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ozioma45/Recursion_in_js
   ```

2. Navigate into the project directory:

   ```bash
   cd fibonacci-merge-sort
   ```

## Usage

### Fibonacci Sequence

- To use the iterative Fibonacci function (`fibs`):

  ```javascript
  const fibSequence = fibs(8);
  console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  ```

- To use the recursive Fibonacci function (`fibsRec`):

  ```javascript
  const fibSequenceRec = fibsRec(8);
  console.log(fibSequenceRec); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  ```

### Merge Sort

- To use the Merge Sort function (`mergeSort`):

  ```javascript
  const unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  ```

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
