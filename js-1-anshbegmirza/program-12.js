// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

'use strict';

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];


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

const differenceFunction = function (arr1, arr2) {
  let uniqueElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      uniqueElements.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      uniqueElements.push(arr2[i]);
    }
  }
  bubbleSort(uniqueElements);
  return uniqueElements;
}

console.log(differenceFunction(arr2, arr1));

const array4 = [0, 9, 8];
const array5 = [6, 5, 4, 2];
console.log(differenceFunction(array4, array5));
