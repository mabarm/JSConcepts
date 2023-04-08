/*
Array Filter Polyfill

Easy
Given an array of integers arr, and a function cb as input, return a new array from the element which passes test specified in the function.

MDN -
The filter() method creates a new array with all elements that pass the test implemented by the provided function.


Example 1:

Input: arr = [1, 2, 3, 4, 5], cb = function(elm){return elm % 2 === 0};
Output: [2, 4]
Example 2:

Input: arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], cb = function(word){return word.length > 6};
Output: ["exuberant", "destruction", "present"]
Follow-up: Do this without using in-built methods
*/

/**
 * @param {number[]} arr
 * @param {function()} cb
 * @return {number[]}
 */

/**
 * Do not change this function body
 * Do your changes within the function
 */

return function filter(arr, cb) {
  // your code goes here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(arr[i]);
    if (temp) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
