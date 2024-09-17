// Write a JavaScript program to clone an array.
'use strict';
const arr1 = ['a', 's', 1, 2, 3, 'v', 's'];
const arr2 = [];

const cloneArray = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  console.log(arr2);
}

cloneArray(arr1, arr2);


