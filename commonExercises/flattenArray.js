let myarray = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12],
];

function flattenArray(array) {
  let ans = [];

  for (let key in array) {
    let value = array[key];
    if (!Array.isArray(value)) {
      ans.push(value);
    } else {
      let temp = flattenArray(value);
      for (let tempkeys in temp) {
        let tempValue = temp[tempkeys];
        // let element = tempkeys + "." + tempValue;
        ans.push(tempValue);
      }
    }
  }
  return ans;
}

console.log(flattenArray(myarray));
let flattened = [].concat.apply([90], myarray);
console.log(flattened);

let flattened2 = [].concat(...myarray);
console.log(flattened2);

//currying see
const mulqq = mul(2)(3)(4);
console.log("re", mulqq);

function mul(n1) {
  return function mul2(n2) {
    return function mul3(n3) {
      return n1 * n2 * n3;
    };
  };
}
