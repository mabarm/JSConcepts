/*
Array Map Polyfill

Easy
Given an array of integers arr, and a function cb as input, return a new array from the output of calling the function passed as argument on each element of the input array.

MDN -
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


Example 1:

Input: arr = [1, 2, 3, 4, 5], cb = function(elm){return elm * 2};
Output: [2, 4, 6, 8, 10]
Example 2:

Input: arr = [1, 2, 3, 5], cb = function(elm){return elm + 2};
Output: [3, 4, 5, 6, 7]
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

return function map(arr, cb) {
  // your code goes here
  let newArr = [];
  for (let val of arr) {
    let temp = cb(val);
    newArr.push(temp);
  }
  return newArr;
};

//let newArr = arr.map(cb);
// return newArr;
