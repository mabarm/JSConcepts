/*

Flatten Array - 2

Medium
Given a N dimensional array of integers arr and depth, flatten this array till the specified depth and return the flattened array.


Example 1:

Input: arr = [1, 2, 3, [4, 5, [6, 7]]] , depth = 1
Output: [1, 2, 2, 3, 4, 5, [6, 7]]
Example 2:

Input: arr = [1, 2, [3, 4], [[5]]] , depth = 2
Output: [1, 2, 2, 3, 4, 5]
Example 3:

Input: arr = [1, 2, [3, 4], [[5, [6, [7]]]]] , depth = Infinity
Output: [1, 2, 2, 3, 4, 5, 6, 7]
Follow-up: Do this without using in-built metho
*/
/**
 * @param {number[][]} arr
 * @param {number} depth
 * @return {number[]}
 */

/**
 * Do not change this function body
 * Do your changes within the function
 */
function flattenArray(arr, depth) {
  if (depth == 0) return arr;
  // your code goes here
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (Array.isArray(val)) {
      let temp = flattenArray(val, depth - 1);
      for (let j = 0; j < temp.length; j++) {
        ans.push(temp[j]);
      }
    } else {
      ans.push(val);
    }
  }
  return ans;
}

let x = [
  [[1, [1.1]], 2, 3],
  [4, 5],
];
let y = [1];
let z = [1, [2, 3]];
let a = 1;
let ans = flattenArray(x, 2);

console.log("answerjj", ans);

// 1,[1.1],2,3,4,5
