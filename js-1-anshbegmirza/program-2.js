// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

'use strict';
const arr = [1, 2, [3, 4], [5, [6, 7]]];

console.log(typeof arr[2]);

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'object') {
      result = result.concat(flattenArray(arr[i]));
    }
    else {
      result.push(arr[i]);
    }
  }
  return result;
}


console.log(`Original Array:`, arr);
console.log(flattenArray(arr));

// console.log(`Second input`);

// const trial = flattenArray([1, [2, 3], [3, 4, 5, 6], [3, [4, [4]]]]);
// console.log(trial);


// using array method isArray()
// (Array.isArray(arr[i]))