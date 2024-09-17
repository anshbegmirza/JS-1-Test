/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false



'use strict';
// const flowerbed = [1, 0, 0, 0, 1];
const flowerbed = [1, 0, 0, 0, 1];

const checkFlowers = function (arr, number) {
  let n = 0;
  let isEmpty;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      const isLeftEmpty = (i === 0 || arr[i - 1] === 0);
      const isRightEmpty = (arr.length - 1 === 0 || arr[i + 1] === 0);

      if (isLeftEmpty && isRightEmpty) {
        arr[i] = 1;
        n++;

        if (n === number) {
          isEmpty = true;
        }
        i++;
      }
    }
  }
  // console.log(isEmpty);
  return n >= number;
}
// console.log(checkFlowers(flowerbed, 1));

const flowerbed2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
console.log(checkFlowers(flowerbed2, 2));
