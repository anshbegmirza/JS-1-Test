// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

'use strict';

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const uniqueElements = [];

const differenceFunction = function (arr1, arr2) {
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
  return uniqueElements;
}
// console.log(differenceFunction(arr1, arr2));
const arr3 = [2, 3, 4, 4, 1, 23, 9.76];
const arr4 = [9, 8, 7, 8, 6, 7, 7, 8, 9, 0, 55];
console.log(differenceFunction(arr3, arr4));
