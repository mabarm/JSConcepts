Input: obj = { age: 12, name: "xyz", hairColor: "black" };
// Output: ans = { 12: "age", xyz: "name", black: "hairColor" };

function invert(obj) {
  let ans = {};
  for (let key in obj) {
    let val = obj[key];
    ans[val] = key;
  }
  return ans;
}

let ans = invert(obj);
console.log("anss", ans);
