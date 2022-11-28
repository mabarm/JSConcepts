function doSomething1(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

function mul(num) {
  return num * 10;
}
let array = [1, 2, 3];

let res = array.map((num) => num * 1);
console.log(res);

let res1 = doSomething1(array, mul);
console.log("result", res1);

Array.prototype.myMap = function doSomething(callback, thisArg) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const res3 = [1, 10].myMap((num) => num * 100);
console.log("res3", res3);
