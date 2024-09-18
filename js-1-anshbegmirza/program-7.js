// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]
'use strict';
const array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

let result = [];

for (let i = 0; i < array.length; i++) {
  let isUnique = false;

  for (let j = 0; j < result.length; j++) {
    if (array[i].title === result[j].title) {
      isUnique = true;
      break;
    }
  }
  if (!isUnique) {
    result.push(array[i]);
  }
}

console.log(result);


/*
//using filter method
const uniqueElements = array.filter(
  (obj, index) => {
    return index === array.findIndex(o => obj.title === o.title);
  }

);
*/