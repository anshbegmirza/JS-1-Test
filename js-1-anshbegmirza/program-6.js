// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
'use strict';

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];

const mergeArray = function (arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    let isInArray3 = false;

    for (let j = 0; j < arr3.length; j++) {
      if (arr2[i] === arr3[j]) {
        isInArray3 = true;
        break;
      }
    }

    if (!isInArray3) {
      arr3.push(arr2[i]);
    }
  }

  return arr3;
}

// console.log(mergeArray(arr1, arr2));

const arr3 = [2, 3, 13, 2, 3, 5];
const arr4 = [2, 3, 3, 4, 5, 6, 7,];
console.log(mergeArray(arr3, arr4));



// Using Set and concat
/*
const mergeArray = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3 = new Set(arr3);
  arr3 = [...arr3];
  console.log(arr3);
}

mergeArray(arr1, arr2);
// mergeArray([1, 2, 3, 4, 5, 6, 7], [0]);

*/