let a = Number("ww");
console.log(a);

let b = Number("1");
console.log("b", b);

function filter(arr) {
  // your code goes here
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let num = false;
    for (let j = 0; j < arr[i].length; j++) {
      console.log("red", arr[i][j], typeof arr[i][j], Number(arr[i][j]));
      if (typeof arr[i][j] == "number") {
        num = true;
        console.log("heheheh", num);
        break;
      }
    }
    if (num) ans.push(arr[i]);
  }
  return ans;
}

let ans = filter(["1a", "a", "2b", "b"]);
console.log("ams", ans);

console.log(typeof 1);

/*
Filter strings with digits

Easy
Given a string array, filter the array and return the strings which contains atleast one digit character.


Example 1:

Input: ['1a', 'a', '2b', 'b']
Output: ['1a', '2b'
*/

/**
 * @param {string[]} arr
 * @return {string[]}
 */

/**
 * Do not change this function body
 * Do your changes within the function
 */

return function filterAns(arr) {
  // your code goes here
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let num = false;
    for (let j = 0; j < arr[i].length; j++) {
      if (Number(arr[i][j])) {
        num = true;
        break;
      }
    }
    if (num) ans.push(arr[i]);
  }
  return ans;
};
