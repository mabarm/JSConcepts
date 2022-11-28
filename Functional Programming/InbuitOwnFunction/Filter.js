function doSomething(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
    // newArray.push(callback(array[i]));
  }
  return newArray;
}

const myFilter = (num) => num > 2;

let array = [1, 2, 3];

let result = doSomething(array, myFilter);
console.log("result", result);

Array.prototype.myFilter = function doSomething1(callback, thisArg) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const res3 = array.myFilter((num) => num > 1);
console.log("res3", res3);
