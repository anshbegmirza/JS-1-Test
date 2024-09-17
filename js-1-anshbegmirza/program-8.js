// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
'use strict';
const input = '025468';
// const input = '336368';

const insertDashes = function (number) {
  const numberStr = number.toString();
  let result = '';
  for (let i = 0; i < numberStr.length; i++) {
    const digit = numberStr[i];
    const nextdigit = numberStr[i + 1]
    result = result + digit;
    if (digit % 2 === 0 && nextdigit % 2 === 0 && i < numberStr.length - 1) {
      result = result + '-';
    }
  }
  return result;
}
console.log(`Original Number: ${input}`);
console.log(`Dashed Inserted: ${insertDashes(input)}`);

