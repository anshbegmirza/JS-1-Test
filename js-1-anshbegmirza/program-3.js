// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]
'use strict';
const inputArray = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

const bubbleSort = function (arr) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  }
  while (isSwapped)
  return arr;
}
console.log(bubbleSort(inputArray));