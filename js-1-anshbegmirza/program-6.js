// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
'use strict';

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];

const mergeArray = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3 = new Set(arr3);
  arr3 = [...arr3];
  console.log(arr3);
}

mergeArray(arr1, arr2);
// mergeArray([1, 2, 3, 4, 5, 6, 7], [0]);