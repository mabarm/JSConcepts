function leastFrequent(arr) {
  // your code goes here
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (map.has(val)) {
      let getVal = map.get(val) + 1;
      map.set(val, getVal);
    } else {
      map.set(val, 1);
    }
  }
  let ans = 0;
  let count = Number.MAX_VALUE;
  for (let [key, val] of map) {
    console.log("kee", key, val, "count", count);
    if (count > val) {
      ans = key;
      count = val;
    } else if (count == val) {
      console.log("ww", count, val, key);
      if (ans < key) {
        ans = key;
      }
    }
  }
  return ans;
}

let ans = leastFrequent([1, 1, 1, 2, 2, 4, 4]);
console.log("ams", ans);
