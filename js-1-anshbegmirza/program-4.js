// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

'use strict';
const arr1 = [-9, -5, 1];
const arr2 = [4, -2];
const ip3 = [3, 5, 1];
const ip2 = [4, 2];


//Sorting function
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


//Merge two arrays
const mergeArrays = function (arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i])
  }
  console.log(bubbleSort(arr3));

}

console.log(`First Input`);
mergeArrays(arr1, arr2);
console.log(`Second INPUT`);
mergeArrays(ip2, ip3);
