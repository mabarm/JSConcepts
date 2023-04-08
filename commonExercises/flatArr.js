/*
/*
Flatten Array - 1

Medium
Given a N dimensional array of integers arr, flatten this array to form a single dimensional array and return it.


Example 1:

Input: arr = [[[1, [1.1]], 2, 3], [4, 5]]
Output: [1, 1.1, 2, 3, 4, 5]
Example 2:

Input: arr = [1, 2, 3, [4, 5]] 
Output: [1, 2, 3, 4, 5]
Follow-up: Do this without using in-built method
*/

/**
 * @param {number[][]} arr
 * @return {number[]}
 */

/**
 * Do not change this function body
 * Do your changes within the function
 */

return function flattenArray(arr) {
  // your code goes here
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (Array.isArray(val)) {
      let temp = flattenArray(val);
      for (let j = 0; j < temp.length; j++) {
        let tempVal = temp[j]; //[3,4]
        ans.push(tempVal);
      }
    } else {
      ans.push(val);
    }
  }
  return ans;
};
