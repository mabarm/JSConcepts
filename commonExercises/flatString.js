/*
Deep Filter Object

Medium
Create a function in javascript which will take a nested object obj and a filter function filter as input and return the filtered object.

Note: The filtering should happen on the value.


Example 1:

Input:
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
    f: {
      g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

Output:
{
  b: {
    c: "Hello World",
    h: "Good Night Moon",
  }
}
*/
function deepFilter(obj, filter) {
  // your code goes here
  let ans = {};
  for (let key in obj) {
    let val = obj[key];
    console.log("kooo", val, key);
    if (typeof val == "object" && !Array.isArray(val)) {
      let temp = deepFilter(val, filter);
      //   if (temp != {})
      if (temp.entries().length != 0) ans[key] = temp;
    } else {
      let checking = filter(val);
      console.log("red", checking, val);
      if (checking) {
        ans[key] = val;
      }
      console.log("nnnn", ans);
    }
  }
  return ans;
}

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

let ans = deepFilter({}, filter);
console.log("anss", ans);

/*
/**
* @param {object {}} obj
* @param {function()} filter
* @return {object}
*/

/**
 * Do not change this function body
 * Do your changes within the function
 */

return function deepFilter1(obj, filter) {
  // your code goes here

  let ans = {};
  for (let key in obj) {
    let val = obj[key];
    if (typeof val == "object" && !Array.isArray(obj)) {
      let temp = deepFilter(val, filter);
      //if(temp != {})
      if (Object.entries(temp).length != 0) ans[key] = temp;
    } else {
      let check = filter(val);
      if (check) ans[key] = val;
    }
  }
  return ans;
};
