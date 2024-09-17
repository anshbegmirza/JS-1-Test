// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")
'use strict';
const inputArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const frequentItemCounter = function (arr) {
  let mostFrequentItem = null;
  let highestCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    let count = 0;


    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === currentItem) {
        count++;
      }
    }

    if (count > highestCount) {
      highestCount = count;
      mostFrequentItem = currentItem;
    }
  }
  console.log(`${mostFrequentItem} ${highestCount} Times`);
}
frequentItemCounter(inputArray);
frequentItemCounter([1, 2, 3, 3, 4, 1, 2, 32, 4, 5, 46, 2, 2]);

