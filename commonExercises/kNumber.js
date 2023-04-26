function kFrequency(arr, k) {
  // your code goes here
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (map.has(val)) {
      let getVal = map.get(val);
      getVal = getVal + 1;
      map.set(val, getVal);
    } else {
      map.set(val, 1);
    }
  }

  let ans = Number.MAX_VALUE;
  for (let [key, item] of map) {
    console.log(item);
    if (item == k) {
      ans = Math.min(key, ans);
    }
  }
  if (ans == Number.MAX_VALUE) return -1;
  return ans.toString();
}
let ans = kFrequency([2, 4, 4, 3, 3, 3, 7, 7, 7, 8], 3);
console.log("aaa", typeof ans);
let x = ans.toString();
console.log(typeof x);

console.log("ans", x);
