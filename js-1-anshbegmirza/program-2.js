// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

'use strict';
const arr = [1, 2, [3, 4], [5, [6, 7]]];
const ip1 = [1, 2, 3, 3, 2, 2, 4, 1, 4, 5, 6,];

// function to remove duplicates in array
const removeDuplicates = function (array) {
  let unique = [];
  let size = array.length;
  for (let i = 0; i < size; i++) {
    let isPresent = false;
    for (let j = 0; j < unique.length; j++) {
      if (array[i] === unique[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      unique.push(array[i]);
    }
  }
  return unique;
}

// console.log(removeDuplicates(ip1));


function flattenArray(arr) {
  let result = [];

  // flattening array
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      let flatten = flattenArray(arr[i]);
      for (let j = 0; j < flatten.length; j++) {
        result.push(flatten[j]);
      }
      result = result.concat(flattenArray(arr[i]));
    }
    else {
      result.push(arr[i]);
    }
  }

  //Removing duplicates
  return removeDuplicates(result);
}


console.log(`Original Array:`, arr);
console.log(flattenArray(arr));




// console.log(`Second input`);

// const trial = flattenArray([1, [2, 3], [3, 4, 5, 6], [3, [4, [4]]]]);
// console.log(trial);


// using array method isArray()
// (Array.isArray(arr[i]))
//result = result.concat(flattenArray(arr[i]));