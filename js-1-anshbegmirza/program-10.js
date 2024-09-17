// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

'use strict';


const sumArray = function (arr1, arr2) {
  let arr3 = [];
  let maxLength = 0;
  if (arr1.length > arr2.length) {
    maxLength = arr1.length;
  } else {
    maxLength = arr2.length;
  }

  let result = [];
  for (let i = 0; i < maxLength; i++) {
    let value1 = arr1[i] || 0;
    let value2 = arr2[i] || 0;
    arr3.push(value1 + value2)
  }
  console.log(arr3);
}
// sumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);

sumArray([1, 2, 5, 3, 6, 10], [6, 9, 5, 7, 4, 2, 3, 51,]);
