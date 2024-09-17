// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

'use strict';
const arr = [1, 2, [3, 4], [5, [6, 7]]];


function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
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
const trial = flattenArray([1, [2, 3], [3, 4, 5, 6], [3, [4, [4]]]]);
console.log(trial);
